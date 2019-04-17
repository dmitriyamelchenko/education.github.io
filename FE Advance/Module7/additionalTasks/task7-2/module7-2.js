// Задание 2
// Модифицировать createUserCard() так чтобы она использовала не createElement, а возвращала строку с тегами, которую потом
// можно будет поставить в документ через innerHTML или insertAdjacentHTML.


createUserCard = (name, url, city, years) => {
    let userCardCreate =`
        <div class = 'userCard'>
            <div class = 'userPhoto' style='background-image: url(${url})'></div>
            <div class = 'userInfo'>
                <h2 class = 'userName'>${name}</h2>
                <div class = 'divYearsCity'>
                    <p class = 'userYears'>${years}</p>
                    <p class = 'userCity'>${city}</p>
                </div>
                <div class="clickPanel">
                    <div class="strawberry"></div>
                    <p class = 'strawberryCount'>0</p>
                    <div class="lemon"></div>
                    <p class = 'lemonCount'>0</p>
                    <div class="handClick"></div>
                </div>
            </div>
        </div>`;
    return userCardCreate;
};


let container = document.querySelector('.container');
container.insertAdjacentHTML('beforeEnd', createUserCard('Claudia Cardinale', './img/user.png', 'Philadelphia', 29));


let strawberryCount = document.querySelector('.strawberryCount');
strawberryCount.onclick = () => {
    strawberryCount.innerHTML = +strawberryCount.innerHTML + 1;
};

let lemonCount = document.querySelectorAll('.lemonCount');
lemonCount.forEach( el => {
    el.onclick = () => {
        el.innerHTML = +el.innerHTML + 1;
    }
});

const testCreateUserCard = () => {
    console.log(createUserCard('Claudia Cardinale', './img/user.png', 'Philadelphia', 29));
};
// testCreateUserCard();