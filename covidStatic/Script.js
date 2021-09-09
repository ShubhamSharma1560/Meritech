const email=document.getElementById("email")
const password=document.getElementById("password");
const submit=document.getElementById("submit");
const validate=(e)=>{
    e.preventDefault();
    if(email.value!==""&&password.value!==""){
        if(email.value.includes("@")&&email.value.includes("."))
        {let obj={email:email.value,pasword:password.value}
        sessionStorage.setItem("Auth",JSON.stringify(obj))
        window.location.href="data.html"
    }else
        alert("Invalid Email")
    }
    else
    alert("Please fill all field")
}
submit.addEventListener("click",validate)