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

let etat = false ;


form.addEventListener('submit' , (e) => {
    e.preventDefault();
    checkInputs();
    if(etat){
        message.innerText = 'Account Created Successfully !' ;
        setTimeout(()=>{message.innerText=""},3000);
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
        etat = false ;
    }
    else {
        setSuccessFor(username);
        etat = true ;
    }
     if( !isEmail(emailValue)){
        setErrorFor(email,'Invalid Email');
        etat = false ;
    }
    else {
        setSuccessFor(email);
        etat = true ;
    }

    if(passwordValue === ''){
        setErrorFor(password,'Password is empty');
        etat = false ;
    }else{
        setSuccessFor(password);
        etat = true ;
    }
    if(password2Value === ''){
        setErrorFor(password2, 'Password 2 cannot be empty');
        etat = false ;
    }else if (passwordValue !== password2Value){
        setErrorFor(password2,'Password not matching');
        etat = false ;
    }
    else{
        setSuccessFor(password);
        setSuccessFor(password2);
        etat = true ;
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

