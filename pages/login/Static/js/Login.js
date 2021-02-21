<!--detects if user is on pc-->

const ua = detect.parse(navigator.userAgent)
const button = document.querySelector('.btn')

console.log(btn)

    if(ua.device !== null){
        button.href ="/onlineInterviews/Pages/Error/Tamplates/Error.html"
    }
<!--Finish detecting-->

//took it from :https://www.youtube.com/watch?v=QukFW1qymSA&ab_channel=iEatWebsites


<!--check if the code is one of the offered codes-->
const Code=document.getElementById('Code')
const form=document.getElementById('form')

form.addEventListener('sub')
const array=['1111', '1122', '1133', '1144', '1155'];
    if (!array.includes('string')){
            window.location.href = '../../../Error/Tamplates/Error.html';
    }
<!--Finish checking-->
