# 명함 스캔 → 연락처 저장

명함 사진을 찍거나 올리면 글자를 인식(OCR)해 이름·회사·직책·전화·이메일·주소 칸을 채우고, 연락처 파일(.vcf)로 내려받아 휴대폰 연락처 앱(삼성 연락처 포함)에 저장하게 해 주는 페이지입니다.

- 주소: https://littlestarkr.github.io/namecard/
- 기본: 사진은 서버로 보내지 않고 브라우저 안에서만 처리합니다(Tesseract). 처음 한 번은 한글 인식 데이터를 내려받느라 시간이 걸립니다.
- AI 인식(선택): 아래 설정을 마치면 Claude 비전으로 훨씬 정확하게 읽습니다. 이때 사진은 인식을 위해 Anthropic 서버로 전송되며, 실패하면 기본 방식으로 자동 전환됩니다.
- 인식 결과가 틀릴 수 있으니 저장 전에 칸을 확인·수정하세요.
- 웹페이지는 연락처 앱에 직접 쓸 수 없어서, .vcf 파일을 연 뒤 '저장'을 한 번 눌러야 합니다.
- 크롬 메뉴 → '앱 설치'로 독립 앱으로 설치할 수 있습니다.

## AI 인식 켜기 (Cloudflare Worker 중계 서버)

API 키를 웹페이지에 넣으면 누구나 볼 수 있으므로, 키는 `worker/`의 Cloudflare Worker에만 보관합니다.

1. Anthropic Console에서 API 키를 만들고 월 사용 한도를 낮게(예: $5) 설정합니다.
2. `cd worker && npx wrangler deploy` (Cloudflare 무료 계정 필요)
3. `npx wrangler secret put ANTHROPIC_API_KEY` 로 키를 입력합니다.
4. 배포된 주소(`https://namecard-ai.○○○.workers.dev`)를 명함 페이지 하단 **AI 인식 설정**에 붙여 넣고 저장 → **연결 시험**.

- 허용 사이트는 `wrangler.toml`의 `ALLOWED_ORIGINS`(기본 `https://littlestarkr.github.io`), 모델은 `MODEL`로 바꿉니다.
- 주소는 폰 브라우저(localStorage)에만 저장되므로 코드에 비밀이 남지 않습니다.
