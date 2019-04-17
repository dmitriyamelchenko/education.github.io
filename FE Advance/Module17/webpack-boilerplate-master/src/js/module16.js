export class Shape{
    constructor(color, initX, initY){
        this.color = color;
        this.initX = initX;
        this.initY = initY;
    }
    get getColor(){
        return this.color;
    }
    set setColor(value){
        this.color = value;
        console.log(value);
    }
    get getCoords(){
        return `x: ${this.initX}, y: ${this.initY}`;
    }
    moveTo(newX, newY){
        this.initX = newX;
        this.initY = newY;
    }
}


export class Rectangle extends Shape{
    constructor(color, initX, initY, initWidth, initHeight){
        super(color, initX, initY);
        this.initWidth = initWidth;
        this.initHeight = initHeight;
    }
    set setWidth(newWidth){
        this.initWidth = newWidth;
    }
    set setHeight(newHeight){
        this.initHeight = newHeight;
    }
    get getDims(){
        return `width: ${this.initWidth},
          height: ${this.initHeight}`;
    }
    draw(){
        console.log(`
        Drawing a Rectangle at:
          (${this.getCoords})
        With dimentions:
          ${this.getDims}
        Filled with color: ${this.getColor}`);
    }
}

//Проверка класса Rectangle
// const rectangleTest = new Rectangle('#009688', 10, 10, 100, 100);
// rectangleTest.draw();
// console.log('          ---------------------');


export class Circle extends Shape{
    constructor(color, initX, initY, initRadius){
        super(color, initX, initY);
        this.initRarius = initRadius;
    }
    get getRadius(){
        return this.initRarius;
    }
    set setRadius(val){
        this.initRarius = val;
    }
    draw(){
        console.log(`
        Drawing a Circle at:
          (${this.getCoords})
        With dimentions:
          radius: ${this.getRadius}
        Filled with color: ${this.getColor}
        `);
    }
}
//Проверка класса Circle
// const circleTest = new Circle('#FF5722', 50, 50, 250);
// circleTest.draw();
