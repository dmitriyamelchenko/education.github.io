/*  Написать фукнцию findLongestWord(str)
    которая получает аргументом произвольную строку и
    возвращает самое длинное слово в этой строке.
    Важное условие  - в строке должны быть только пробелы
    и символы букв и цифр!
*/

function findLongestWord(str) {
    let result = "";

    if(str !== "") { //если строка не пустая продолжаем проверку, иначе строка 28
        if(!isNaN(str)) result = str.toString(); // если аргумент цифра, возвращаем ее как строку
        else if(str === false) result = str; // если булевое значение, возвращаем булевый результат
        else if(str === true) result = str; // --//--
        else if (str.length === 1) result = str[0]; // если ввели одно слово, возвращаем его
        else { // если на проверках мы не отсеялись, выполняем основную проверку
            let verifiedArray = str.split(" "); //проверяем каждое слово как элемент массива для удобства
            verifiedArray.map((i) => {
                while (i.length > result.length) result = i;
            })
        }
    }
    else{
        result = "Введите непустую строку";
    }
    return result;
}

// Проверки
const find = findLongestWord("a bb ccc dddd eeeee ffff ggg hh i") === "eeeee";
console.log("правильность поиска: ", find);
// должно вернуть true

const equal = findLongestWord("bb cc hh") === "bb";
console.log("обработка равных строк: ", equal);
// должно вернуть true

const symbol = findLongestWord("a") === "a";
console.log("обработка строки-символа: ", symbol);
// должно вернуть true

const empty = findLongestWord("") === "Введите непустую строку";
console.log("обработка пустой строки: ", empty);
// должно вернуть true

const fromNum = findLongestWord(5) === "5";
console.log("приведение к строке number: ", fromNum);
// должно вернуть true

const fromBool = findLongestWord(false) === "false";
console.log("приведение к строке boolean: ", fromBool);

if (fromBool && fromNum && empty && symbol && equal && find) {
    alert(
        "Функция работает правильно! Можно сдавать работу и закоментировать этот alert!"
    );
}

// вспомогательная информация
function findNumbers(str) {
    return str.split(":");
}
// console.log(findNumbers('123:44:55:678:999'));
// -> ["123", "44", "55", "678", "999"]

const arr = [3, 4, 5, 2, 10];
const min = arr.reduce((accum, next) => (accum = accum < next ? accum : next));
// console.log(`min is '${min}'`);
// -> "min is '2'"
