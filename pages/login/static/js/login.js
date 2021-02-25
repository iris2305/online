console.log("LOGIN js loaded...");
//took it from :https://www.youtube.com/watch?v=QukFW1qymSA&ab_channel=iEatWebsites


<!--check if the code is one of the offered codes-->
const Code=document.getElementById('Code')
const form=document.getElementById('form')

form.addEventListener('sub')
const array=['1111', '1122', '1133', '1144', '1155'];
    if (!array.includes('string')){
            window.location.href = '../../../error/Tamplates/error.html';
    }
<!--Finish checking-->
var duration = 0;
    var page = 1;
    console.log("Starting sending loop")
setInterval(function(){
    console.log("Sending data to server")
    duration += 2;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            console.log("success insert wow")
        }
    }
    xhttp.open("get","https://finalprojectonlineinterviews.herokuapp.com/be/iris2/"+page+"/"+duration);
    xhttp.send();
},2000);