const CACHE='la-fauna-guide-v3.005';
const ASSETS=['./','./index.html','./species-data.json'];

self.addEventListener('install',e=>{
e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});

self.addEventListener('activate',e=>{
e.waitUntil(caches.keys().then(keys=>Promise.all(
keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))
)).then(()=>self.clients.claim()));});

self.addEventListener('fetch',e=>{
if(e.request.method!=='GET')return;
const url=new URL(e.request.url);
// Network-first for own assets
if(url.origin===location.origin){
e.respondWith(
fetch(e.request).then(resp=>{
if(resp.ok){const clone=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,clone));}
return resp;
}).catch(()=>caches.match(e.request))
);return;}
// Cache-first for CDN resources (fonts, leaflet, etc.)
e.respondWith(
caches.match(e.request).then(cached=>cached||fetch(e.request).then(resp=>{
if(resp.ok){const clone=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,clone));}
return resp;}))
);});
