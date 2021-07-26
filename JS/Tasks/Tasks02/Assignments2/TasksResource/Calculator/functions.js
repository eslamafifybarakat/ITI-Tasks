//function for displaying values
function EnterNumber(val)
{
document.getElementById("ans").value+=val;
 }
//function for evaluation
function EnterEqual()
{
let x = document.getElementById("ans").value;
let y = eval(x);
document.getElementById("ans").value = y;
}
//function for clearing the display
function clr()
{
document.getElementById("ans").value="";
}
clr();
EnterEqual();
EnterNumber(val);