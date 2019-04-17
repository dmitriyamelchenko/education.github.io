// Задание 3
// Модифицировать createUserCard(user) так чтобы она принимала объект с данными для заполнения полей в карточке.
//     Используя createUserCard создать карточки для 3-х разных пользователей и повесить их в документ.
//     Формат обьекта указан ниже.
//
//     const user = {
//     img: 'link/to/user-image',
//     name: 'Claudia Cardinale',
//     age: 29,
//     location: 'Philadelphia, PA',
//     strawberries: 19,
//     lemons: 5
// };

const claudiaCardinale = {
    img: './img/user.png',
    name: 'Claudia Cardinale',
    age: 29,
    location: 'Philadelphia, PA',
    strawberries: 19,
    lemons: 5
};
const elonMusk = {
    img: './img/ElonMusk.jpg',
    name: 'Elon Musk',
    age: 46,
    location: 'SantaMonica, USA',
    strawberries: 30,
    lemons: 20
};
const billGates = {
    img: './img/BillGates.jpeg',
    name: 'Bill Gates',
    age: 62,
    location: 'Medina, USA',
    strawberries: 15,
    lemons: 35
};

let container = document.querySelector('.container');
container.insertAdjacentHTML('beforeEnd', createUserCard(claudiaCardinale));
container.insertAdjacentHTML('beforeEnd', createUserCard(elonMusk));
container.insertAdjacentHTML('beforeEnd', createUserCard(billGates));


function createUserCard(user){
    let userCardCreate =`
        <div class = 'userCard'>
            <div class = 'userPhoto' style='background-image: url(${user.img})'></div>
            <div class = 'userInfo'>
                <h2 class = 'userName'>${user.name}</h2>
                <div class = 'divYearsCity'>
                    <p class = 'userYears'>${user.age}</p>
                    <p class = 'userCity'>${user.location}</p>
                </div>
                <div class="clickPanel">
                    <div class="strawberry"></div>
                    <p class = 'strawberryCount'>${user.strawberries}</p>
                    <div class="lemon"></div>
                    <p class = 'lemonCount'>${user.lemons}</p>
                    <div class="handClick"></div>
                </div>
            </div>
        </div>`;
    return userCardCreate;
};


// Помогите, пожалуйста, разобратся почему нельзя использовать стрелочную функцию как обычную до ее обьявления(функция
// должна быть в самом верху, чтобы можно было к ней обратиться со всего файла). Как я понял изначально в js файле
// инициализируются все функции и при начале работы программы функции уже хранятся в стеке интерпретатора(загнул наверное с
// названием)).

//Эта функция не видна вначале файла до ее обьявления!!!
// const createUserCard = (user) => {
//     let userCardCreate =`
//         <div class = 'userCard'>
//             <div class = 'userPhoto' style='background-image: url(${user.img})'></div>
//             <div class = 'userInfo'>
//                 <h2 class = 'userName'>${user.name}</h2>
//                 <div class = 'divYearsCity'>
//                     <p class = 'userYears'>${user.age}</p>
//                     <p class = 'userCity'>${user.location}</p>
//                 </div>
//                 <div class="clickPanel">
//                     <div class="strawberry"></div>
//                     <p class = 'strawberryCount'>${user.strawberries}</p>
//                     <div class="lemon"></div>
//                     <p class = 'lemonCount'>${user.lemons}</p>
//                     <div class="handClick"></div>
//                 </div>
//             </div>
//         </div>`;
//     return userCardCreate;
// };




let strawberryCount = document.querySelectorAll('.strawberryCount');
strawberryCount.forEach(el => {
    el.onclick = () => {
        el.innerHTML = +el.innerHTML + 1;
    }});

let lemonCount = document.querySelectorAll('.lemonCount');
lemonCount.forEach( el => {
    el.onclick = () => {
        el.innerHTML = +el.innerHTML + 1;
    }
});
