function nSeq(lBound, rBound, step) {
  var seqList = [];

  function fill(list) {
    for (var i = lBound; i <= rBound; i += step) {
      list.push(i);
    }
  }
  fill(seqList);

  Object.defineProperty(this, 'append',
    {
      get: function () {
        return function (newVal) {
          if (newVal >= lBound && newVal <= rBound) {
            if (newVal - seqList[seqList.length - 1] === step) {
              seqList.push(newVal);
              return newVal;
            } else {
              throw "Value in the wrong sequence";
            }
          } else {
            throw "Value is outside of boundaries!";
          }
        }
      }
    });

  Object.defineProperty(this, 'prepend',
    {
      get: function () {
        return function (newVal) {
          if (newVal >= lBound && newVal <= rBound) {
            if (seqList[0] - newVal === step) {
              seqList.unshift(newVal);
              return newVal;
            } else {
              throw "Value in the wrong sequence";
            }
          } else {
            throw "Value is outoff of boundaries!";
          }
        }
      }
    });

  Object.defineProperty(this, 'pop',
    {
      get: function () {
        return function () {
          return seqList.pop();
        }
      }
    });

  Object.defineProperty(this, 'dequeue',
    {
      get: function () {
        return function () {
          return seqList.shift();
        }
      }
    });

  Object.defineProperty(this, 'display',
    {
      get: function () {
        return function () {
          return seqList.toString();
        }
      }
    });
}

var s = new nSeq(7, 15, 2);
document.write(s.display());
document.write("<br>"); 
document.write(s.display());
document.write("<br>"); 
document.write('deque() ' + s.dequeue());
document.write("<br>"); 
document.write(s.display());
document.write("<br>"); 
document.write('append(17) ' + s.append(13));
document.write("<br>"); 
document.write(s.display());
document.write("<br>"); 
document.write('prepend(4) ' + s.prepend(1));
document.write("<br>"); 
document.write(s.display());
document.write("<br>"); 
document.write('pop() ' + s.pop());
document.write("<br>"); 
