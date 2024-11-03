function validate(e){
    e.preventDefault()
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    const age=document.getElementById("age").value
    const message=document.getElementById("message")
    let bn = " ";
if (email===""){
    bn="Email address is not filled";
    message.style.color="red";
}else if (password===""){
    bn="Password should be atleast 8 charecters";
    message.style.color="red";
}else if (age===""){
    bn="Age is required";
    message.style.color="red";
}
else {
    bn="Login Successful";
    message.style.color="green";
}
message.innerHTML=bn
}
