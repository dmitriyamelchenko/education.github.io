/*
  Напишите функцию validate которая проверяет поля формы
  firstname и lastname и возвращает результат в виде
  обьекта со свойствами 'first name' и 'last name'.

  Кроме того, формат объекта: в свойства записывается буль-флаг
  уведомляющий о статусе прохождения валидации для каждого поля.
  {
    'first name': true или false,
    'last name': true или false,
  }

  Критерии валидации:
  1)Имя. Допускается не более 3-х слов, а слова должны состоять
  только из букв латинского и кириллического алфавита.

  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами,
  дефисом или пробелами и дефисом. Слова должны состоять только из
  букв латинского и кириллического алфавита.

  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект, выводить в консоль.
*/
const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", validate);
const objUser = {
    'first name test': '',
    'last name test': '',
    'first name': '',
    'last name': '',
};
function validate(event){
    event.preventDefault();
    let firstNamePattern = /^\s*([a-zа-яіїґ]+)(\s+[a-zа-яіїґ]+)?(\s+[a-zа-яіїґ]+)?$/i;
    let lastNamePattern =/^\s*([a-zа-яіїґ]+)(\s*-?\s*[a-zа-яіїґ]+)?$/i;
    if(firstNamePattern.test(firstname.value) && lastNamePattern.test(lastname.value)){
        objUser["first name test"] = firstNamePattern.test(firstname.value);
        objUser["last name test"] = lastNamePattern.test(lastname.value);
        objUser["first name"] = firstNamePattern.exec(firstname.value)[0];
        objUser["last name"] = lastNamePattern.exec(lastname.value)[0];
        console.log(objUser);
    }
}
