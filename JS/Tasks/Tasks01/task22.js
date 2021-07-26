function plalindrome(){
    var response=prompt("Enter Your Palindrome");
    var arrText=new Array();
    for(var i=0;i<response.length;i++){
        arrText[i]=response.charAt(i);
    }
    var reverseArr=arrText.reverse();
    
    if (arrText==reverseArr) {
        alert("This is a Palindrome");
    }
    else
        alert("This is a Palindrome");
}
plalindrome();