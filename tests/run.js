// 명함 파서 회귀 시험: node tests/run.js
// index.html의 PARSER_START~PARSER_END 구간(parseCard·fixEmail·cleanAddr 등)을 그대로 꺼내 cases.json 과 비교한다.
const fs = require('fs'), vm = require('vm'), path = require('path');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const a = html.indexOf('/* ===== PARSER_START ====='), b = html.indexOf('/* ===== PARSER_END =====');
if (a < 0 || b < 0) { console.error('PARSER_START/END 표시를 찾지 못했습니다.'); process.exit(2); }
const ctx = {}; vm.createContext(ctx);
vm.runInContext(html.slice(a, b) + '\nthis.parseCard = parseCard; this.cleanAddr = cleanAddr; this.mergeEmailVotes = mergeEmailVotes; this.emailAlts = emailAlts;', ctx);
const cases = JSON.parse(fs.readFileSync(path.join(__dirname, 'cases.json'), 'utf8'));
let pass = 0, fail = 0, todo = 0, fixed = 0;
for (const c of cases) {
  const got = ctx.parseCard(c.ocr);
  const bad = Object.entries(c.expect).filter(([k, v]) => got[k] !== v);
  if (!bad.length) { if (c.todo) { fixed++; console.log('★ 이제 통과(todo 표시 해제하세요):', c.name); } else pass++; continue; }
  if (c.todo) { todo++; console.log('… 알려진 미해결:', c.name, bad.map(([k, v]) => `${k}: 기대 "${v}" / 실제 "${got[k]}"`).join(' | ')); continue; }
  fail++; console.log('✗ 실패:', c.name); bad.forEach(([k, v]) => console.log(`    ${k}: 기대 "${v}" / 실제 "${got[k]}"`));
}
// 두 번 읽은 이메일 투표(0/o·1/l)
const mv = [
  ['E-mail. ksk0148@hanmail.net', 'ie-mail.ksko148@hanmail.net', 'ie-mail.ksk0148@hanmail.net'],
  ['bobby1004@gmail.com', 'bobbyl004@gmail.com', 'bobby1004@gmail.com'],
  ['hello@naver.com', 'hel1o@naver.com', 'hel1o@naver.com'],   // 숫자 옆이 아니면 확대 읽기 쪽을 따름(후보 칩이 보완)
  ['kim@a.com', 'lee@a.com', 'lee@a.com'],
  ['happyhome2115@daum.net', 'ppyhome2115@daum..net', 'happyhome2115@daum.net'],   // 한쪽에서 앞 글자 누락
  ['ppyhome2115@daum.net', 'happyhome2115@daum.net', 'happyhome2115@daum.net']
];
for (const [A, B, want] of mv) { const got = ctx.mergeEmailVotes(A, B); if (got === want) pass++; else { fail++; console.log('✗ 이메일 투표 실패:', A, B, '기대', want, '실제', got); } }
// 이메일 후보에 정답이 들어가는지(앞쪽 3개 안)
const ea = [['kokumalo@naver.com', 'kokuma10@naver.com'], ['vinool@naver.com', 'vinoo1@naver.com'], ['ksko148@hanmail.net', 'ksk0148@hanmail.net']];
for (const [from, want] of ea) { const l = ctx.emailAlts(from).slice(0, 3); if (l.includes(want)) pass++; else { fail++; console.log('✗ 이메일 후보 실패:', from, '기대', want, '실제', l.join(',')); } }
console.log(`\n통과 ${pass} · 실패 ${fail} · 알려진 미해결 ${todo}` + (fixed ? ` · 해결됨 ${fixed}` : ''));
process.exit(fail ? 1 : 0);
