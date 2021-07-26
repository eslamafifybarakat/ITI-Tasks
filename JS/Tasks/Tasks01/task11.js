function task1(){
    var message=prompt("Enter your mssage:");
    for(var num = 1; num < 7 ; num++)
    {
        num.toString();
        document.write("<h"+num+">"+message+"</h"+num+">");
    }
}
task1();