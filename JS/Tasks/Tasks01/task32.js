function sortArray() {
    var array=new Array();
    for (let i = 0; i < 5; i++) {
        array[i]=prompt("Enter Numerical Value: ");
    }
    document.write("You have Entered Value: "+ array+ "<br>");

    ascendArray=array.sort(function compare(a,b){
        return a-b;
    });
    document.write("You have ascend Value: "+ ascendArray + "<br>");
    descendArray=array.sort(function compare(a,b){
        return b-a;
    });
    document.write("You have ascend Value: "+ descendArray);
}

sortArray();