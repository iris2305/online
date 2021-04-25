
var duration = 0;
var page = 5;
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
    let index = window.location.pathname.replace("/survey/","");
    index = parseInt(index);
    // take input of user into variable
    question1 = document.forms.questiongroup1.question1.value;
    question2 = document.forms.questiongroup2.question2.value;
    question3 = document.forms.questiongroup3.question3.value;
    question4 = document.forms.questiongroup4.question4.value;
    question5 = document.forms.questiongroup5.question5.value;
    question6 = document.forms.questiongroup6.question6.value;

    if(question1&&question2&&question3){ //check that user answered all questions
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function (){
            if(this.readyState == 4 && this.status == 200){
                debugger
                let user_data = JSON.parse(localStorage.getItem("user_data"));
                if(user_data["videos"].length -1 == index)  //if u find this is the last video go to end
                    window.location.href = "/demo"
                else
                    window.location.href = "/solution/pre/" +(index +1) ; //if not- go to next task

                document.getElementById("survey_btn").style.pointerEvents = "all";
            }
        }
        let user_code = localStorage.getItem("user_code");
        let data = {
            user_code: user_code,
            video_index: index,
            question1: question1,
            question2: question2,
            question3: question3,
            question4: question4,
            question5: question5,
            question6: question6
        }

        //take input into database
        xhttp.open("post","/be/feedback");
        xhttp.setRequestHeader('Content-Type','application/json');
        xhttp.send(JSON.stringify(data));
        xhttp.send();

        document.getElementById("survey_btn").style.pointerEvents = "none"; //display button
    }
    else{
    }
}