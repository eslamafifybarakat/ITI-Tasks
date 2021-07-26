function info() {
    var favColor = prompt ("Select your favColor", "1)red 2)green 3)blue" );
    var Color;
    var flag = 1;
    switch (favColor)
    {
        case "1":
            Color = 'red';
            break;
        case "2":
            Color = 'green';
            break;
         case "3":
            Color = 'blue';
            break;
        default:
            flag = 0;
            alert("Not Founded");
    }
   
    var name=prompt("Enter Your Name:");
    var telphoneNumber=prompt("Enter Your Telphone Number:");
    var mobileNumber=prompt("Enter Your Mobile Number:");
    var email=prompt("Enter Your E-mail:");
    var today = new Date();

    var letters = /^[A-Za-z\s]+$/;
    if (name.match(letters)) {
        document.write("<h3 style=color:"+Color+">Welcome Dear Guest: "+name+"</h3>");
    }else
    alert("You Entered Invalid Name");

    var numbers = /^\d{8}$/;
    if (telphoneNumber.match(numbers)) {
        document.write("<h3 style=color:"+Color+">Your Telphone Number: "+telphoneNumber+"</h3>");
    }else
        alert("You Entered Invalid elphoneNumber");

    var mobile=/^(010|011|012)+\d{8}$/;
    if (mobileNumber.match(mobile)&&(mobileNumber.length=11)) {
        document.write("<h3 style=color:"+Color+">Your mobileNumber: "+mobileNumber+"</h3>");
    }else
        alert("You Entered Invalid mobile Number");

    var vEmail=/^[A-Za-z]+@\d{3}.com$/;
    if (email.match(vEmail)&&(email.length=11)) {
        document.write("<h3 style=color:"+Color+">Your E-mail: "+email+"</h3>");
    }else
        alert("You Entered Invalid E-mail");
    
    document.write("<br> <br> <br> <br> <br> <h3 style=color:"+Color+">Today is: "+ today.toDateString() +"</h3>");

    // var name=prompt("Enter Your Name:");
    // document.write("<h3 style=color:"+Color+">Welcome Dear Guest: "+name+"</h3>");

    // var telphoneNumber=prompt("Enter Your Telphone Number:");
    // document.write("<h3 style=color:"+Color+">Your Telphone Number: "+telphoneNumber+"</h3>");

    // var mobileNumber=prompt("Enter Your Mobile Number:");
    // document.write("<h3 style=color:"+Color+">Your Mobile Number: "+mobileNumber+"</h3>");

    // var email=prompt("Enter Your E-mail:");
    // document.write("<h3 style=color:"+Color+">Your E-mail: "+email+"</h3>");

    // var today = new Date();
    // document.write("<br> <br> <br> <br> <br> <h3 style=color:"+Color+">Today is: "+ today+"</h3>");

}
info();