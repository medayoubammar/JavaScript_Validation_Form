// * const form = document.getElementById('form');
// ? const form = document.getElementsByClassName('form');
// ! const form = document.getElementsByName('');
// * const form = document.querySelector('');
// ? const form = document.querySelectorAll('');
// ! const form = document.parentElement('');
// * const form = document.childNodes('');

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const message = document.getElementById('message');

let etas = false;
form.addEventListener('submit' , (e) => {
    e.preventDefault();
    checkInputs();
    if(etas){
        message.innerText = "Account created successfully";
        setTimeout(()=>{message.innerText = ""},3000);
        form.reset();
    }
})

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setErrorFor(username,'Username is empty');
        etas = false;
    
    }
    else {
        setSuccessFor(username);
        etas = true
    }
     if( !isEmail(emailValue)){
        setErrorFor(email,'Invalid Email');
        etas = false;
    }
    else {
        setSuccessFor(email);
        etas = true
    }

    if(passwordValue === ''){
        setErrorFor(password,'Password is empty');
        etas = false;
    }else{
        setSuccessFor(password);
        etas = true
    }
    if(password2Value === ''){
        setErrorFor(password2, 'Password 2 cannot be empty');
        etas = false;
    }else if (passwordValue !== password2Value){
        setErrorFor(password2,'Password not matching');
        etas = false;
    }
    else{
        setSuccessFor(password);
        setSuccessFor(password2);
        etas = true
    }

}


function setSuccessFor(input){
const formControl = input.parentElement;
formControl.className = 'form-control success';
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

function isEmail(myemail){
    return  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(myemail);
}

