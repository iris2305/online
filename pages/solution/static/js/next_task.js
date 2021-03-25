

let videos = { //put task according to type video-> 1:task 1, 2: task 2, 3: task 3
    '/static/images/A1A.mp4': 1,
    '/static/images/A1B.mp4': 1,
    '/static/images/A1C.mp4': 1,
    '/static/images/A2A.mp4': 2,
    '/static/images/A2B.mp4': 2,
    '/static/images/A2C.mp4': 2,
    '/static/images/A3A.mp4': 3,
    '/static/images/A3B.mp4': 3,
    '/static/images/A3C.mp4': 3,
    '/static/images/I1A.mp4': 1,
    '/static/images/I1B.mp4': 1,
    '/static/images/I1C.mp4': 1,
    '/static/images/I2A.mp4': 2,
    '/static/images/I2B.mp4': 2,
    '/static/images/I2C.mp4': 2,
    '/static/images/I3A.mp4': 3,
    '/static/images/I3B.mp4': 3,
    '/static/images/I3C.mp4': 3,
    '/static/images/T1A.mp4': 1,
    '/static/images/T1B.mp4': 1,
    '/static/images/T1C.mp4': 1,
    '/static/images/T2A.mp4': 2,
    '/static/images/T2B.mp4': 2,
    '/static/images/T2C.mp4': 2,
    '/static/images/T3A.mp4': 3,
    '/static/images/T3B.mp4': 3,
    '/static/images/T3C.mp4': 3
    //27 videos of 3 tasks
}
debugger

let index = window.location.pathname.replace("/solution/pre/","");
index = parseInt(index);
let user_data = JSON.parse(localStorage.getItem("user_data"));
let video_url = user_data["videos"][index];
let solution = videos[video_url];

window.location.href = "/solution/" + index + "/" + solution;