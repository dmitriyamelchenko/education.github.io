/*Есть три курорта: taba, sharm или hurgada.

    Необходимо через prompt попросить ввести число, от 1 до 3-х.

    В тексте prompt необходимо написать какое число соотвествует
какому курорту, на ваш выбор.

    После этого вывести сообщение о том, что пользователь
выбрал такой-то курорт или сообщение о том, что введено
число, варианта курорта для которого не было. */

export default function(){
  let res = prompt('Введите число от 1 до 3, где 1-taba, 2-sharm, 3-hurgada', 1);

// !!!!!!!!!
// Я решил написать с разными вариантами условных операторов, так как ранее использовал только if-else в рамках курса

// Вариант1
// res=(+res<1 && +res>3)? alert("Введите число в заданых пределах"):
//     +res===1 ? alert("Вы выбрали taba"):
//     +res===2 ? alert("Вы выбрали sharm"):
//     +res===3 ? alert("Вы выбрали hurgada"):alert("Введите число в заданых пределах!!!");

// Вариант2
  switch(+res){
    case (1) : alert("Вы выбрали taba"); break;
    case (2) : alert("Вы выбрали sharm"); break;
    case (3) : alert("Вы выбрали hurgada"); break;
    default : alert("Введите число в заданых пределах!!!!!");
  }
}
