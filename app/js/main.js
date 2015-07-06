'use strict';

var Timer = require('./modules/timer.js');
var Notify = require('./libs/notify.js');

if (Notify.isSupported === false) {
  $('.notification-not-supported').show();
}

if (Notify.needsPermission) {
  Notify.requestPermission(null, onPermissionDeniedCallback);
}
function onPermissionDeniedCallback() {
  $('.notification-disabled').show();
}

var reminder = new Notify('Don\'t forget to:', {
  body: 'stand up',
  timeout: 10,
  icon: 'data/notification-icon.png'
});

var timer = new Timer(1500, reminder);

setInterval(function() {
  timer.tick();
  timer.display();
}, 1000);
