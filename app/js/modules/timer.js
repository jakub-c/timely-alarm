'use strict';

function Timer(time, notification) {
  this.timeLeft = time;
  this.timeSpan = time;
  this.notification = notification;

  this.display();
}

Timer.prototype.tick = function(notification) {
  this.timeLeft--;

  if (this.timeLeft === 0) {
    this.timeLeft = this.timeSpan;
    this.notify();
  }
}

Timer.prototype.display = function(notification) {
  var minutes = Math.floor(this.timeLeft / 60);
  var seconds = Math.floor(this.timeLeft - minutes * 60);
  seconds = ("0" + seconds).slice(-2);
  $("#minutes").text(minutes);
  $("#seconds").text(seconds);
}

Timer.prototype.notify = function() {
  this.notification.show()
}

module.exports = Timer;