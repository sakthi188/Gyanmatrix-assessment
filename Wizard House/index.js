function validateForm()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var emailReg=/^[a-zA-Z0-9.!#$&'*&+=/?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email == ""){
        alert("Email field must be filled out");
        return false;
    }
    if(!email.match(emailReg)){
        alert("Please enter a valid email address");
    }
    if(password == ""){
        alert("Password field must be filled out");
        return false;
    }
    if(password.length<8)
    {
        alert("Please enter valid password");
        return false;
    }
    return true;
}