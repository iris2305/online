
let user_data = localStorage.getItem("user_data");
if(user_data){
    user_data = JSON.parse(user_data)
}

var duration = 0;
var page = 6;
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
    xhttp.open("get","/be/"+user+"/"+session+"/"+page+"/"+duration);
    xhttp.send();
},2000);

function clickbutton(){
    let video = document.getElementById("video_src");
    if(video.ended){
        let index = window.location.pathname.replace("/video/","");
        window.location.href = "/survey/"+index;
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
  let video = document.getElementById("video_src");
  let index = window.location.pathname.replace("/video/","");
  if(index && user_data){
    index = parseInt(index);
    let video_url = user_data["videos"][index]
    video.src = video_url;
    video.reload();
  }

});

function startvideo(){
    let video = document.getElementById("video_src");
    if(video.paused){
        video.play();
        video.onended = ()=> {
            console.log("ended");
            document.getElementById("next_btn").classList.remove('disabled');
        }
    }else{
        video.pause();
    }
}