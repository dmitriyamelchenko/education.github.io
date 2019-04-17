export default (function() {
  const startBut = document.getElementById('module14Start');
  const stopBut = document.getElementById('module14Stop');

  function Timer() {
    this.startTime = 0;
    this.stopTime = 0;
    this.interval = 0;
  }

  Timer.prototype.start = function () {
    this.startTime = new Date();
  };
  Timer.prototype.stop = function () {
    this.stopTime = new Date();
    this.interval = this.stopTime - this.startTime;
    console.log(this.interval + ' milliseconds');
  };


  let timer = new Timer();

  startBut.addEventListener('click', () => timer.start());
  stopBut.addEventListener('click', () => timer.stop());
})();

