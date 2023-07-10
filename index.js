let cartShown = false;
console.log("script incarcat");
const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");
const teachBtn = document.getElementById("teach");
const businessBtn = document.getElementById("business");
const cartImg = document.getElementById("cart");
const btnPython = document.getElementById("btn-python");
const logo = document.getElementById("logo");
const tryUdemyBusiness = document.getElementById("product-try-udemy-business-btn");


loginBtn.addEventListener("click", redirectLogin);
signupBtn.addEventListener("click", redirectSignup);
teachBtn.addEventListener("click", redirectTeach);
businessBtn.addEventListener("click", redirectBusiness);
cartImg.addEventListener("click", toggleCart);
btnPython.addEventListener("click", mainpageColor);
logo.addEventListener("click", redirectHome)
tryUdemyBusiness.addEventListener("click", redirectBusiness);



function mainpageColor(x)
{

  elements = document.getElementsByClassName("mainpage-products-btn");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "#6a6f73";
    }
    document.getElementById(x).style.color = "black";

    switch(x) {
        case 'btn-python':
          document.querySelectorAll(".excel, .webdev, .javascript, .datascience, .aws, .drawing").forEach(a => a.style.display = "none");
          document.querySelectorAll(".python").forEach(a => a.style.display = "block");
          break;
        case 'btn-excel':
            document.querySelectorAll(".python, .webdev, .javascript, .datascience, .aws, .drawing").forEach(a => a.style.display = "none");
            document.querySelectorAll(".excel").forEach(a => a.style.display = "block");
          break;

        case 'btn-webdev':
            document.querySelectorAll(".python, .excel, .javascript, .datascience, .aws, .drawing").forEach(a => a.style.display = "none");
            document.querySelectorAll(".webdev").forEach(a => a.style.display = "block");
            break;

        case 'btn-javascript':
            document.querySelectorAll(".python, .webdev, .excel, .datascience, .aws, .drawing").forEach(a => a.style.display = "none");
            document.querySelectorAll(".javascript").forEach(a => a.style.display = "block");
            break;

        case 'btn-datascience':
            document.querySelectorAll(".python, .webdev, .javascript, .excel, .aws, .drawing").forEach(a => a.style.display = "none");
            document.querySelectorAll(".datascience").forEach(a => a.style.display = "block");
            break;

        case 'btn-aws':
            document.querySelectorAll(".python, .webdev, .javascript, .datascience, .excel, .drawing").forEach(a => a.style.display = "none");
            document.querySelectorAll(".aws").forEach(a => a.style.display = "block");
            break;

        case 'btn-drawing':
            document.querySelectorAll(".python, .webdev, .javascript, .datascience, .aws, .excel").forEach(a => a.style.display = "none");
            document.querySelectorAll(".drawing").forEach(a => a.style.display = "block");
            break;
        default:
            document.querySelectorAll(".excel, .webdev, .javascript, .datascience, .aws, .drawing").forEach(a => a.style.display = "none");
            document.querySelectorAll(".python").forEach(a => a.style.display = "block");
      } 

}

function beginSelector(x){
    switch (x) {
        case 'plan':
            document.querySelector("#begin-curriculum").style.color = "black";
            document.querySelector(".begin-curriculum-content").style.display = "flex";
            document.querySelectorAll(".begin-video-content, .begin-launch-content").forEach(a => a.style.display = "none");
            document.querySelectorAll("#begin-record, #begin-launch").forEach(b => b.style.color = "gray");
            break;
        case 'record':
            document.querySelector("#begin-record").style.color = "black";
            document.querySelector(".begin-video-content").style.display = "flex";
            document.querySelectorAll(".begin-curriculum-content, .begin-launch-content").forEach(a => a.style.display = "none");
            document.querySelectorAll("#begin-curriculum, #begin-launch").forEach(a => a.style.color = "gray");
            break;
        case 'launch':
            document.querySelector("#begin-launch").style.color = "black";
            document.querySelector(".begin-launch-content").style.display = "flex";
            document.querySelectorAll(".begin-curriculum-content, .begin-video-content").forEach(a => a.style.display = "none");
            document.querySelectorAll("#begin-curriculum, #begin-record").forEach(a => a.style.color = "gray");
            break;

        default:
            document.querySelector("#begin-curriculum").style.color = "black";
            document.querySelector(".begin-curriculum-content").style.display = "flex";
            document.querySelectorAll(".begin-video-content, .begin-launch-content").forEach(a => a.style.display = "none");
            document.querySelectorAll("#begin-record, #begin-launch").forEach(b => b.style.color = "gray");
            break;
    }
}


function redirectHome() {
    location.href= "schimbare-radicala.html"
}

function redirectLogin() {
    location.href="login.html"
}

function redirectSignup() {
    location.href = "signup.html";
}

function redirectTeach() {
    location.href = "teach.html     ";
}

function redirectBusiness() {
    location.href = "business.html";
}

function toggleCart() {
    if (cartShown) {
        console.log("1");
        cartShown = false;
        document.querySelector(".shopping-cart-content").style.display = "none";
        return;
        
    }
    if (!cartShown) {
        cartShown = true;
        document.querySelector(".shopping-cart-content").style.display = "block";
        console.log("2");
        return;
        }

}





