var numRand = [];
var check = true;
var step = 0;
var wrap = document.getElementById('wrap');

var stepInp = document.getElementById('inpStep');
stepInp.value = 'Step # '+step;

/* Генеруємо рандомний масив чисел */
	for (var a=[1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12], i = a.length; i--; ) {
    	var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    	numRand.push(random);
	}

/* Створюємо блоки */
var h = 140,
	w = 100,
	margin = 5;
for (var i=0; i<6; i++) {
	for (var j=0; j<4; j++) {
		var block = document.createElement('div');
		block.classList.add('cards', 'card2');
		block.style.top = j * h + j * margin + 'px';
		block.style.left = i * w + i * margin + 'px';
		wrap.appendChild(block);

		var fig2 = document.createElement('figure');
		fig2.classList.add('frontHolder');
		block.appendChild(fig2);
	}
}



var n = document.getElementsByClassName('cards');

/* Запихуємо в блоки зображення */    
    for (i=0;i<numRand.length;i++){
    	var rand = numRand[i];
        n[i].setAttribute('data', ''+rand);
        // getElementById(''+i+'');
        n[i].style.backgroundImage = 'url("images/'+rand +'.png")';
    }

var button = document.getElementById('but');
button.onclick = function () {
	for (var i = 0; i < n.length; i++) {
		n[i].style.opacity = '1';
	}
}

/* Розбираємо блоки та клікаємо */ 
for(var i = 0; i < n.length; i++) {
	n[i].onclick = onClick;
}
var flag = 0;
var value1 = 0;
var value2 = 0;
var firstCard = null;
var secondCard = null;
	function onClick () {
		if (check) {
			check = false;
			

			if (flag == 0) {
				value1 = 0;
				value2 = 0;
			}
			this.classList.toggle('card');
			this.classList.toggle('card2');
			flag++;
			if (flag == 1) {
				firstCard = this;
				firstCard.onclick = null;
				value1 = parseInt(this.getAttribute('data'));
				setTimeout(function () {
				check = true;
				}, 100);
			}
			if (flag == 2) {
				step++;
				value2 = parseInt(this.getAttribute('data'));
				secondCard = this;
				setTimeout(function () {
					if (value1 == value2) {
						secondCard.style.display = 'none';
						firstCard.style.display = 'none';
						secondCard.classList.remove('cards');
						firstCard.classList.remove('cards');
						flag = 0;
					}
					else {
						firstCard.onclick = onClick;
						firstCard = null;
						secondCard = null;
						
						flag = 0;
						for (var i = 0; i < n.length; i++) {
							n[i].classList.remove('card');
							n[i].classList.add('card2');
						}
					}
					stepInp.value = 'Step # '+step;
					check = true;
				}, 1000);
			}
		}
}
