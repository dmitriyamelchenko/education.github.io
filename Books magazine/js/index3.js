
var groceryCards=document.getElementsByClassName('smallCardImg');
//var win=document.getElementsByName('window');
var modalwrap = document.querySelector('#wrap');
var modalwindow = document.querySelector('#window');
document.body.addEventListener('click', function(event){
    if(event.target.classList.contains('smallCardImg')){
        show(event.target);
    }
});
// Закрытие модального окна при клике на серую область
window.addEventListener('click', function (event) {
    if(event.target.closest(".grocery_card")) {
        let _id = event.target.closest(".grocery_card").querySelector(".add_to_card").id;
        // console.log(_id);
        let book = arrayBooks.filter((item, index) => item.id === _id);
        console.log(book);
        let _book = book[0].volumeInfo;
        console.log(_book);
        modalwindow.querySelector("#title_popup").innerHTML = 'Title: ' + _book.title;
        modalwindow.querySelector("#description_popup").innerHTML = 'Description: ' + _book.description;
        let img_popup = (_book.imageLinks ? _book.imageLinks.thumbnail : 'img/notPoster.jpeg');
        console.log(img_popup);
        modalwindow.querySelector("#img_popup").src = img_popup;
        modalwindow.querySelector("#categories_popup").innerHTML = 'Category: ' + _book.categories;
    }
    if(event.target == modalwrap) {
        modalwrap.style.display = "none";
        modalwindow.style.display = 'none';
    }
});
//Функция показа окна
function show(state){
    document.getElementById('window').style.display = 'block';
    document.getElementById('wrap').style.display = 'block';
}
//Функция закрытия окна
function hide(state){
    document.getElementById('window').style.display = 'none';
    document.getElementById('wrap').style.display = 'none';
}

