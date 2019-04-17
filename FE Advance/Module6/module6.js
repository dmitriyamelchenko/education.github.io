const keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: '',
    task: [],
    userInput:'',
    userErrors: 0,


    setCharCount(){
        let inputVal = +prompt("Какое количество символов вы хотите набрать?", 1);
        if(this.checkPositiveInteger(inputVal) === true) {
            this.charCount = inputVal;
        }
        console.log(this.charCount);
    },

    checkPositiveInteger(x) {
        if(Number.isInteger(x) && x>0) return true;
        else if(isNaN(x)){
            alert('Вы должны вводить числа!!!');
            this.setCharCount();
        }
        else{
            alert("Число должно быть целым и положительным!!!");
            this.setCharCount();
        }
    },

    createTask(){
        let array = new Array(this.charCount);
        array.fill(0);
        this.task = array.map(elem => elem = this.chars[Math.floor(Math.random()*this.chars.length)]);
    },

    startTask(){
        this.userInput = prompt(`Введите данную строку : ${this.task.join('')}`);
        if(this.userInput.length === 0){
            alert ('Вы не ввели не одного символа!');
            this.startTask();
        }
        else {
            let max = new Array(this.userInput.length > this.task.length ? this.userInput.length : this.task.length).fill(0);
            max.map((elem) => {
                if (this.userInput[elem] !== this.task[elem])
                    this.userErrors++;
            })
        }
            this.userErrors > 0 ? alert(`Вы допустили ${this.userErrors} ошибок, удачи вам в следующий раз!`) : alert(`Поздравляем, вы не допустили не единой ошибки!!!`);


        // else{
        //     let max = this.userInput.length > this.task.length ? this.userInput.length : this.task.length;
        //     for(let i = 0; i < max; i++){
        //         if(this.userInput[i] !== this.task[i])
        //             this.userErrors ++;
        //     }
        //     this.userErrors > 0 ? alert(`Вы допустили ${this.userErrors} ошибок, удачи вам в следующий раз!`) : alert(`Поздравляем, вы не допустили не единой ошибки!!!`);
        // }

        //В конце отработки программы обнуляем значения набора символов и кол-ва ошибок для корректной работы программы без
        // перезагрузки программы, иначе счетчик ошибок содержит кол-во ошибок прошлой игры + текущей, аналогично и по поводу массива.
        this.task.length = 0;
        this.userErrors = 0;
    },

};

run = () => {
    keyTrainer.setCharCount();
    keyTrainer.createTask();
    keyTrainer.startTask();
};

document.getElementById('module6But').onclick = function () {
    run();
};

