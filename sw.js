const APP_URL = 'https://jeclily0412-ui.github.io/med-reminder';

self.addEventListener('push', function(e) {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch(err) {}
  e.waitUntil(
    self.registration.showNotification(d.title || '💊 用藥提醒', {
      body: d.body || '',
      icon: APP_URL + '/icon.png',
      badge: APP_URL + '/icon.png',
      data: { url: d.url || APP_URL + '/' },
      requireInteraction: true,
      vibrate: [400,200,400,200,600]
    })
  );
});

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url));
});
