var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//super class
class polygon{
    constructor(){

    }
}
//rect
class rectangle extends polygon {
    constructor(width,height){
        super();
        this.width = width;
        this.height = height;
        
    }
    area(){
        var area = this.width * this.height
        return area 
   }
   toStriangle(){
       return `Rectangle Width is: ${this.width} \nThe height is: ${this.height}`
   }
   createShape(){
    ctx.rect(50, 240, this.width, this.height);
    ctx.fillStyle = "dark_red"
    ctx.fill();
   }
}
//rect
class square extends polygon {
    constructor(side){
        super();
        this.side = side;
        
    }
    area(){
        var area = Math.pow(this.side,2)
        return area 
   }
   toStriangle(){
       return `Square Side is: ${this.side}`
   }
   createShape(){
    ctx.rect(150, 40, this.side, this.side);
    ctx.fillStyle = "blue"
    ctx.fill();
   }
}
//circle,
class circle extends polygon {
    constructor(raduis){
        super();
        this.raduis = raduis;
        
    }
    area(){
        var area = Math.PI * Math.pow(this.raduis,2)
        return area 
   }
   toStriangle(){
       return `Circle Raduis is: ${this.raduis}`
   }
   createShape(){
    ctx.arc(400, 300, this.raduis,0,2*Math.PI);
    ctx.fillStyle = "green"
    ctx.fill();
   }
}
class triangle extends polygon {
    constructor(base,height){
        super();
        this.base = base;
        this.height = height;
        
    }
    area(){
        var area = .5 * this.base * this.height
        return area 
   }
   toStriangle(){
       return `Triangle Base is: ${this.base} \n The height is: ${this.height}`
   }
   createShape(){
    ctx.beginPath();
    ctx.moveTo(100, 140);   
    ctx.lineTo(200, 50);  
    ctx.lineTo(220, 140); 
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath(); 
    ctx.stroke();
   }
}
var rect = new rectangle(100,150);
console.log(rect.area());
console.log(rect.toStriangle());
console.log(rect.createShape());
//
var squre = new square(150);
console.log(squre.area());
console.log(squre.toStriangle());
console.log(squre.createShape());
//
var cire = new circle(60);
console.log(cire.area());
console.log(cire.toStriangle());
console.log(cire.createShape());
//
var newTriangle = new triangle(100,50);
console.log(newTriangle.area());
console.log(newTriangle.toStriangle());
console.log(newTriangle.createShape());