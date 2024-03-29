/*
  Соединить задание 1 и 2

  Напишите функцию validate которая проверяет все поля формы
  и возвращает результат в виде обьекта со свойствами firstname,
  lastname и tel.

  Кроме того, формат объекта: в свойства записывается буль-флаг
  уведомляющий о статусе прохождения валидации для поля.

  При клике на кнопку submit должна происходить проверка.

  Визуализировать результат проверки.
    Написать функцию showResults(results), которая принимает
    один аргумент results - объект такого формата который возвращает
    функция validate, и создает html разметку по результатам
    этого объекта.

    showResults добавляет в список с классом .results
    (уже есть в html), li для каждого поля формы. В li записать:
    SUCCESS: 'имя поля' passed validation
    ERROR: 'имя поля' failed validation

    Для li с положительным результатом дать класс success,
    с отрицательным error.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");

submitBtn.addEventListener("click", validate);

function validate(evt) {
    evt.preventDefault();

    const objUser = {
        'firstname': '',
        'lastname': '',
        'tel' : ''
    };

    let firstNamePattern = /^\s*([a-zа-яіїґ]+)(\s+[a-zа-яіїґ]+)?(\s+[a-zа-яіїґ]+)?\s*$/i;
    let lastNamePattern =/^\s*([a-zа-яіїґ]+)(\s*-?\s*[a-zа-яіїґ]+)?\s*$/i;
    let telPattern = /(\s*\+\s*)(\d[-\s]*)(\d[-\s]*){11}$/;

    objUser.firstname = firstNamePattern.test(firstname.value);
    objUser.lastname = lastNamePattern.test(lastname.value);
    objUser.tel = telPattern.test(tel.value);

    showResults(objUser);
}

function showResults(results) {
    let result = '';
    for (let key in results) {
        if (results[key] === false)
            result += `<li class = 'error'>ERROR: ${key} failed validation</li>`;
        else{
            result += `<li class = 'success'>SUCCESS: ${key} passed validation</li>`;
        }
    }
    resultsList.innerHTML = result;
}