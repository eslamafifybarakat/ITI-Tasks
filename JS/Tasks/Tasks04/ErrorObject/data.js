var na;
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
  function check(){
    try{
      na = getCookie("username");
      if (na != "") {
        alert("Welcome again " + username);
       } else{
         throw new EvalError('the value of cookie is empty');
       }
    }catch(e){
      if (e instanceof EvalError) {
        console.error(e.message);
    }
  }
  finally{
    console.log('done');
  }
}
check();
