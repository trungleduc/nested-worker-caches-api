const cacheWorker = new Worker("cache.worker.js");

self.onmessage = (e) => {
  cacheWorker.postMessage(e.data);
};
cacheWorker.onmessage = (e) => {
  postMessage(e.data);
};

cacheWorker.onerror = (e) => {
  postMessage(`Cache Worker error: ${e.message}`);
};
