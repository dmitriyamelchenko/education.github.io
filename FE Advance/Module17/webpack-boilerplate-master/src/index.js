import module1JS from '../src/js/module1';
import module2_1JS from '../src/js/module2_add1';
import module2_2JS from '../src/js/module2_add2';
import module3JS from '../src/js/module3';
import module4JS from '../src/js/module4';
import * as module5JS from '../src/js/module5';
import * as module6JS from '../src/js/module6';
import module7JS from '../src/js/module7MainTask';
import module8JS from '../src/js/module8';
import '../node_modules/lodash';
import module9JS from '../src/js/module9Homework';
import '../src/js/module10';
import '../src/js/module11MainTask';
//модуль12 содержит только ссылки на репозиторий
import '../src/js/module13mainTask13';
import '../src/js/module14';
import {stopwatch as module15JS, module15testJS} from "./js/module15";
import {Shape, Rectangle, Circle} from '../src/js/module16';
// import '../src/css/normalize.css';
import '../src/css/module3.css';
import '../src/css/module10.css';
import '../src/css/myCSS.css';
import '../src/css/module11MainTask.css';





const module1but = document.querySelector('.module1but');
const module2_1but = document.querySelector('.module2_1but');
const module2_2but = document.querySelector('.module2_2but');
const module3but = document.querySelector('.module3but');
const module4but = document.querySelector('.module4but');
const module5but1 = document.querySelector('.module5but1');
const module5but2 = document.querySelector('.module5but2');
const module5but3 = document.querySelector('.module5but3');
const module6but = document.querySelector('.module6but');
const module7but = document.querySelector('.module7but');
const module8but = document.querySelector('.module8but');
const module9but = document.querySelector('.module9but');
//модуль10 с самоисполняющей функцией
//модуль11 с самоисполняющей функцией
//модуль12 содержит только ссылки на репозиторий
//модуль13 с самоисполняющей функцией
//модуль14 с самоисполняющей функцией
const module15Start = document.getElementById('module15Start');
const module15Stop = document.getElementById('module15Stop');
const module15Interval = document.getElementById('module15Interval');
const module15test = document.getElementById('module15test');

const module16butCreateShape = document.querySelector('.module16butCreateShape');
const module16inputSetColorShape = document.querySelector('.module16inputSetColorShape');
const module16inputSetXShape = document.querySelector('.module16inputSetXShape');
const module16inputSetYShape = document.querySelector('.module16inputSetYShape');

const module16butCreateRectangle = document.querySelector('.module16butCreateRectangle');
const module16inputSetColorRectangle = document.querySelector('.module16inputSetColorRectangle');
const module16inputSetYRectangle = document.querySelector('.module16inputSetYRectangle');
const module16inputSetXRectangle = document.querySelector('.module16inputSetXRectangle');
const module16inputSetWidthRectangle = document.querySelector('.module16inputSetWidthRectangle');
const module16inputSetHeightRectangle = document.querySelector('.module16inputSetHeightRectangle');
const module16butDrawRectangle = document.querySelector('.module16butDrawRectangle');

const module16butCreateCircle = document.querySelector('.module16butCreateCircle');
const module16inputSetColorCircle = document.querySelector('.module16inputSetColorCircle');
const module16inputSetYCircle = document.querySelector('.module16inputSetYCircle');
const module16inputSetXCircle = document.querySelector('.module16inputSetXCircle');
const module16inputSetRadiusCircle = document.querySelector('.module16inputSetRadiusCircle');


module1but.addEventListener('click', module1JS);
module2_1but.addEventListener('click', module2_1JS);
module2_2but.addEventListener('click', module2_2JS);
module3but.addEventListener('click', module3JS);
module4but.addEventListener('click', module4JS);
module5but1.addEventListener('click', module5JS.getChoiceLang);
module5but2.addEventListener('click', module5JS.getRandCharInAlph);
module5but3.addEventListener('click', module5JS.testGetRandCharInAlph);
module6but.addEventListener('click', module6JS.run);
module7but.addEventListener('click', module7JS);
module8but.addEventListener('click', module8JS);
module9but.addEventListener('click', module9JS);
//модуль10 с самоисполняющей функцией
//модуль11 с самоисполняющей функцией
//модуль12 содержит только ссылки на репозиторий
//модуль13 с самоисполняющей функцией
//модуль14 с самоисполняющей функцией
module15Start.addEventListener('click', module15JS.start);
module15Stop.addEventListener('click', module15JS.stop);
module15Interval.addEventListener('click', module15JS.getTime);
module15test.addEventListener('click', module15testJS);


module16butCreateShape.addEventListener('click', () => {
  let shape = new Shape(module16inputSetColorShape.value, module16inputSetXShape.value, module16inputSetYShape.value);
  console.log('---------Ваша созданная форма--------');
  console.log(shape);
});

module16butCreateRectangle.addEventListener('click', () => {
  let rectangle = new Rectangle(module16inputSetColorRectangle.value, module16inputSetYRectangle.value, module16inputSetXRectangle.value, module16inputSetWidthRectangle.value, module16inputSetHeightRectangle.value);
  console.log('---------Ваш созданный прямоугольник--------');
  rectangle.draw();
});

module16butCreateCircle.addEventListener('click', () => {
  let circle = new Circle(module16inputSetColorCircle.value, module16inputSetYCircle.value, module16inputSetXCircle.value, module16inputSetRadiusCircle.value,);
  console.log('---------Ваш созданный круг--------');
  circle.draw();
});






