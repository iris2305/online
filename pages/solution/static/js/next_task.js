

let videos = { //put task according to type video-> 1:task 1, 2: task 2, 3: task 3
    'https://vimeo.com/521943675': 1,
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4': 2,
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4': 3,
    //27 videos of 3 tasks
}
debugger

let index = window.location.pathname.replace("/solution/pre/","");
index = parseInt(index);
let user_data = JSON.parse(localStorage.getItem("user_data"));
let video_url = user_data["videos"][index];
let solution = videos[video_url];

window.location.href = "/solution/" + index + "/" + solution;
