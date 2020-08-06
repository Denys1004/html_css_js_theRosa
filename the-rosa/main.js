// Burger Menu
const selectElement = function(element){
    return document.querySelector(element);
}
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
})

// Animation on scroll

window.sr = ScrollReveal(); // we can access scroll reveal by referring as sr
sr.reveal('.animate-left', {
    origin: 'left',         // origin means where this animation coming from 
    duration: 1000,         // duration in milliseconds
    distance: '25rem',      // means how far this traveling
    delay: 300              // means how long should it take before animation is triggered, in milliseconds
})
sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
})

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
})

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
})

