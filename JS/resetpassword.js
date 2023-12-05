const newpassword=document.querySelector(".newpassword");
const checkpassword=document.querySelector(".checkpassword");
const resetNewPassword=document.querySelector(".btn-resetNewPaaword");

resetNewPassword.addEventListener("click",function(){
    if(newpassword.value.trim()==""){
        alert("請正確輸入信箱")
        return;
    }else if(newpassword.value===checkpassword.value) {
        resetNewPassword();
    }
})

function resetNewPassword(){
    axios.post(`http://localhost:3000/600/users`,{ 
            "password":newpassword.value 
    })
    .then(function(response){
        console.log(response.data);
        window.location.href = "http://localhost:8080/pages/confirmation.html";
    })
    .catch(function(error){
        console.log(error.response);
        
        // alert("請重新填寫email");
    });
}