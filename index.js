const formEle = document.getElementById("form");
const firstNameEle = document.getElementById("firstname");
const lastNameEle = document.getElementById("lastname");
const numberEle = document.getElementById("phonenumber");
const emailEle = document.getElementById("email");
const passwordEle = document.getElementById("password");
const passwordErrMsgEle = document.getElementById("passwordErrMsg");

firstNameEle.addEventListener("keydown", (event)=>{
    firstNameEle.value = event.target.value;
})

lastNameEle.addEventListener("keydown", (event)=>{
    lastNameEle.value = event.target.value;
})

emailEle.addEventListener("keydown", (event)=>{
    emailEle.value = event.target.value;
})

numberEle.addEventListener("keydown", (event)=>{    
    numberEle.value = event.target.value;

})

passwordEle.addEventListener("keydown", (event)=>{    
    passwordEle.value = event.target.value;

})

formEle.addEventListener("submit", (event) =>{
    event.preventDefault();
    let phoneNumber = numberEle.value;
    let email = emailEle.value;
    let lastName = lastNameEle.value;
    let firstName = firstNameEle.value;
    let password = passwordEle.value;

    if (password.length >= 8){
        let object = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password
        }
        console.log(object);
    
        object = {
            firstName: "",
            lastName:"",
            email: "",
            phoneNumber: "",
            password: ""
        }
    }else{
        passwordErrMsgEle.textContent = "Password have min 8 characters";
    }
    
})