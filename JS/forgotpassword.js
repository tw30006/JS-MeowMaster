const email=document.querySelector(".email");
const btnresetPassowrd=document.querySelector(".btn-resetPassowrd");

btnresetPassowrd.addEventListener("click",function(e){
    e.preventDefault();
    if(email.value.trim()==""){
        alert("請正確輸入信箱")
        return;
    }else {
        forgetpassword();
    }
});

function forgetpassword(){
    axios.post(`http://localhost:3000/users`,{
                "email": email.value,
                "accessToken":localStorage.token
    })
    .then(function(response){
        console.log(response.data);
        window.location.href = "confirmation.html";
    })
    .catch(function(error){
        console.log(error.response);
        alert("請重新填寫email");
    });
}