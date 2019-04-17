const start = document.getElementById('start');
const stop = document.getElementById('stop');
const interval = document.getElementById('interval');

class Timer{
    constructor(){
        this.startTime = 0;
        this.stopTime = 0;
        this.interval = 0;
    }
    start(){
        this.startTime = new Date();
    }
    stop(){
        this.stopTime = new Date();
        this.interval = this.stopTime - this.startTime;
    }
    getTime(){
        return this.interval;
    }
}

let timer1 = new Timer(1,4);
let timer2 = new Timer(5,9);
console.log(timer1);
console.log(timer2);

let stopwatch = new Timer();

start.addEventListener('click', () => stopwatch.start());
stop.addEventListener('click', () => stopwatch.stop());
interval.addEventListener('click', () => console.log(stopwatch.getTime()));
