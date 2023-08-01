setTimeout(() => {
    var typed = new Typed(".multiple-text", {
        strings: ["MCA Student.", "Developement Lover.", "Future Java Developer.", "Problem Solver."],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    })
}, 4000);

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close the navbar when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 767) { // Check if the screen width is smaller or equal to 767px (mobile screen)
            navbar.classList.remove('active'); // Close the navbar on mobile screens
        }
    });
});






