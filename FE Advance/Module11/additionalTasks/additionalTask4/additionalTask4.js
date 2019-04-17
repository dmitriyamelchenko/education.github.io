/*
API // CRUD
http://fecore.net.ua/rest/?action=4
http://fecore.net.ua/rest/?action=3&id=1 - удаление
http://fecore.net.ua/rest/?action=2&id=1&name=Hey1&score=13 -изменение
http://fecore.net.ua/rest/?action=1&name=Mark&score=100  - добавление
http://fecore.net.ua/rest/

  Написать функцию post, которая используя
  REST сервис по адресу http://fecore.net.ua/rest/
  посылает post запрос с именем введенным в input.

  Результатом fetch будет ответ от сервера со статусом
  операции записи, вывести ОК или ERROR в поле result.
*/
const input = document.querySelector("input");
const postBtn = document.querySelector("#js-post");
const result = document.querySelector(".result");

postBtn.addEventListener("click", post);

function post(evt) {
    evt.preventDefault();
    const name = input.value;
    fetch(`http://fecore.net.ua/rest/?action=5&name=${name}`,{method:'post'})
        .then(responce => {
            if(responce.ok)
                return responce;
            else {
                result.innerText="ERROR";
                throw new Error("Ошибка получения данных");
            }
        })
        .then(data =>{
            result.innerText =`
            status : ${data.status}
            statusText: ${data.statusText}`;
        })
        .catch(error =>{
            result.innerText="Sorry, no connection with server. Please try again letter...";
            throw new Error("Сервер не отвечает");
        });
}