function getdata(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var title = document.getElementById("title");
    var mobile = document.getElementById("mobile");
    var addresse = document.getElementById("addresse");
    window.location.href='child.html?name='+name.value+'&email='+email.value+'&title='+title.value+'&mobile='+mobile.value+'&addresse='+addresse.value;
}
