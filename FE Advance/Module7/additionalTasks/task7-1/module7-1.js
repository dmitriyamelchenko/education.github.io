// Задание 1
// Используя createElement, написать функцию createUserCard()
// которая динамически создает и возвращает дом узел для такой
// карточки пользователя. Классы оформления добавляем через classList.


createUserCard = (name, url, city, years) => {
    let container = document.querySelector('.container');

    let userCard = document.createElement('div');
    userCard.classList.add('userCard');

    let userPhoto = document.createElement('div');
    userPhoto.classList.add('userPhoto');
    userPhoto.style.backgroundImage = `url(${url})`;

    let userInfo = document.createElement('div');
    userInfo.classList.add('userInfo');

    let userName = document.createElement('h2');
    userName.classList.add('userName');
    userName.innerHTML = name;

    let userYears = document.createElement('p');
    userYears.innerHTML = years;

    let userCity = document.createElement('p');
    userCity.innerHTML = city;

    let divYearsCity = document.createElement('div');
    divYearsCity.classList.add('divYearsCity');

    divYearsCity.append(userYears, userCity);

    let clickPanel = document.createElement('div');
    clickPanel.classList.add('clickPanel');

    let strawberry = document.createElement('div');
    strawberry.classList.add('strawberry');

    let strawberryCount = document.createElement('p');
    strawberryCount.classList.add('strawberryCount');
    strawberryCount.innerHTML = 0;
    strawberryCount.onclick = () => {
        strawberryCount.innerHTML = +strawberryCount.innerHTML + 1;
    };

    let lemon = document.createElement('div');
    lemon.classList.add('lemon');

    let lemonCount = document.createElement('p');
    lemonCount.classList.add('lemonCount');
    lemonCount.innerHTML = 0;
    lemonCount.onclick = () => {
       lemonCount.innerHTML = +lemonCount.innerHTML + 1;
    };

    let handClick = document.createElement('div');
    handClick.classList.add('handClick');

    clickPanel.append(strawberry, strawberryCount, lemon, lemonCount, handClick);

    userInfo.append(userName, divYearsCity, clickPanel);

    userCard.append(userPhoto, userInfo);


    container.append(userCard);
};

createUserCard('Claudia Cardinale', './img/user.png', 'Philadelphia', 29);