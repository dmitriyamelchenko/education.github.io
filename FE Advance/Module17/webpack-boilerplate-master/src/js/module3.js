export default function () {
    const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

    let keyboard = [[alphabet.slice(0, 12)], [alphabet.slice(12, 23)], [alphabet.slice(23)]];
    console.log('------------Модуль3---------------');
    console.log(keyboard);

  // keyboard=[
  //      ["qwertyuiop[]"],
  //      ["asdfghjkl;'"],
  //      ["zxcvbnm,./"]
  // ];

    let hello = keyboard[1][0][5] + keyboard[0][0][2] + keyboard[1][0][8] + keyboard[1][0][8] +
      keyboard[0][0][8];
    let javascript = keyboard[1][0][6] + keyboard[1][0][0] + keyboard[2][0][3] + keyboard[1][0][0] +
      keyboard[1][0][1] + keyboard[2][0][2] + keyboard[0][0][3] + keyboard[0][0][7] + keyboard[0][0][9]
      + keyboard[0][0][4];
    let trainer = keyboard[0][0][4] + keyboard[0][0][3] + keyboard[1][0][0] + keyboard[0][0][7] +
      keyboard[2][0][5] + keyboard[0][0][2] + keyboard[0][0][3];

    console.log("hello - " + hello);
    console.log("javascript - " + javascript);
    console.log("trainer - " + trainer);
    console.log('-------Конец 3-го модуль----------');
}
