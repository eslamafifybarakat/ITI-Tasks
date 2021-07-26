var obj = {
    name:"Eslam",
    address:"sting",
    age:40
}

var handler = {
    get(obj,props){
        if(obj.hasOwnProperty(props)){
            return obj[props]
        }else{
            return "Not Exit..!"
        }
    },
    set(obj,props,value){
        if(obj.hasOwnProperty(props)){
           if(props=="name"){
               if(value.length <= 7){
                   obj[props] = value;
               }
               else{
                   console.log("Not Updated")
               }
           }
           if(props=="address"){
            if(typeof value == "string"){
                obj[props] = value;
            }
            else{
                console.log("Not Updated")
            }
        }
        if(props=="age"){
            if (value < 25 && value > 60)
            obj[props] = value;
            else {
                console.log("Not Updated")
        }   
        }
        }else{
            return "Not Existed";
        }
    }
}
var prox = new Proxy(obj,handler);

