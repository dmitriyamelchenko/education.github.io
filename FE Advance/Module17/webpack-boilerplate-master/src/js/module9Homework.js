export default function(){

  /*
  Написать скрипт который собирает 3 строки клавиатуры
  и клавишу "пробел" из шаблона по заданому объекту.

  Для зарендереной клавиатуры реализовать поведение из
  модуля 8, подсветка нажатой клавиши, отображение символа итд.
*/

  const lang = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
  };


  const active = {
    node: null
  };
  let keyboardOnWindow = [];

  createKeyboard(lang.en);
  window.addEventListener('keydown', activeBut);
  addEvents();


  function createKeyboard(langObj) {
    const arrayButtons = [...langObj];
    const row = arrayButtons.splice(0, 12);
    const middle = arrayButtons.splice(0, 11);
    const bottom = arrayButtons.splice(0, arrayButtons.length);
    const keyboard = {
      row: row,
      middle: middle,
      bottom: bottom,
      space: 'space'
    };
    const html = document.getElementById('row-tpl').textContent.trim();
    const compile = _.template(html);
    document.getElementById('row-container').insertAdjacentHTML('beforeend', compile(keyboard));
    keyboardOnWindow = document.getElementsByTagName('button');
  }

  function addEvents() {
    const keyboard = document.getElementsByClassName('keyboard');
    [...keyboard].map(el => {
      el.addEventListener('mousedown', activeBut);
    });
  }

  function activeBut(event) {
    if(event.type === 'mousedown'){
      if (event.target !== event.currentTarget && !event.target.classList.contains('line')) {
        active.node !== null ? active.node.classList.remove('activeBut') : null;
        event.target.classList.add('activeBut');
        active.node = event.target;
      }
    }
    if(event.type === 'keydown'){
      [...keyboardOnWindow].map(el => {
        if(el.innerText === event.key.toLowerCase() || el.innerText === event.code.toLowerCase()){
          active.node !== null ? active.node.classList.remove('activeBut') : null;
          el.classList.add('activeBut');
          active.node = el;
        }
      })
    }
  }
}






