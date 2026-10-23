/* Cuadre se mudó a https://cuadre-inventario.github.io/ — este service worker solo borra lo viejo y se desactiva. */
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil((async function(){
  try{var ks=await caches.keys();await Promise.all(ks.filter(function(k){return k.indexOf('cuadre-')===0}).map(function(k){return caches.delete(k)}))}catch(x){}
  try{await self.registration.unregister()}catch(x){}
  try{var cs=await self.clients.matchAll({type:'window'});cs.forEach(function(c){try{c.navigate('https://cuadre-inventario.github.io/')}catch(x){}})}catch(x){}
})())});
