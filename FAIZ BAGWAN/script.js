document.addEventListener("mousemove",function(dets){
gsap.to(".ball",{
    left:dets.x,
    top:dets.y
})
})
function loadinganimation() {
    gsap.from(".home-content h1,.text-animate h3", {
      y: 100,
      opacity: 0,
      delay: 0.2,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from(".home-content p,.home-content .btn-box,.home-sci", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });

  }
  loadinganimation();


  function education() {
    var a = document.querySelector(".education");
    // var b = document.querySelector("#play");
    a.addEventListener("mouseover", function () {
        gsap.from(".gh", {
            x: -100,
            opacity: 0,
            delay: 1.3,
            duration: 0.5,
          });
        gsap.from(".gp", {
            x: 100,
            opacity: 0,
            delay: 1.3,
            duration: 0.5,
          });
    });
  }
  education();



// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle ('bx-x');
    navbar.classList.toggle ('active');
}
// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        }
    });

    // sticky Headers
    let header = document.querySelector("header");

    header.classList.toggle('sticky', window.scrollY > 100);
}