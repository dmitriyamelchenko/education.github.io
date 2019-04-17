var cardAdded = JSON.parse(localStorage.getItem("cardAdded")) || [];

// var search = document.getElementById('search').value;
document.getElementById('result').innerHTML = '';

var countBooksSearch = 0;
var booksLengthSearch = 40;

bookSearch('poppular');



// Создаем масив куда влаживаем все книги с контент поля для текущего клиента
var arrayBooks =[];

function bookSearch(x) {
    var search = document.getElementById('search').value;

    console.log("BOOK SEARCH", x, search);
    if(x.className === "category"){
        search =  x.id; //для категорий
    }
    else if(x ==='poppular'){
        search = x;
    }
    else{
        search = document.getElementById('search').value; //для поиска
        // console.log('hello');
    }
    document.getElementById('result').innerHTML = '';
    $.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${booksLengthSearch}&startIndex=${countBooksSearch}`,
        dataType: "json",

        success: function (data) {
            for (var i = 0; i < data.items.length; i++) {
                arrayBooks.push(data.items[i]);
                // console.log(arrayBooks);
                if (data.items[i].saleInfo.listPrice && data.items[i].saleInfo.listPrice.amount) {
                    var div = document.createElement('div');
                    var details = document.createElement('div');
                    var price_and_over = document.createElement('div');
                    var h4 = document.createElement('h4');
                    var p = document.createElement('p');
                    var divImg = document.createElement('img');
                    divImg.className = 'smallCardImg';
                    var span = document.createElement('span');
                    var sell = document.createElement('button');
                    sell.className = 'add_to_card';
                    $(sell).on('click', addToCard);
                    var averageRating = document.createElement('div');
                    averageRating.innerHTML = (data.items[i].volumeInfo && data.items[i].volumeInfo.averageRating ? data.items[i].volumeInfo.averageRating + ' rating' : '');
                    p.innerHTML = data.items[i].volumeInfo.authors;
                    h4.innerHTML = data.items[i].volumeInfo.title;
                    var poster = (data.items[i].volumeInfo.imageLinks ? data.items[i].volumeInfo.imageLinks.thumbnail : 'img/notPoster.jpeg');
                    console.log(poster);
                    divImg.src = poster;
                    span.innerHTML = data.items[i].saleInfo.listPrice ? data.items[i].saleInfo.listPrice.amount + ' ' + data.items[i].saleInfo.listPrice.currencyCode : false;
                    sell.id = data.items[i].id;
                    sell.innerHTML = 'Add to Card';
                    div.appendChild(divImg);
                    details.appendChild(h4);
                    details.appendChild(p);
                    details.classList.add('details');
                    div.appendChild(details);
                    price_and_over.appendChild(span);
                    price_and_over.appendChild(sell);
                    price_and_over.appendChild(averageRating);
                    price_and_over.classList.add('price_and_over');
                    div.appendChild(price_and_over);
                    button.classList.add('buy_button');
                    result.appendChild(div);
                    div.classList.add('grocery_card');
                    // console.log(data.items[i]);
                }

                saveCardsToLS();
            }
        },
        type: 'GET'
    });


    // ----------Выводим масив всех книг с поля контент для юзера------
    // в дальнейшем желательно хранить массив в локал стор
    // console.log(arrayBooks);
    // showCard();
}
// document.getElementById('button').addEventListener('click', bookSearch, false);


function addToCard(event) {
    // Add book to Card
    var image = $(event.target).parent().parent().find(".smallCardImg")[0].src;
    var title = $(event.target).parent().parent().find(".details h4")[0].innerHTML;
    var author = $(event.target).parent().parent().find(".details p")[0].innerHTML;
    var price = $(event.target).parent().parent().find(".price_and_over span")[0].innerHTML;
    var amount = $(event.target)[0].id;
    var articul = $(this).attr('id');
    var flag = false;
    for (let index = 0; index < cardAdded.length; index++) {
        if (cardAdded[index].amount == articul) {
            cardAdded[index].count += 1;
            flag = true;
            break;
        }
    }
    if (!flag) {
        cardAdded.push({title: title, author: author, image: image, amount: amount, count: 1, price: price});
    }
    saveCardsToLS();
    showCard();
}

function showCard() {
    $('#basketPanel').html("");
    var result = document.createElement("div");
    result.className = 'busketCardsWrap';
    for (var index in cardAdded) {
        // Create block to add Cards
        var cardItem = document.createElement("div");
        cardItem.className = 'cardItem';
        result.appendChild(cardItem);

        // Added IMAGE
        var cardImg = document.createElement("img");
        cardImg.className = 'smallCardImg';
        cardImg.src = cardAdded[index].image ? cardAdded[index].image : 'img/NotImage.jpg';
        cardItem.appendChild(cardImg);

        // Create teg with title
        var cardTitle = document.createElement("p");
        cardTitle.innerHTML = cardAdded[index].title;
        cardTitle.className = 'cardTitle';
        cardItem.appendChild(cardTitle);
        // Create teg with author
        var cardAuthor = document.createElement('p');
        if (cardAdded[index].author !== 'undefined') {
            cardAuthor.innerHTML = "author: " + cardAdded[index].author;
        }
        else {
            cardAuthor.innerHTML = "author: folk";
        }
        cardAuthor.className = 'cardAuthor';
        cardItem.appendChild(cardAuthor);

        // Added delete button
        var deleteButton = document.createElement("button");
        deleteButton.className = 'deleteButton';
        deleteButton.id = cardAdded[index].amount;
        deleteButton.innerHTML = 'x';
        cardItem.appendChild(deleteButton);
        deleteButton.onclick = function () {
            var deleteParent = this.parentNode;
            deleteParent.remove();
            cardAdded = cardAdded.filter((item) => {
                if(item.amount !== this.id) return item;
            });
            localStorage.setItem("cardAdded", JSON.stringify(cardAdded));
        };
        // Added MINUS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! button
        var minusButton = document.createElement("button");
        minusButton.className = 'minusButton';
        minusButton.innerHTML = '-';
        minusButton.id = cardAdded[index].amount;
        cardItem.appendChild(minusButton);

        minusButton.onclick = function () {
            var minusButtonOnclick = $(event.target).parent().find("span")[0].innerHTML;
            $(event.target).parent().find("span")[0].innerHTML = parseInt(minusButtonOnclick) - 1;
            recountPrice();
            cardAdded = cardAdded.map((item, i) => {
                console.log(" >>>>> ", item, i)
                if (item.amount === this.id) {
                    console.log(" >>>>> FIND >>>> ", item, i);
                    return {...item, count: item.count - 1};
                }
                else return item;
            });
            localStorage.setItem('cardAdded', JSON.stringify(cardAdded));
        };
        // Added amount (id of buttons) of cards
        var countCards = document.createElement('span');
        countCards.innerHTML = cardAdded[index].count;
        cardItem.className = 'countCardsinBasket';
        cardItem.appendChild(countCards);

        // Added PLUS button
        var plusButton = document.createElement("button");
        plusButton.className = 'plusButton';
        plusButton.innerHTML = '+';
        plusButton.id = cardAdded[index].amount;
        cardItem.appendChild(plusButton);
        plusButton.onclick = function () {
            var plusButtonOnclick = $(event.target).parent().find("span")[0].innerHTML;
            $(event.target).parent().find("span")[0].innerHTML = parseInt(plusButtonOnclick) + 1;
            recountPrice();
            cardAdded = cardAdded.map((item, i) => {

                if(item.amount === this.id) {
                    console.log(" >>>>> FIND >>>> ", item, i);
                    return { ...item, count: item.count + 1};

                }
                else return item;
            });
            localStorage.setItem('cardAdded', JSON.stringify(cardAdded));
        };
        // Added PRICE for one
        var priceCard = document.createElement("h4");
        priceCard.className = 'priceCard';
        var resultPrice = parseInt(cardAdded[index].price);
        priceCard.innerHTML = resultPrice;
        cardItem.appendChild(priceCard);
        var priceCardTitle = document.createElement("span");
        priceCard.appendChild(priceCardTitle);
        priceCardTitle.innerHTML = 'price for one';

        // Added PRICE of All
        var priceSum = document.createElement('span');
        priceSum.className = 'priceSum';
        var priceSumTitle = document.createElement("span");
        priceSum.appendChild(priceSumTitle);
        priceSumTitle.innerHTML = 'price for all';
        var resultPriceSum = 0;
        if (cardAdded[index].count > 0) {
            resultPriceSum = cardAdded[index].count * parseInt(cardAdded[index].price);
            priceSum.innerHTML = resultPriceSum;
        }
        else {
            resultPrice = cardAdded[index].price;
        }
        cardItem.appendChild(priceSum);

    }
    $('#basketPanel').append(result);
}

function recountPrice() {
    var currentCount = parseFloat($(event.target).parent().find("span")[0].innerHTML);
    var currentPrice = parseFloat($(event.target).parent().find(".priceCard")[0].innerHTML);
    var recountPrice = parseInt(document.getElementsByClassName('priceCard').innerHTML);
    var resultPrice = currentCount * currentPrice;
    $(event.target).parent().find(".priceSum")[0].innerHTML = resultPrice;
}

showCard();



function saveCardsToLS() {
    localStorage.setItem('cardAdded', JSON.stringify(cardAdded));
}


// function searchCategory() {
//     // console.log("CATEGORY SEARCH");
//
//     document.getElementById('result').innerHTML = '';
//
//
//     $.ajax({
//         url: "https://www.googleapis.com/books/v1/volumes?q=poetry",
//         dataType: "json",
//
//         success: function (data) {
//             for (var i = 0; i < data.items.length; i++) {
//
//                 var div = document.createElement('div');
//                 var h4 = document.createElement('h4');
//                 var p = document.createElement('p');
//                 var divImg = document.createElement('div');
//                 var poster = (data.items[i].volumeInfo.imageLinks ? data.items[i].volumeInfo.imageLinks.thumbnail : 'img/notPoster.jpeg');
//                 divImg.className = 'smallCardImg';
//                 divImg.style.backgroundImage = 'url("' + poster + '")';
//                 var span = document.createElement('span');
//                 var sell = document.createElement('button');
//
//                 p.innerHTML = data.items[i].volumeInfo.authors;
//                 h4.innerHTML = data.items[i].volumeInfo.title;
//                 divImg.style.backgroundImage = 'url("' + data.items[i].volumeInfo.imageLinks.thumbnail + '")';
//                 span.innerHTML = data.items[i].saleInfo.listPrice ? data.items[i].saleInfo.listPrice.amount + ' ' + data.items[i].saleInfo.listPrice.currencyCode : 'not available';
//                 sell.innerHTML = 'Add to Card';
//                 div.appendChild(divImg);
//                 div.appendChild(h4);
//                 div.appendChild(p);
//                 div.appendChild(span);
//                 div.appendChild(sell);
//                 button.classList.add('buy_button');
//                 result.appendChild(div);
//                 div.classList.add('grocery_card');
//             }
//         },
//         type: 'GET'
//     });
// }


// document.getElementById('poetry').addEventListener('click', searchCategory, false);



