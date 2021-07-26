var usname;
var age;
var gender = document.getElementById('gender').value;
var color = document.getElementById('favcolor');
var btn = document.getElementById('btn');

var selected = color.options[color.selectedIndex].value;


function getvalue1(val){
    usname = document.getElementById('usname').value=val;
    
}
function getvalue2(val){
    age = document.getElementById('age').value=val;
}
btn.onclick = function(){
    setCookiefromform();
}
function setCookiefromform(){
    document.cookie = "username="+usname+";expires=Thu, 18 Dec 2021;";
    document.cookie = "age="+age+";expires=Thu, 18 Dec 2021;";
    document.cookie = "gender="+gender+";expires=Thu, 18 Dec 2021;";
    document.cookie = "selected="+selected+";expires=Thu, 18 Dec 2021;";
    window.location.href='welcome.html?name='+usname+'&age='+age+'&gender='+gender+'&color='+selected;

}
function deletecookie(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "age=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "gender=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "selected=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
     alert("repeate again " + username);
    } 
  }
