

let videos = {
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4': 1,
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4': 2,
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4': 3

}
debugger

let index = window.location.pathname.replace("/solution/pre/","");
index = parseInt(index);
let user_data = JSON.parse(localStorage.getItem("user_data"));
let video_url = user_data["videos"][index];
let solution = videos[video_url];

window.location.href = "/solution/" + index + "/" + solution;
