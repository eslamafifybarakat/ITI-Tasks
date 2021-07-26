function areaCirc(){
    var radius= prompt("Enter Radius");
    var area=Math.PI*Math.pow(radius,2);
    alert("Your Area = " + area);
}

function getSquareRoot(){
    var number= prompt("Enter Number");
    var squareRoot=Math.sqrt(number,2);
    alert("Your squareRoot = " + squareRoot);
}

function angle(){
    var numAngle= prompt("Enter Angle");
    var res=Math.cos(0*numAngle/180);
    alert("Your Result = " + res);
}
areaCirc();
getSquareRoot();
angle();
