let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.transform = "translateY(0)";
  } else {
    if(currentScrollPos>100){
      document.getElementById("header").style.transform = "translateY(-100%)";
    }
  }
  prevScrollpos = currentScrollPos;
}



let hamburger = document.getElementById("hamburger");
let mobileMenu = document.getElementById("mobile-menu");
let close = document.getElementById("close");

hamburger.addEventListener("click", function() {
  mobileMenu.classList.add("active");
});

close.addEventListener("click", function() {
  mobileMenu.classList.remove("active");
});

document.addEventListener("click", function(event) {
  if (!mobileMenu.contains(event.target) && event.target !== hamburger) {
    mobileMenu.classList.remove("active");
  }
});
