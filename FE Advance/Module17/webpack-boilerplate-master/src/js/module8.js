export default function () {

  const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
  };

  window.addEventListener('keydown', btnKeydown);
  let keyboard = [];
  let keyboardBTN = document.querySelectorAll('.keyboard__btn');
  [...keyboardBTN].map(el => {
    keyboard.push(el.innerText);
  });

//Для запоминания активной кнопки
  const activeBtn = {
    node: null
  };

  const sound = document.querySelector('#slideThree');
  const labelCheckbox = document.querySelector('#labelCheckbox');
  labelCheckbox.addEventListener('click', statusSound);

  function statusSound() {
    sound.value = sound.value === 'None' ? 'Active' : 'None';
    console.log('Модуль 8 status sound: ', sound.value);
  }


  function btnKeydown(evt) {
    if (activeBtn.node !== null)
      activeBtn.node.classList.remove('keyboard__btn--active');

    if (keyboard.some(el => el === evt.key.toLowerCase()) || evt.code === "Space") {
      [...keyboardBTN].some(el => {
        if (el.innerText === evt.key.toLowerCase() || el.innerText === evt.code.toLowerCase()) {
          el.classList.add('keyboard__btn--active');
          activeBtn.node = el;
          if (sound.value === 'None') playSound(el.getAttribute('data-note'));
          return true;
        }
      });
    }
    else alert('Модуль 8: Нажимайте на клавиатуре только те клавиши которые изображены на экране и проверте раскладку клавиатуры!');
  }
};
