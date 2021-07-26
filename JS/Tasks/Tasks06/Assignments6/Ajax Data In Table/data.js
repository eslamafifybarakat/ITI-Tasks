var bodytable = document.getElementById("bodytable");
var email,first_name,last_name;
var xhr = new XMLHttpRequest();
var dataAjax = "";
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      dataAjax = xhr.responseText;
      var dataparse = JSON.parse(dataAjax);
      //console.log(dataparse.data)
      for (var property in dataparse.data) {
       email = dataparse.data[property].email;
       first_name = dataparse.data[property].first_name;
       last_name = dataparse.data[property].last_name;
       outdisplaytable(email,first_name,last_name);
      }
    }
  }
};
xhr.open("Get", "https://reqres.in/api/users", true);
xhr.send("");

function outdisplaytable(email,fn,ln){
  bodytable.innerHTML += "<td>"+email+"</td>"+
  "<td>"+fn+"</td>"+ "<td>"+ln+"</td>";
}