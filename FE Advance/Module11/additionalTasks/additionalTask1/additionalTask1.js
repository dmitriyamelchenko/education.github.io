/*
  Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.

  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны

  С помощью fetch сделать запрос по составленому
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch.

  Результат запроса вывести в поле result в формате:
  Country name: имя страны
  Capital: столица
  Main currency: название денежной единицы
  Flag: флаг страны

  Все необходимые данные есть в ответе от API.

  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение элемента по умолчанию.
*/
const input = document.querySelector("input");
const submitBtn = document.querySelector("#js-submit");
const result = document.querySelector(".result");
const apiUrl = "https://restcountries.eu/rest/v2/name/";

submitBtn.addEventListener("click", fetchCountryData);

function fetchCountryData(evt) {
    evt.preventDefault();
    result.innerText = '';

    fetch(`${apiUrl}${input.value}`)
        .then(function(response){
            if(response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(function(data){
            data.map(el => { if (el !== ',') {
                result.insertAdjacentHTML('beforeend', el =
                    `<ul>Country name: ${el.name}
                         <li>Capital: ${el.capital}</li>
                         <li>Main currency: ${el.currencies[0].name}</li>
                         <li>Flag : <a href="${el.flag}">view full size</a></li>
                         <img style = "width: 70px; height: 50px" src="${el.flag}">
                     </ul>`);
            }})
        })
        .catch(function(error){
            console.log("Error ",error);
        });
}

