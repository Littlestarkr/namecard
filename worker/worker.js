// 명함 스캔 AI 중계 서버 (Cloudflare Worker)
// - API 키는 Worker 비밀값(ANTHROPIC_API_KEY)에만 두고 웹페이지에는 노출하지 않는다.
// - 허용된 사이트(ALLOWED_ORIGINS)에서 온 요청만 처리하고, 프롬프트는 서버에 고정해 범용 프록시로 악용되지 않게 한다.

const PROMPT = `이 사진은 명함입니다. 명함에 인쇄된 정보를 읽어 아래 키를 가진 JSON 객체 하나만 출력하세요. 설명·코드블록·다른 문자는 쓰지 마세요.

키: lname, fname, org, dept, title, mobile, tel, ext, fax, email, web, addr

규칙:
- 보이는 글자를 그대로 옮기고, 보이지 않거나 확실하지 않은 값은 추측하지 말고 "" 로 둡니다.
- 이름: 한글 이름은 lname=성(보통 1글자, 남궁·황보 등 복성은 2글자), fname=나머지. 영문 이름은 lname=성(Family name), fname=이름. 한글과 영문이 함께 있으면 한글을 우선합니다.
- org=회사/기관명(로고 옆 글자 포함), dept=부서, title=직책·직위. 직책이 여러 개면 " / "로 이어 씁니다.
- mobile=휴대폰(010 등), tel=회사 일반전화, ext=내선번호, fax=팩스. 전화번호는 하이픈 포함 원문 형식으로 씁니다.
- email: 숫자 1과 영문 l·I, 숫자 0과 영문 O를 문맥과 폰트 모양으로 신중히 구분합니다.
- web: 홈페이지 주소(있을 때만). addr: 주소를 한 줄로, 아이콘·기호는 빼고 씁니다.`;

const json = (obj, status, cors) => new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...cors } });

export default {
  async fetch(req, env) {
    const allowed = (env.ALLOWED_ORIGINS || 'https://littlestarkr.github.io').split(',').map(s => s.trim()).filter(Boolean);
    const origin = req.headers.get('Origin') || '';
    const cors = {
      'Access-Control-Allow-Origin': allowed.includes(origin) ? origin : allowed[0],
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Vary': 'Origin',
    };
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (req.method !== 'POST') return json({ error: 'POST only' }, 405, cors);
    if (!allowed.includes(origin)) return json({ error: 'forbidden origin' }, 403, cors);
    if (!env.ANTHROPIC_API_KEY) return json({ error: 'server not configured' }, 500, cors);

    const model = env.MODEL || 'claude-sonnet-5-5';
    let body;
    try { body = await req.json(); } catch (e) { return json({ error: 'bad json' }, 400, cors); }
    if (body && body.ping) return json({ ok: true, model }, 200, cors);

    const img = body && body.image, mt = body && body.media_type;
    if (typeof img !== 'string' || img.length < 100 || img.length > 6_000_000) return json({ error: 'bad image' }, 400, cors);
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(mt)) return json({ error: 'bad media_type' }, 400, cors);

    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({
        model, max_tokens: 700,
        messages: [{ role: 'user', content: [
          { type: 'image', source: { type: 'base64', media_type: mt, data: img } },
          { type: 'text', text: PROMPT },
        ] }],
      }),
    });
    if (!r.ok) return json({ error: 'upstream ' + r.status }, 502, cors);
    const data = await r.json();
    const text = ((data.content || []).find(b => b.type === 'text') || {}).text || '';
    const a = text.indexOf('{'), b = text.lastIndexOf('}');
    if (a < 0 || b < a) return json({ error: 'no json' }, 502, cors);
    let card;
    try { card = JSON.parse(text.slice(a, b + 1)); } catch (e) { return json({ error: 'bad model json' }, 502, cors); }
    const KEYS = ['lname', 'fname', 'org', 'dept', 'title', 'mobile', 'tel', 'ext', 'fax', 'email', 'web', 'addr'];
    const out = {}; KEYS.forEach(k => { out[k] = card[k] == null ? '' : String(card[k]).trim().slice(0, 300); });
    return json({ card: out }, 200, cors);
  },
};
