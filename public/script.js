let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
let eField = loginForm.querySelector('.email');
let eInput = eField.querySelector('input');
let pField = loginForm.querySelector('.password');
let pInput = pField.querySelector('input');

loginForm.onsubmit = (e) => {
    e.preventDefault(); //prevent form from submittng
    if (eInput.value == "") { //if email is empty
        eField.classList.add("shake", "error");
    } else {
        checkEmail(); //calling checkEmail function
    }
    if (pInput.value == "") { //if password is empty
        pField.classList.add("shake", "error");
    }

    setTimeout(() => { //remove shake class after 500ms
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    //work on input keyup
    eInput.onkeyup = () => {
        checkEmail(); //calling checkemail function
    }

    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern to validate email
        if (!eInput.value.match(pattern)) { //if pattern not matched with user entered value
            eField.classList.add("error");
            let errorTxt = eField.querySelector('.error-txt');
            //enter a valid email address until email valid, else show email can't be blank
            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
        } else {
            eField.classList.remove("error");
        }
    }

    pInput.onkeyup = () => {
        if (pInput.value == "") { //if pattern not matched with user entered value
            pField.classList.add("error");
        } else {
            pField.classList.remove("error");
        }
    }
    //if error class not contain in email and pass then user can enter
    if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = "home.html";
        console.log("Form submitted");
    }
}
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');

}

window.onscroll = () => {
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}