var newdata = [];
function sortdata(array){
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
}
var linkedlistobj = {
    data:[],
    pushvalue:function(){
        
        for (let i = 0; i < arguments.length; i++) {
            
            if(this.data.indexOf(arguments[i])==true){
                console.log(arguments[i]+'::That value is exsit in Array');
            }else{
                this.data.push(arguments[i]);
            } 
        }
        newdata = sortdata(this.data);
    },
    popvalue:function(val){
        if(this.data.indexOf(val)==true){
            this.data.pop(val);
            
        }else{
            console.log(val+'::That value is not found in Array');
        }
    },
}

var arr = linkedlistobj.pushvalue(66,55,22,11,77,88);
linkedlistobj.popvalue(22);

console.log(newdata);
