const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
//var email = form.getElementById("email").value;
//var password = form.getElementById("password").value;
//var confirmPassword = form.getElementById("confirmPassword").value;
let form = document.querySelector('form');
form.onsubmit = () => { return false; }


let formStepsNum = 0;


nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        validate();
     //   checkEmail();
     //   checkPass();
    });
});

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
    });
});
//function checkEmail() {
//    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//    if (!email.value.match(pattern)) {
//        input.nextElementSibling.textContent = "Enter a valid email address";
//        //enter a valid email address until email valid, else show email can't be blank
//    } else if (email == "") {
//        input.nextElementSibling.textContent = "This field is empty";
//    } else {
//        input.nextElementSibling.textContent = "";
//    }
//}
//function checkPass() {
//    if (password != confirmPassword) {
//        input.nextElementSibling.textContent = "Passwords do not match";
//        return false;
//    }
//    return true;
//}
function validate() {
    const activePage = document.querySelector('.form-step-active');
    const inputgroup = activePage.getElementsByClassName('input-group');
    let inputFirst = inputgroup[0].children[1];
    let inputLast = inputgroup[1].children[1];

    if (inputFirst.value != "" && inputLast.value != "") {
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
        form.onsubmit = () => { return true; }
    }
    if (inputFirst.value == "") {
        hide(inputFirst);
    }
    if (inputLast.value == "") {
        hide(inputLast);
    }


}
function hide(input) {
    input.nextElementSibling.textContent = "This field is empty";
    setTimeout(() => {
        input.nextElementSibling.textContent = "";
    }, 2000);
}
function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
            formStep.classList.remove("form-step-active");
    });

    formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add("progress-step-active");
        } else {
            progressStep.classList.remove("progress-step-active");
        }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}