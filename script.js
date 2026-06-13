const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
".card,.skill-card,.project-card,.step"
).forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(5,5,5,.9)";

        navbar.style.backdropFilter =
        "blur(20px)";

    }else{

        navbar.style.background =
        "rgba(255,255,255,.05)";

    }

});

