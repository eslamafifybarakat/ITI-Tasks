
function Shape(width, height) {
  if (this.constructor == Shape) {
    throw new TypeError("Can't instanciate an abstract Shape.");
  }
  this.width = width;
  this.height = height;
}

Shape.prototype.area = function () {
  return this.width * this.height
};
Shape.prototype.perimeter = function () {
  return (this.width + this.height) * 2;
};

Shape.prototype.displayInfo = function () {
  return `The area = ${this.area()} and The Perimeter = ${this.perimeter()}`;
};



function Rectangle(width, height) {
  Shape.call(this, width, height);
  if (this.constructor == Rectangle) {
    if (Rectangle.recCount > 0) {
      throw "Can't create more than one rectangle!"
    } else {
      Rectangle.recCount++;
    }
  }
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.recCount = 0;
Rectangle.prototype.toString = function () {
  return `I am a rectangle with ${this.displayInfo()}`
};



function Square(side) {
  Rectangle.call(this, side, side);
  if (this.constructor == Square) {
    if (Square.count > 0) {
      throw "Can't create more than one Square!"
    } else {
      Square.count++;
    }
  }
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.count = 0;
Rectangle.prototype.toString = function () {
  return `I am a rectangle. ${this.displayInfo()}`
};
