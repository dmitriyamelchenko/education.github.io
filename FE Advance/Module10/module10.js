/*
  Создать компонент счетчика времени.

  Простой прямоугольник который показывает время
  со старта упражения и до того момента когда все
  клавиши были верно нажаты.

  На входе есть строка символов для упражнения.

  Написать метод countKPS() который,по окончанию упражнения,
  возвращает кол-во верных клавишь в секунду которое было нажато за
  время выполнения упражнения.

  Записать результат в localStorage, но только в том случае если
  он лучше чем тот что уже есть в localStorage.

  При повторном посещении страницы надо брать то что записано
  в localStorage и вешать на страницу, это будет компонент
  лучшего результата.
*/

// дается строка и от первого нажатия до посленего
// правильного набранного знака считать время

const lang = "qwerty";
const string = "qryte";
const exerciseBlock = document.querySelector('.exercise');
const usersInput = document.querySelector('.usersInput');
const timerOutput = document.querySelector(".timer");
const count = document.querySelector(".count");
const bestTime = document.querySelector(".bestTime");
const speedDial = document.querySelector(".speedDial");


const game = {
    bestTime:'еще не установлено',
    gameTime:0,
    usersError: 0,
    speedDial : 0
};

function countKPS(data){
    bestTime.innerHTML = localStorage.getItem('bestTime') || 'не зафиксировано';
    let exercise = data;
    usersInput.addEventListener('input', usersInputFunction);
    exerciseBlock.innerHTML = `<h4>Необходимо ввести текст</h4><p class = 'exerciseText'>${data}</p>`;
    const exerciseText = document.querySelector('.exerciseText');
    let invalidLetter = '';
    const start = new Date();

    function usersInputFunction() {
        if (data.length === usersInput.value.length) {
            const end = new Date();
            game.gameTime = (end - start) / 1000;
            console.log(end-start);
            timerOutput.innerText = `${game.gameTime} секунд`;
            if(isNaN(game.bestTime = game.gameTime))game.bestTime = game.gameTime;
            if(game.bestTime > game.gameTime)game.bestTime = game.gameTime;
            localStorage.setItem('bestTime', game.bestTime);
            bestTime.innerHTML = game.bestTime;
            speedDial.innerHTML = (Math.round(((exercise.length - game.usersError) / game.gameTime*60)*100))/100;
            game.speedDial = speedDial.innerHTML;
            speedDial.insertAdjacentHTML('afterend',' символов/минуту');
            alert(`Поздравляем, вы прошли задание за ${game.gameTime} секунд. Ошибок допущено: ${game.usersError}. Скорость ввода: ${game.speedDial} символов в минуту!`);
        }
        else {
            if (usersInput.value[usersInput.value.length - 1] !== exercise[usersInput.value.length - 1]) {
                invalidLetter = exercise[usersInput.value.length - 1];
                game.usersError++;
                count.innerText = game.usersError;
                rerenderExercise();

                //если символ не соответствует символу в примере, то счетчик ошибок
                //увеличивается, а неправильный символ удаляется с поля ввода
                let r = [...usersInput.value].slice(0, [...usersInput.value].length - 1);
                usersInput.value = r.join('');
            }
            else if(usersInput.value[usersInput.value.length - 1] === exercise[usersInput.value.length - 1]){
                exerciseText.innerHTML = exercise;
            }
        }
    }

    function rerenderExercise() {
        let rerenderExerciseBlockIfError = exerciseText.innerText.split('').map(el => {
            if (el === invalidLetter) {
                return `<big style = 'color : red'>${el}</big>`;//не искал актуальный аналог тега
            }
            return el;
        });
        exerciseText.innerHTML = rerenderExerciseBlockIfError.join('');
    }
}


countKPS(lang);
