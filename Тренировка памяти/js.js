var checkpoint = true;
var gameOver = true;
var flag = 0;
var lim = 3;

var start = document.getElementById('button');
start.addEventListener('click', function () {
	console.log(checkpoint);
	if (checkpoint) {
		checkpoint = false;
		var h = 0;
		var w = 0;
		
		
		var box = document.getElementById('block');
		var inp = document.getElementById('inp');
		inp.value = lim-2 + ' lap' + ' : ' +lim + 'balls';
		var array = [];
		
		var check = false;
		
		box.onmousemove = function () {
			// inp.value = event.clientX + ':' + event.clientY;
			h = event.clientY;
			w = event.clientX;
		};
		var spawn = setInterval(function () {
			
			var d = document.createElement('div');
			d.classList.add('block-style');
			d.style.top = Math.random() * (485 - 15) + 15 - 15 + 'px';
			d.style.left = Math.random() * (985 - 15) + 15 - 15 + 'px';
			d.style.backgroundColor = "rgb(" + getRandomIntInclusive(0, 255) + "," + getRandomIntInclusive(0, 255) + ","
				+ getRandomIntInclusive(0, 255) + ")";
			changeColor(d);
			box.appendChild(d);
			
			d.setAttribute('data', '' + flag);
			flag++;
		}, 1000);
		
		setTimeout(function () {
			clearInterval(spawn);
		}, lim * 1000);
		
		setTimeout(function () {
			array = document.getElementsByClassName('block-style');
			for (var i = 0; i < array.length; i++) {
				array[i].onclick = onClick;
			}
		function onClick() {
			if (gameOver) {
				for (var i = 0; i < array.length; i++) {
					if (parseInt(this.getAttribute('data')) >= parseInt(array[i].getAttribute('data'))) {
						check = true;
					}
					else {
						check = false;
						checkpoint = false;
						gameOver = false;
						inp.value = 'Game Over!';
						inp.classList.add('gameover-style');
						break;
					}
				}
				if (check) {
					this.style.display = 'none';
					this.remove();
				}
				if (array.length == 0) {
					console.log(checkpoint + ' 2');
					lim++;
					flag = 0;
					checkpoint = true;
					inp.value = 'Yeeeeaaaar!';
					inp.classList.add('win-style');
					setTimeout( function () {
						inp.value = null;
						inp.classList.remove('win-style');
					}, 2000);
				}
			}
		}
	}, (lim*1000 + 100));
	}
});

function changeColor(element) {
	element.style.backgroundColor = "rgb(" + getRandomIntInclusive( 0, 255) + "," + getRandomIntInclusive( 0, 255) + ","
		+ getRandomIntInclusive( 0, 255) + ")";
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
