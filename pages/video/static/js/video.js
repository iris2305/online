
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

var videoplayer;

document.addEventListener("DOMContentLoaded", function(event) {
  let video = document.getElementById("video_src");
  let index = window.location.pathname.replace("/video/","");

  videoplayer = video;

    videoplayer.onloadstart = ()=>{

        videoplayer.addEventListener('timeupdate', function() {
          if (!videoplayer.seeking) {
                supposedCurrentTime = video.currentTime;
          }
        });
        // prevent user from seeking
        videoplayer.addEventListener('seeking', function() {
          // guard agains infinite recursion:
          // user seeks, seeking is fired, currentTime is modified, seeking is fired, current time is modified, ....
          var delta = videoplayer.currentTime - supposedCurrentTime;
          if (Math.abs(delta) > 0.01) {
            console.log("Seeking is disabled");
            videoplayer.currentTime = supposedCurrentTime;
          }
        });
        // delete the following event handler if rewind is not required
        videoplayer.addEventListener('ended', function() {
          // reset state in order to allow for rewind
            supposedCurrentTime = 0;
        });

        videoplayer.onended = ()=>{
            document.getElementById("next_btn").classList.remove('disabled');
        }
    }
  if(index && user_data){
    index = parseInt(index);
    let video_url = user_data["videos"][index]
    video.src = video_url;
    video.reload();
  }

});

var supposedCurrentTime = 0;
