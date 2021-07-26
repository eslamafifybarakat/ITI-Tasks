var tablebody = document.getElementById('tablebody');
async function getpromise (){
    var data;
     var prom1 = await new Promise(function(success,failure){
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "std.json")
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        data = xhr.response;
                        datajson = JSON.parse(data)
                        console.log(datajson)
                        datajson.forEach(element => {
                             tablebody.innerHTML += `<tr><td>${element.id}</td><td>${element.nm}</td><td>${element.joinDate}</td></tr>`
                        });
                       
                        success(xhr.response);
                    }else {
                        failure("Error")}
                }
            }
            xhr.send('')
    })
    return prom1;
}
var res = getpromise();
console.log(res)

