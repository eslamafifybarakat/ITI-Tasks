function counte(){
    var text=prompt("Enter your text");
    var letter=prompt("chosse your letter");
    var count=0;        
        for (var i=0; i<text.length; i++) {
            if (text.charAt(i)==letter) {
                count++;
            }
        }
    document.write("Nubmer of char'e' is: "+count);
}
counte();