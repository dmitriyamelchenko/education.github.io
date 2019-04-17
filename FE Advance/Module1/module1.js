// 1
const one = "qwertyuiop[]";
const two = "asdfghjkl;'";
const three = "zxcvbnm,./";

// 2
const oneLength = one.length;
const twoLength = two.length;
const threeLength = three.length;
console.log('Задание 2:');
console.log(oneLength+' '+twoLength+' '+threeLength);
console.log("-------------");

3//
console.log("Задание 3:");
console.log(one.charAt(0));
console.log(one.charAt(oneLength-1));
// or
console.log(one.charAt(one.length-1));

console.log(two.charAt(0));
console.log(two.charAt(two.length-1));

console.log(three.charAt(0));
console.log(three.charAt(three.length-1));
console.log("-------------");

// 4
console.log("Задание 4:");
let a = one.indexOf("[");
let b = one.indexOf("]");
console.log("position: "+a+" "+b);
console.log("-------------");

console.log("Задание 5:");
console.log(`one = ${one} 
two = ${two} 
three = ${three} 
oneLength = ${oneLength} 
twoLength = ${twoLength} 
threeLength = ${threeLength}
one.charAt(0) = ${one.charAt(0)}
one.charAt(oneLength-1) = ${one.charAt(oneLength-1)}
two.charAt(0) = ${two.charAt(0)}
two.charAt(two.length-1) = ${two.charAt(two.length-1)}
three.charAt(0) = ${three.charAt(0) }
three.charAt(three.length-1) = ${three.charAt(three.length-1)}
a = ${a}
b = ${b}

`);

console.log("Конец");