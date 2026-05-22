self.addEventListener('push', function(e) {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch(err) {}
  const title = d.title || '💊 用藥提醒';
  const opts = {
    body: d.body || '',
    data: { url: d.url || 'https://jeclily0412-ui.github.io/med-reminder/' },
    tag: 'med-reminder'
  };
  e.waitUntil(self.registration.showNotification(title, opts));
});

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url));
});
