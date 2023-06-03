// Smooth scrolling functionality
function scrollToSection(sectionId) {
    document.querySelector(`#${sectionId}`).scrollIntoView({
        behavior: 'smooth'
    });
}


// Image Slide Show
var slides = document.getElementsByClassName("slide");
var slideIndex = 0;

function showSlide() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlide, 5000); // Change slide every 2 seconds
}

showSlide();




