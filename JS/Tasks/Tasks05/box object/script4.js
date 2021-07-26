var box = {
  content: [],
  height: 50,
  width: 100,
  length: 10,
  numOfBooks: 0,
  volume: this.height * this.width * this.length,
  material: "Wood",

  createAndAddBook: function (title, noCh, author, noPg, publisher, noCopies) {
    content = this.content;
    content.push({
      title: title,
      numofChapters: noCh,
      author: author,
      numofPages: noPg,
      publisher: publisher,
      numofCopies: noCopies
    })
    return this.numOfBooks += 1;
  },

  rmBookName: function (bookName) {
    for (var i = 0; i < this.numOfBooks; i++) {
      if (this.content[i].title === bookName) {
        this.numOfBooks -= 1;
        return this.content.splice(i, 1)[0];
      }
    }
  },

  rmBookWith: function (bookVal) {
    for (var i = 0; i < this.numOfBooks; i++) {
      for (var prop in this.content[i]) {
        if (this.content[i][prop] === bookVal) {
          this.numOfBooks -= 1;
          return this.content.splice(i, 1)[0];
        }
      }
    }
  },

  toString: function () {
    return `I am a ${this.width} by ${this.height} by ${this.length} book box!` +
      `\nI contain ${this.numOfBooks} books!`
  },

  valueOf: function () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i].numOfBooks != 'number') {
        throw new TypeError(`Expected a number but found ${arguments[i].numOfBooks}`);
      }
      sum += arguments[i].numOfBooks;
    }
    return sum;
  }
}



box.createAndAddBook("Harry potter", 7, "Rodweg", 900, "Alex", 1000);
box.createAndAddBook("DP", 1, "GoF", 450, "Springer", 1000);
box.createAndAddBook("HF DP", 1, "GAGG", 450, "O'Rielly", 520);
box.createAndAddBook("Maths", 2, "MBGO", 680, "Preaston", 820);
console.log(box.numOfBooks); // 4
var b2 = Object.create(box);
b2.rmBookName("DP");
console.log(b2.numOfBooks); // 3
console.log(b2.valueOf(b2, box)); // 7
console.log(b2.valueOf(b2, b2, box)); // 10

