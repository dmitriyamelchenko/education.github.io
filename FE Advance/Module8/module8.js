/*
 Напишите скрипт который реализует следующее поведение:

 - При нажатии на клавишу (не виртуальной клавиатуры) должно
  обрабатываться событие keydown.
  (Для обработки нажатия нажатия клавиш, повесьте слушателя на window.
  window.addEventListener("keydown", callback);)

 - Должны обрабатываться только те клавиши, которые присутствуют
  в разметке HTML (на виртуальной клавиатуре).

 - Звук нажатия на клавишу должен соответсвовать ноте, описанной
  в атрибуте button data-note.

 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.

 - Чекбокс Sound должен включать и выключать звук нажатия на клавиши.
*/

const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

// const buttons = Array.from(document.querySelectorAll("button"));
// const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");


window.addEventListener('keydown', btnKeydown);
//сделал свою проверку для гибкости программы при добавлении кнопок на страницу
let keyboard = [];
let keyboardBTN = document.querySelectorAll('.keyboard__btn');
[...keyboardBTN].map(el => {
    keyboard.push(el.innerText);
});

//Для запоминания активной кнопки
const activeBtn = {
    node: null
};


//Для смены значения элемента input при клике по label


const sound = document.querySelector('#slideThree');
const labelCheckbox = document.querySelector('#labelCheckbox');
labelCheckbox.addEventListener('click', statusSound);
function statusSound(){
    sound.value = sound.value === 'None'? 'Active' : 'None';
    console.log('lapuh');
}


function btnKeydown(evt){
    //Проверяем есть ли активная кнопка на экране, если есть то делаем ее не активной перед нажатием новой кнопки
    if(activeBtn.node !== null) activeBtn.node.classList.remove('keyboard__btn--active');

    //если в массиве значений кнопок есть ключ кнопки клавиатуры, который такой-же как и значение кнопки
    //то ищем этот элемент в псевдомассиве кнопок по значению и при нахождении добавляем кнопке класс
    // keyboard__btn--active, запоминаем ее в activeBtn для следующего вызова функции, и далее проверяем значение
    // элемента  sound, усли None - звук есть, запускаем фун-ю playSound() и передаем ей значение атрибута
    //элемента, которое хранит имя ноты для этого эл-та.

    if(keyboard.some(el => el === evt.key.toLowerCase()) || evt.code === "Space"){
        [...keyboardBTN].some(el => {
            if(el.innerText === evt.key.toLowerCase() || el.innerText === evt.code.toLowerCase()){
                el.classList.add('keyboard__btn--active');
                activeBtn.node = el;
                if(sound.value === 'None') playSound(el.getAttribute('data-note'));
                return true;
            }
        });
    }
    else(alert('Нажимайте на клавиатуре только те клавиши которые изображены на экране и проверте раскладку клавиатуры!'));
}
