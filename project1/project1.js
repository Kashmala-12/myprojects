console.log("this is my ist project");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
let validUser = false;
let validEmail = false;
let validPassword = false;
let validPhone = false;
$('#failure').hide();
$('#success').hide();

name.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]{2,10}$)/;
    let str = name.value;
    if (regex.test(str)) {
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        name.classList.add('is-invalid');
        validUser = false;
    }
})

email.addEventListener('blur', () => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let str = email.value;
    if (regex.test(str)) {
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

password.addEventListener('blur', () => {
    let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    let str = password.value;
    if (regex.test(str)) {
        password.classList.remove('is-invalid');
        validPassword = true;
    }
    else {
        password.classList.add('is-invalid');
        validPassword = false;
    }
})

phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (validUser && validEmail && validPassword && validPhone) {
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        success.classList.add('show');
         $('#failure').hide();
         $('#success').show();

    }
    else {
        let failure = document.getElementById('failure');
        failure.classList.add('show');
         $('#failure').show();
         $('#success').hide();


    }




})



