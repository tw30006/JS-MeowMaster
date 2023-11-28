const register=document.querySelector(".register");
const login=document.querySelector(".login");

register.addEventListener("click",function(e){
    window.location.href = "http://localhost:8080/pages/signup.html";
})
login.addEventListener("click",function(e){
    window.location.href = "http://localhost:8080/pages/login.page.html";
})

let newData=[];
let token="";

const email=document.querySelector(".email");
const password=document.querySelector(".password");
const btnlogin=document.querySelector(".btn-login");

btnlogin.addEventListener("click",function(e){
    if(email.value.trim()=="" || password.value.trim()==""){
        alert("請正確輸入信箱、密碼")
        return;
    }

    function login(){
        axios.post("http://localhost:3000/login",{
            "email": email.value,
            "password":password.value
        })
        .then(function(response){
            token=response.data.accessToken;
            console.log(response.data);
            window.setTimeout(function() {
                location.href = "http://localhost:8080/pages/signupsuccess.html";
            }, 3000);
        })
        .catch(function(error){
            console.log(error.response);
            alert("登入失敗，請重新登入");
        });
    }
})