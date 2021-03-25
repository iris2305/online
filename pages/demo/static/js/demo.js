
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

function buttonclick(){
    // take input of user into variable
    question1 = document.forms.q1.question1.value;
    question2 = document.forms.q2.question2.value;
    question3 = document.forms.q3.question3.value;
    question4 = document.forms.q4.question4.value;
    question5 = document.forms.q5.question5.value;
    question6 = document.forms.q6.question6.value;
    question7 = document.forms.q7.question7.value;
    question8 = document.forms.q8.question8.value;
    question9 = document.forms.q9.question9.value;

    function buttonclick() {
        if (question3 && question4 && question5 && question6 && question7 && question8 && question9) { //check that user answered all questions
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    debugger
                    window.location.href = "/thanks"
                }
            }
            document.getElementById("demo_btn").style.pointerEvents = "all";

            let user_code = localStorage.getItem("user_code");
            let data = {
                user_code: user_code,
                question1: question1,
                question2: question2,
                question3: question3,
                question4: question4,
                question5: question5,
                question6: question6,
                question7: question7,
                question8: question8,
                question9: question9,
            }

            //take input into database
            xhttp.open("post", "/be/demo");
            xhttp.setRequestHeader('Content-Type', 'application/json');
            xhttp.send(JSON.stringify(data));
            xhttp.send();

            document.getElementById("button").style.pointerEvents = "none"; //display button
        } else {
        }
    }
}

