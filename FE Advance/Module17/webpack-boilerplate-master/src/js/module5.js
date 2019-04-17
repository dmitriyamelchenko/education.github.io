    // Написать скрипт который на старте спрашивает пользователя какой язык он хочет использовать на тренажере.
    // Это обычный prompt в котором написано en-0, ru-1, ua-2. Пользователь вводит 0, 1 или 2, если введено
    // другое значение то вывести alert о том что был выбран не доступный язык и повторить prompt до того момента
    // пока не будет введено подходящее значание языка или нажат cancel. При cancel прекратить выполнение скрипта.
    //
    // Результат выбора языка пользователем записать в обьект keyboard в поле currentLang как строку, 0 это en, 1 это ru, 2 это ua.
    //
    // Модифицировать функцию getRandCharInAlph() так, чтобы она возвращала случайную букву из выбраного пользователем алфавита.

const keyboard = {
    layouts: {
        en: {
            topRow: ["qwertyuiop[]"],
            middleRow: ["asdfghjkl;''"],
            bottomRow: ["zxcvbnm,./"]
        },
        ru: {
            topRow: ["йцукенгшщзхъ"],
            middleRow: ["фывапролджэ"],
            bottomRow: ["ячсмитьбю."]
        },
        ua: {
            topRow: ["йцукенгшщзхїґ"],
            middleRow: ["фівапролджє"],
            bottomRow: ["ячсмитьбю/"]
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

export const getChoiceLang = () => {
    let choice = prompt("Для выбора языка введите соответствующую цыфру: en-0, ru-1, ua-2", 0);
    while( choice > keyboard.langs.length-1 || choice < 0){
        alert("Выберете доступный язык из предложеных!!!");
        choice = prompt("Для выбора языка введите соответствующую цыфру: en-0, ru-1, ua-2", 0);
    }

    keyboard.currentLang = keyboard.langs[choice]; //присваиваем значению currentLang название выбранного пользователем алфавита
    console.log("Модуль5:Значение свойства обьекта currentLang : " + keyboard.currentLang);
};

export const getRandCharInAlph = () => {
    let randRow = ["topRow", "middleRow", "bottomRow"][Math.floor(Math.random() * (3))];
    let randLetterNum = Math.floor(Math.random() * (keyboard.layouts[keyboard.currentLang][randRow][0].length));
    let randLetter = keyboard.layouts[keyboard.currentLang][randRow][0][randLetterNum];
    console.log("Модуль 5:Значение свойства обьекта currentLang : " + keyboard.currentLang);
    console.log("Модуль 5:Случайная буква выбранного алфавита : " + randLetter);
    return randLetter;
};


// Тест функции получение случайной буквы из выбранного алфавита
export const testGetRandCharInAlph = () => {
    keyboard.currentLang = 'en';
    let testResult = "";
    for (let i = 0; i<3; i++){
        testResult += `Тест #${i} случайная буква en алфавита : ${getRandCharInAlph()}
        `;
    }
    console.log(`${testResult}
                Конец теста!!!`);
};


