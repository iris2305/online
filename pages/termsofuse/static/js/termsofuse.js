var duration = 0;
var page = 3;
var user =sessionStorage.getItem("user_code");
session = sessionStorage.getItem("user_session");
if(!session){
    session = uuidv4()
    sessionStorage.setItem("user_session",session)
}else{
    if(sessionStorage.getItem("page_"+page)){
        duration = parseInt(sessionStorage.getItem("page_"+page));
        console.log("starting with duration ",duration)
    }
}


console.log("Starting sending loop")
setInterval(function(){
    console.log("Sending data to server")
    duration += 2;
    sessionStorage.setItem("page_"+page,duration.toString());

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            console.log("success insert wow")
        }
    }
    xhttp.open("get","https://finalprojectonlineinterviews.herokuapp.com/be/"+user+"/"+session+"/"+page+"/"+duration);
    xhttp.send();
},2000);


var checked = false;

function onCheckboxClick(){
    checked = !checked;
    if(checked){
        document.getElementById("terms_continue_btn").classList.remove("disabled");
    }else{
        document.getElementById("terms_continue_btn").classList.add("disabled");
    }
}

function buttonclick() {
    window.location.href = "/solution/pre/0"

}