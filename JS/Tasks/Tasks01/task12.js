function sum()
{
    var maxNum =parseInt(prompt("Enter Max Number You Will Enter")) ;
    var sum = 0;
    while (maxNum>=1) {
        var num =parseInt(prompt("Enter Number Value ")) ;
        if(num!=0 && sum<=100)
            sum+=num;
        maxNum--;
    }
    document.write("Sum = " + sum);
}
sum();