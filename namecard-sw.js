// 명함 스캔: 설치형 앱(PWA)용 서비스 워커
// - 앱 화면은 '인터넷이 되면 최신, 안 되면 저장본', 글자 인식 엔진·언어 데이터는 한 번 받으면 저장본을 쓴다.
const CACHE = 'namecard-v28';
const SHELL = ['./', './namecard.webmanifest', './namecard-icon-192.png', './namecard-icon-512.png', './namecard-apple-touch-icon.png'];
const CDN = ['cdn.jsdelivr.net', 'tessdata.projectnaptha.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k.startsWith('namecard-')).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (req.mode === 'navigate' && url.origin === location.origin) {
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put('./', copy)); return res;
    }).catch(() => caches.match('./')));
    return;
  }
  if (url.origin === location.origin && /\/namecard-[^/]+\.(png|webmanifest)$/.test(url.pathname)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
    return;
  }
  if (CDN.includes(url.hostname)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
  }
});
