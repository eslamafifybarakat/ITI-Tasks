var showproperty = document.getElementById("band");

var option;
var xhr = new XMLHttpRequest();
var dataAjax = "";
var url="";
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      dataAjax = xhr.responseText;
      var dataparse = JSON.parse(dataAjax);
      for (var property in dataparse) {
        var i = Object.keys(dataparse).indexOf(property);
        option = document.createElement("option");
        option.value = property;
        option.text = property;
        showproperty.appendChild(option);
        showproperty.onchange = function(){
            getnamefrompro(dataparse[this.value]);
        }
      }
    }
  }
};
xhr.open("Get", "rockbands.json", true);
xhr.send("");

function getnamefrompro(desc){
    var shownames = document.getElementById("artist");
    if(shownames.options.length < 4){
        for (var names in desc) {
            shownames.innerHTML += "<option value="+desc[names].value+">"+desc[names].name+"</option>";
            url = desc[names].value;
        
        }
    } 
    else{
        shownames.innerHTML="";
    }    
}
function openpage(url){
    window.location.href=url;
}