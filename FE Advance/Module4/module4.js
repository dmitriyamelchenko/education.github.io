const addKeyboardLayout = (alphabet)=>{
    const alphabetRu = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const keyboardRu = [
        ["йцукенгшщзхъ"],
        ["фывапролджэ"],
        ["ячсмитьбю."]
    ];

    const alphabetEn = 'abcdefghijklmnopqrstuvwxyz';
    const keyboardEn = [
        ["qwertyuiop[]"],
        ["asdfghjkl;''"],
        ["zxcvbnm,./"]
    ];

    let choice = alphabet;
    switch(choice){
        case ("абвгдеёжзийклмнопрстуфхцчшщъыьэюя"):
            return keyboardRu;
        case ("abcdefghijklmnopqrstuvwxyz"):
            return keyboardEn;
    }
};

let keyboard = addKeyboardLayout("абвгдеёжзийклмнопрстуфхцчшщъыьэюя");
console.log("функция addKeyboardLayout возвращает: ");
console.log(keyboard);



const getRandCharInRow = (row) =>{
    let rundomNamLetter = Math.floor(Math.random() * (keyboard[row-1][0].length-1));
    return keyboard[row-1][0][rundomNamLetter];
};
console.log("функция getRandCharInRow возвращает: "+ getRandCharInRow(1));



const getRandCharInAlph = (alphabet) =>{
    let alphabetArray ="";
    let rundLetter;
    if(alphabet[0].indexOf("йцукенгшщзхъ") !==-1){
       alphabetArray = ['абвгдеёжзийклмнопрстуфхцчшщъыьэюя'];
       rundLetter = Math.floor(Math.random()*(alphabetArray[0].length-1));
       return alphabetArray[0][rundLetter];
    }
    else if(alphabet[0].indexOf("qwertyuiop[]") !==-1){
        alphabetArray = ['abcdefghijklmnopqrstuvwxyz'];
        rundLetter = Math.floor(Math.random()*(alphabetArray[0].length-1));
        return alphabetArray[0][rundLetter];
    }
};

console.log("функция getRandCharInAlph при передаче массива массивов руских строк возвращает: "+ getRandCharInAlph([
    ["йцукенгшщзхъ"],
    ["фывапролджэ"],
    ["ячсмитьбю."]]));

console.log("функция getRandCharInAlph при передаче массива массивов английских строк возвращает: "+ getRandCharInAlph([
    ["qwertyuiop[]"],
    ["asdfghjkl;''"],
    ["zxcvbnm,./"]]));