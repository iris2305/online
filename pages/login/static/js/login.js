console.log("LOGIN js loaded...");
//took it from :https://www.youtube.com/watch?v=QukFW1qymSA&ab_channel=iEatWebsites

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

var duration = 0;
var page = 1;

session = sessionStorage.getItem("user_session");
if(!session){
    session = uuidv4()
    sessionStorage.setItem("user_session",session)
}else{
    if(sessionStorage.getItem("page_"+page)){
        duration = sessionStorage.getItem("page_"+page);
    }
}


    console.log("Starting sending loop")
setInterval(function(){
    console.log("Sending data to server")
    duration += 2;
    sessionStorage.setItem("page_"+page,duration);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            console.log("success insert wow")
        }
    }
    xhttp.open("get","https://finalprojectonlineinterviews.herokuapp.com/be/iris2/"+session+"/"+page+"/"+duration);
    xhttp.send();
},2000);