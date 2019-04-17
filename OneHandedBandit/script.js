/* Однорукий код */

var col1=document.getElementById('col-1');
var col2=document.getElementById('col-2');
var col3=document.getElementById('col-3');

var rateInp = document.getElementById('rate');

var button = document.getElementById('start');
var wallet = 2000;
var inp = document.getElementById('money');
inp.value = wallet;
var prize = 0;
var inp2 = document.getElementById('wallet');
inp2.value = prize;
var array1 = run_run();
var array2 = run_run();
var array3 = run_run();
var rate = 100;
rateInp.value = 100;
rateInp.oninput = function() {
	rate = parseInt(rateInp.value);
	if (!rate)
		rate = 1;
	rateInp.value = rate;
	
}
_creating(col1, array1);
_creating(col2, array2);
_creating(col3, array3);

var checkpoint = true;
var gameOver = true;
var checkLine = true;

/* Ставка максимум */

var button2 = document.getElementsByClassName('btn');
button2[0].onclick = function () {
	if (checkpoint && gameOver) {
		checkpoint = false;
		rate = wallet+prize;
		rateInp.value = rate;
	checkpoint = true;
	}
}

/* Все линии */

var button2 = document.getElementsByClassName('btn');
button2[1].onclick = function () {
	if (checkpoint && gameOver) {
		checkpoint = false;
		checkLine = true;
		checkpoint = true;
	}
}
/* Одна линия */

var button2 = document.getElementsByClassName('btn');
button2[2].onclick = function () {
	if (checkpoint && gameOver) {
		checkpoint = false;
		checkLine = false;
		checkpoint = true;
	}
}

/* Стол рассчет */

var button2 = document.getElementsByClassName('btn');
button2[3].onclick = function () {
	if (checkpoint && gameOver) {
		checkpoint = false;
		wallet = 0;
		inp.value = wallet;
		rate = 0;
		rateInp.value = rate;
	}
}

/* Ставка минимум */

var button2 = document.getElementsByClassName('btn');
button2[4].onclick = function () {
	if (checkpoint && gameOver) {
		checkpoint = false;
		rate = 1;
		rateInp.value = rate;
		checkpoint = true;
	}
}

/* Вертим */

button.onclick = function () {
	
	if (checkpoint && gameOver) {
		checkpoint = false;
		if (rate <= 0) {
			rate = 1;
			rateInp.value = 1;
		}
		if (rate > 1000 && rate != wallet+prize) {
			rate = 1000;
			rateInp.value = 1000;
		}
		if (rate > wallet) {
			rate = wallet+prize;
			rateInp.value = rate;
		}
		wallet += prize;
		prize = 0;
		wallet -= rate;
		var inp = document.getElementById('money');
		inp.value = wallet;
		var index1 = _random();
		var index2 = _random();
		var index3 = _random();

        counts(array1, array2, array3, index1, index2, index3);
		var getPrize = 0;
		var inp = document.getElementById('wallet');
		inp.value = getPrize;
		var x = 20;
		if (prize > 20 && prize <=50)
			x = 10;
		if (prize > 50 && prize <= 100)
			x = 2;
		if (prize > 100 && prize <= 500)
			x = 1;
		if (prize > 500)
			x = 0.01;
		setTimeout( function () {
			var counting = setInterval( function () {
				if (getPrize < prize) {
					getPrize++;
					var inp = document.getElementById('wallet');
					inp.value = getPrize;
				}
				else
					clearInterval(counting);
				}, x);
			
				var getWallet = wallet; /*   --------     */
		var mon = document.getElementById('money');
		mon.value = getWallet;
				var walletCounting = setInterval( function () {
					if (getWallet < wallet+prize) {
						getWallet++;
						var mon = document.getElementById('money');
						mon.value = getWallet;
					}
					else
						clearInterval(walletCounting);
				}, x);
		
		}, 4000);
		

		
		Animate(index1, col1);
		Animate(index2, col2);
		Animate(index3, col3);
		setTimeout(function () {
			checkpoint = true;
			if (wallet+prize <= 0) {
				var red = document.createElement('div');
				red.className = 'red';
				red.innerHTML = "GAME OVER!";
				red.style.color = 'red';
				document.body.appendChild(red);
				gameOver = false;
			}
		}, 4000);
	
	

	}
}



function Animate(index, col){
    var t = 0;
    if(t<-2240) {
        t=0;
        t=index*(-70);
    }
    else
        t=index*(-70);
    col.firstElementChild.style.marginTop=t+"px";
	
}




function _creating(papa, array) {

    for (var i = 0; i < 32; i++) {
        var block = document.createElement('div');
        block.className = 'arr';
        block.style.backgroundImage = "url(images/" + array[i] + ".png)";
        block.style.transition = '3s';
        papa.appendChild(block);

    }
}



function run_run(){
    var arr = [];
    for (var a=[8,7,3,4,5,6,7,8,8,7,6,5,4,3,2,1,5,6,7,8,4,3,2,8,1,2,3,4,5,6,7,8], i = a.length; i--;) {
        var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        arr.push(random);
    }
    console.log(arr);
    return arr;
}



function _random() {
    var a = Math.floor(Math.random()*29);
    console.log(a);
    return a;
}





function comparing(a, b, c) {
    if((a==b) && (a==c))
        return true;
    else
        return false;
}



function counts(ar1, ar2, ar3, i1, i2, i3) {
	
	var a1 = ar1[i1];
	var a2 = ar2[i2];
	var a3 = ar3[i3];
	
	var b1 = ar1[i1 + 1];
	var b2 = ar2[i2 + 1];
	var b3 = ar3[i3 + 1];
	
	var c1 = ar1[i1 + 2];
	var c2 = ar2[i2 + 2];
	var c3 = ar3[i3 + 2];
	
	if (comparing(a1, a2, a3) && checkLine) {
		// wallet = wallet + max_score(a1);
		prize = prize + Math.floor(max_score(a1));
		var hr = document.getElementById('hor3-1');
		stickAnim(hr);
	}
	if (comparing(b1, b2, b3)) {
		// wallet = wallet + max_score(b1);
		prize = prize + Math.floor(max_score(b1));
		var hr2 = document.getElementById('hor3-2');
		stickAnim(hr2);
	}
	if (comparing(c1, c2, c3) && checkLine) {
		// wallet = wallet + max_score(c1);
		prize = prize + Math.floor(max_score(c1));
		var hr3 = document.getElementById('hor3-3');
		stickAnim(hr3);
	}
	if (comparing(a1, b2, c3) && checkLine) {
		// wallet = wallet + max_score(a1);
		prize = prize + Math.floor(max_score(a1));
		var hr4 = document.getElementById('diag1');
		stickAnim(hr4);
	}
	if (comparing(c1, b2, a3) && checkLine) {
		// wallet = wallet + max_score(c1);
		prize = prize + Math.floor(max_score(c1));
		var hr5 = document.getElementById('diag2');
		stickAnim(hr5);
	}
	if ((a1 == a2) && (a3 != a1) && checkLine) {
		// wallet = wallet + _score_small(a1);
		prize = prize + Math.floor(_score_small(a1));
		var hr6 = document.getElementById('hor12-1');
		stickAnim(hr6);
	}
	if ((a2 == a3) && (a1 != a2) && checkLine) {
		// wallet = wallet + _score_small(a2);
		prize = prize + Math.floor(_score_small(a2));
		var hr7 = document.getElementById('hor23-1');
		stickAnim(hr7);
	}
	if ((b1 == b2) && (b3 != b1)) {
		// wallet = wallet + _score_small(b1);
		prize = prize + Math.floor(_score_small(b1));
		var hr8 = document.getElementById('hor12-2');
		stickAnim(hr8);
	}
	if ((b2 == b3) && (b1 != b2)) {
		// wallet = wallet + _score_small(b2);
		prize = prize + Math.floor(_score_small(b2));
		var hr9 = document.getElementById('hor23-2');
		stickAnim(hr9);
	}
	if ((c1 == c2) && (c3 != c1) && checkLine) {
		// wallet = wallet + _score_small(c1);
		prize = prize + Math.floor(_score_small(c1));
		var hr10 = document.getElementById('hor12-3');
		stickAnim(hr10);
	}
	if ((c2 == c3) && (c1 != c3) && checkLine) {
		// wallet = wallet + _score_small(c2);
		prize = prize + Math.floor(_score_small(c2));
		var hr11 = document.getElementById('hor23-3');
		stickAnim(hr11);
	}
	if ((c1 == b2) && (b2 != a3) && checkLine) {
		// wallet = wallet + _score_small(c1);
		prize = prize + Math.floor(_score_small(c1));
		var hr12 = document.getElementById('diag2_12');
		stickAnim(hr12);
	}
	if ((b2 == a3) && (c1 != a3) && checkLine) {
		// wallet = wallet + _score_small(b2);
		prize = prize + Math.floor(_score_small(b2));
		var hr13 = document.getElementById('diag2_23');
		stickAnim(hr13);
	}
	if ((a1 == b2) && (b2 != c3) && checkLine) {
		// wallet = wallet + _score_small(a1);
		prize = prize + Math.floor(_score_small(a1));
		var hr14 = document.getElementById('diag1_12');
		stickAnim(hr14);
	}
	if ((b2 == c3) && (b2 != a1) && checkLine) {
		// wallet = wallet + _score_small(b2);
		prize = prize + Math.floor(_score_small(b2));
		var hr15 = document.getElementById('diag1_23');
		stickAnim(hr15);
	}
	// if (b1 == a2) {
	// 	wallet = wallet + _score_small(b1);
	// 	var hr16 = document.getElementById('diag1_1');
	// 	stickAnim(hr16);
	// }
	// if (a2 == b3) {
	// 	wallet = wallet + _score_small(a2);
	// 	var hr17 = document.getElementById('diag1_2');
	// 	stickAnim(hr17);
	// }
	// if (b3 == c2) {
	// 	wallet = wallet + _score_small(b3);
	// 	var hr18 = document.getElementById('diag1_3');
	// 	stickAnim(hr18);
	// }
	// if (c2 == b1) {
	// 	wallet = wallet + _score_small(c2);
	// 	var hr19 = document.getElementById('diag1_4');
	// 	console.log(hr19);
	// 	stickAnim(hr19);
	// }
}
function stickAnim (stick) {
	setTimeout(function(){
		var timer = setInterval(function(){
			stick.classList.toggle('stick-block');
		},240);
		setTimeout(function(){
			clearInterval(timer);
		},1000)
		
	},3000)
	
	// for (var i = 0; i < 4; i++) {
	// 	// setTimeout(function () {
	//
	// 	// }, 1000);
	// }
}



function max_score(num) {
    var value = 0;
    switch(num) {
        case 1:
            value = 50*rate;
            break;
        case 2:
            value = 35*rate;
            break;
        case 3:
            value = 30*rate;
            break;
        case 4:
            value = 20*rate;
            break;
        case 5:
            value = 15*rate;
            break;
        case 6:
            value = 12*rate;
            break;
        case 7:
            value = 10*rate;
            break;
        case 8:
            value = 5*rate;
            break;
    }
    return value;
}
function _score_small(num) {
    var value = 0;
    switch(num) {
        case 1:
            value = rate*1.2;
            break;
        case 2:
            value = rate*0.8;
            break;
        case 3:
            value = rate*0.6;
            break;
        case 4:
            value = rate*0.4;
            break;
        case 5:
            value = rate*0.3;
            break;
        case 6:
            value = rate*0.2;
            break;
        case 7:
            value = rate*0.1;
            break;
        case 8:
            value = rate*0.08;
            break;
    }
    return value;
}


