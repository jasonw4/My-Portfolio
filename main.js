let prevScrollPosition = window.pageYOffset;
window.onscroll = function(){
    let currentScrollPosition = window.pageYOffset;
    if (prevScrollPosition > currentScrollPosition){
        document.getElementById("navnav").style.top = "0";
    }
    else{
        document.getElementById("navnav").style.top = "-100px";
    }
    prevScrollPosition = currentScrollPosition;
}


let burger = document.querySelector("#sidebar");
let ul = document.querySelector("nav ul");


burger.addEventListener("click", () => {
    ul.classList.toggle("show");
}); 

const navLink = document.querySelectorAll(".navlink");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);





