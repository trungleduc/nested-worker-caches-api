self.onmessage = async (e) => {
  try {
    const cache = await caches.open("test-cache");
    await cache.put("/test.txt", new Response("Hello from nested worker!"));
    console.log("cache", cache);
    postMessage("✅ Cache API worked in sub-worker");
  } catch (e) {
    postMessage(`❌ Cache API failed in sub-worker: ${e.name} – ${e.message}`);
  }
};
