

let videos = { //put task according to type video-> 1:task 1, 2: task 2, 3: task 3
    'https://vimeo.com/532573512': 1,
    'https://vimeo.com/532574271': 1,
    'https://vimeo.com/532574432': 1,
    'https://vimeo.com/532574822': 2,
    'https://vimeo.com/532574785': 2,
    'https://vimeo.com/532575228': 2,
    'https://vimeo.com/532575320': 3,
    'https://vimeo.com/532575408': 3,
    'https://vimeo.com/532575533': 3,
    'https://vimeo.com/532575736': 1,
    'https://vimeo.com/532575827': 1,
    'https://vimeo.com/532575933': 1,
    'https://vimeo.com/532576078': 2,
    'https://vimeo.com/532576165': 2,
    'https://vimeo.com/532576293': 2,
    'https://vimeo.com/532576488': 3,
    'https://vimeo.com/532576588': 3,
    'https://vimeo.com/532576701': 3,
    'https://vimeo.com/532576983': 1,
    'https://vimeo.com/532577082': 1,
    'https://vimeo.com/532577344': 1,
    'https://vimeo.com/532577703': 2,
    'https://vimeo.com/532577624': 2,
    'https://vimeo.com/532577946': 2,
    'https://vimeo.com/532578012': 3,
    'https://vimeo.com/532578111': 3,
    'https://vimeo.com/532578312': 3
    //27 videos of 3 tasks
}
debugger


let index = window.location.pathname.replace("/solution/pre/","");
console.log("index",index);
index = parseInt(index);
let user_data = JSON.parse(localStorage.getItem("user_data"));
let video_url = user_data["videos"][index];
let solution = videos[video_url];

window.location.href = "/solution/" + index + "/" + solution;