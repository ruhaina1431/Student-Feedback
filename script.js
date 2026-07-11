const domain =
"https://us-east-2m3rtjey3f.auth.us-east-2.amazoncognito.com";


const clientId =
"7e8neoogaajq8bdou052dqetd1";


const redirectUri = "https://ruhaina1431.github.io/Student-Feedback/";



document
.getElementById("loginBtn")
.onclick=function(){


const url =

`${domain}/oauth2/authorize?`+
`client_id=${clientId}`+
`&response_type=code`+
`&scope=openid+email+phone`+
`&redirect_uri=${encodeURIComponent(redirectUri)}`;
console.log(url);

window.location.href=url;


};





window.onload=function(){


const params =
new URLSearchParams(
window.location.search
);


const code =
params.get("code");


if(code){

window.location.href="feedback.html";

}


};
