var numRand = [];
// var numRandSuper = 
var fontSizeRand = [];
var colorRand = [];
var number = '';
var butStart = document.getElementById('butStart');
var butReStart = document.getElementById('butReStart');
var inpName = document.getElementById('inpName');
var superName = 'Batman';
var flag=0;


butReStart.onclick=function(){
    location.reload();
}

butStart.onclick=function(){
    if (flag < 1){
        flag++;
        start();
    }
}
    function start(){
    // timer // dimas added
    var second = 60.00;
    var toSecond = document.getElementById('second');
    toSecond.value = second;
    var end = 0;
    timer();
    function timer(){
        setInterval(function () {
            if( second > 0){ second=roundPlus(second-0.1);
                if(numRand.length==0){
                    second="Win";
                }
                toSecond.value = second;
            }
            else{
                clearInterval(second);
            }
        }, 100)
    }
    //for round number for timer
    function roundPlus(x) { //x - число, n - количество знаков
        var m = Math.pow(10,1);
        return Math.round(x*m)/m;
    }

    /* Генеруємо рандомний масив кольорів colorRand */
    function runColor(){
    	for (var a=['red','green','blue','gold','black','red','green','blue','gold','black','lime','brown','pink','indigo','peach-puff','red','green','blue','gold','black','lime','brown','pink','indigo','peach-puff'], i = a.length; i--; ) {
        	var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        	colorRand.push(random);
    	}
    	
    }
    runColor();

    /* Генеруємо рандомний масив висоти шрифтів runFontSize */
    function runFontSize(){
    	for (var a=[40,38,18,20,22,24,26,28,30,32,34,40,38,18,20,22,24,26,28,30,32,34,36,38,40], i = a.length; i--; ) {
        	var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        	fontSizeRand.push(random);
    	}
    }
    runFontSize();

    /* Генеруємо рандомний масив чисел */
    function runNumRand(){
    	for (var a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], i = a.length; i--; ) {
        	var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        	numRand.push(random);
    	}
    }
    runNumRand();
    /* Режим суперкоду */
    if (inpName.value === superName){
         numRand = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    }
    console.log(inpName.value);
    /* Створюємо блоки та запихуємо туди цифри */

        for(i=0;i<numRand.length;i++){
        		number += '<div id="'+i+'" class="numHolder">'; // добавила еще и класс, чтобы мне в коде легче было цеплять
        	// событие
        		number += '<p>'+numRand[i]+'</p>';
        		number += '</div>';
        }
        document.getElementById('wrap').innerHTML = number;

        /* Змінюємо властивості блоків по кольору та висоті шрифту */
        for(i=0;i<colorRand.length;i++){
        	var a = document.getElementById(''+i+'');
        	a.style.color = ''+colorRand[i]+'';	
        	a.style.fontSize = ""+fontSizeRand[i]+"px";	
        }


var numHolders = document.getElementsByClassName("numHolder");// берем класс
for(var i=0; i<numHolders.length; i++){
	numHolders[i].addEventListener("click", function () { // далее будем использовать this
        var minNumber = Math.min.apply(null, numRand);// нашли минимальное значение массива, т.к он перемешан уже
        var clickedNumber = +this.firstChild.innerHTML; //взяли текст внутри p
        if(minNumber === clickedNumber){ // сравниваем минимальное число, которое вывели раньше, с числом, которое
			// нажали
        	var numIndex = numRand.indexOf(clickedNumber); // выводим индекс нажатого числа
            numRand.splice(numIndex, 1); //вырезаем после нажатия, чтобы не повторялось
            this.style.backgroundColor = "#b2dfdb";

        }
        else{
            // this.style.backgroundColor = "#ffab91";
            var speechBubble = ["Are you serious?", "Wro-o-ong!", "Are you kidding?", "Try one more time", "HA-HA, LOSER!"];
			// длина массива
                var len_arr = speechBubble.length;
			// случайное число от 0 до длинны массива
                var random_number = [Math.floor(Math.random() * len_arr)];
			// достаем случайный элемент из массива
                var rand_el_bubble = speechBubble[random_number];
			// вывод
				var textForm = document.getElementById("speech-bubble-text");

                textForm.value = rand_el_bubble;
                setTimeout( function () { textForm.value = null;
                }, 3000);

        }
        console.log(numRand);
    });
}
}


