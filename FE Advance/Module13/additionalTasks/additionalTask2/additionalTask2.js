/*
  Напишите функцию validate которая проверяет поле формы
  номера телефона tel и возвращает результат в виде обьекта
  со свойством tel.

  Кроме того, формат объекта: в свойства записывается буль-флаг
  уведомляющий о статусе прохождения валидации для поля.
  {
    tel: true или false,
  }

  Критерии валидации:
  1) Правильный формат записи начинается с + и содержит 12 цифр от 0 до 9.

  2) При вводе допускаются пробелы или дефисы между любыми цифрами.

  3) При выводе номер должен быть отформатирован в том же стиле что и номер
  в placeholder

  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект и результирующий номер телефона
  в правильном фонрмате, выводить в консоль.
*/

const tel = document.getElementById("tel");
const submit = document.querySelector(".btn");
const result = document.querySelector('.result');
submit.addEventListener("click", validate);

const obj = {
    'tel is correct?':'',
    tel: ''
};

function validate(evt) {
    evt.preventDefault();
    let editTel ='';
    obj['tel is correct?'] = !(tel.validity.patternMismatch);

    if(obj['tel is correct?'] === true){
        editTel = tel.value.replace(/[-\s]*/g,'');
        editTel = [...editTel].map((el,i) => {
            if(i === 4 || i === 6 || i === 8 || i === 10){
                return " "+el;
            }
            else return el;
        });
        obj.tel = `tel ${editTel.join('')}`;
        result.innerText =`tel is correct? ${obj["tel is correct?"]}
        ${obj.tel}`;
        tel.value = '';
    }
    else{
        result.innerText =`tel is correct? ${obj["tel is correct?"]}`
    }
    console.log(obj);
}
