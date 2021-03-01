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
//setInterval(function(){
//    console.log("Sending data to server")
//    duration += 2;
//    sessionStorage.setItem("page_"+page,duration.toString());
//
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function (){
//        if(this.readyState == 4 && this.status == 200){
//            console.log("success insert wow")
//        }
//    }
//
//    xhttp.open("get","/be/"+user+"/"+session+"/"+page+"/"+duration);
//    xhttp.send();
//},2000);

function login(){
    let value = document.getElementById("user_code_input").value.trim();
    if(value.length === 5){
        let data = {
            code: value,
        }
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function (){
            if(this.readyState == 4 && this.status == 200){
                let res = JSON.parse(this.responseText);
                if(res["videos"].length > 0){ // is ok
                    window.location.href = "/termsofuse"
                }
            }
        }

        xhttp.open("post","/be/enter-user");
        xhttp.setRequestHeader('Content-Type','application/json');
        xhttp.send(JSON.stringify(data));
    }else{
        var errorDiv = document.getElementById("login-error");
        errorDiv.style.display = "block"
    }
}
//
// let data = {
//     session: session,
//     user_code: user_code,
//     page: page,
//     duration: duration,
//     answers:[]
// };
// for(let i=0;i<3;i++){
//     let answer = {
//         user_code: "1234",
//         question_num: i,
//         answer: document.getElementById("input_"+i).target.value
//     }
//     data["answers"].push(answer);
// }