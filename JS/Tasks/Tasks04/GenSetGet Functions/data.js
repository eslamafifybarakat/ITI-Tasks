function Car( properties ) {
    var instance = this;
    
     console.log(instance);
    //using IIEF Pattern
    for( var i in properties ) { 
      (function (i) {
          if(typeof properties[i]=="function"){
              console.log('error');//throw execption if exist error
          }else{
              //this.getname = function(){} like that
            instance[ "get" + i ] = function() {
                return properties[i];
              };
              //this.setname = function(val){} like that
              instance[ "set" + i ] = function(val) {
                properties[i] = val;
              };
          }
       
      })(i);
    }
  }
  
  var obj = new Car( {
     name: "honda",
     model:"cc2018",
     color:"red",
     display:function(){}
  });
 
  console.log(obj.getname())
  obj.setname('kya')
  console.log(obj.getmodel())
  obj.setmodel('c2019')
  console.log(obj.getcolor())
  obj.setcolor('green')
  console.log(obj.age);
