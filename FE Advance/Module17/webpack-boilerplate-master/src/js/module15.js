class Timer {
  constructor() {
    this.startTime = 0;
    this.stopTime = 0;
    this.interval = 0;
  }

  start = () => {
    this.startTime = new Date();
    console.log(this.startTime);
  };

  stop = () => {
    this.stopTime = new Date();
    this.interval = this.stopTime - this.startTime;
    console.log(this.stopTime);
  };

  getTime = () => {
    console.log(this.interval);
    return this.interval;
  }
}
let timer1 = new Timer(1, 4);
let timer2 = new Timer(5, 9);
export const module15testJS = () => {
  console.log("-----------------Модуль15 test----------------");
  console.log(timer1);
  console.log(timer2);
  console.log("----------test 15-го модуля закончен----------");
};
export let stopwatch = new Timer();

