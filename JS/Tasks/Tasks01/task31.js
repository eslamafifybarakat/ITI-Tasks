function sumArray() {
    var array=[4,8,1];
    var sum=0;
    var multiple=1;
    var division=array[0];
    for (var i = 0; i < array.length; i++) {
         sum+=array[i];
         multiple*=array[i];
         division/=array[i];
        
    }
    document.write("Sum of 4+8+1= " +sum + "<br>");
    document.write("Mltiple of 4*8*1= " +multiple + "<br>");
    document.write("Division of 4/8/1= "+ division + "<br>");
}
sumArray();