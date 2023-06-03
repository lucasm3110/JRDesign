// Smooth scrolling functionality
function scrollToSection(sectionId) {
    document.querySelector(`#${sectionId}`).scrollIntoView({
        behavior: 'smooth'
    });
}




//open web page
function openPage(element) {
    var link = element.getAttribute('data-link');
    if (link) {
        window.open(link);
    }
}

//hamburger menu
const closeButton = document.createElement('div');
closeButton.innerHTML = '&#10005;';
closeButton.classList.add('close-button');
document.querySelector('.menu').appendChild(closeButton);

closeButton.addEventListener('click', function () {
    document.getElementById('menu-toggle').checked = false;
});



document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const hamburgerMenu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            if (hamburgerMenu.contains(event.target)) {
                document.getElementById('menu-toggle').checked = false;
            }
        });
    });
});





