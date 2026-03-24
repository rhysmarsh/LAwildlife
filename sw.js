const CACHE='la-vert-guide-v2.004';
const ASSETS=['/','/index.html'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.origin!==location.origin&&!u.hostname.includes('fonts.googleapis.com')&&!u.hostname.includes('fonts.gstatic.com')&&!u.hostname.includes('unpkg.com'))return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(nr=>{if(nr.ok&&u.origin===location.origin){const c=nr.clone();caches.open(CACHE).then(ca=>ca.put(e.request,c))}return nr}).catch(()=>caches.match('/index.html'))))});
