console.log("LOGIN js loaded...");
//took it from :https://www.youtube.com/watch?v=QukFW1qymSA&ab_channel=iEatWebsites

var duration = 0;
    var page = 1;
    console.log("Starting sending loop")
setInterval(function(){
    console.log("Sending data to server")
    duration += 2;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            console.log("success insert wow")
        }
    }
    xhttp.open("get","https://finalprojectonlineinterviews.herokuapp.com/be/iris2/"+page+"/"+duration);
    xhttp.send();
},2000);