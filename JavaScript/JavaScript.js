// ========== toggle icon navbar ==========
let menuIcon = document.querySelector('#header-navbar-menu-icon');
let navbar = document.querySelector('.header-navbar');

// Toggle the menu visibility on clicking the menu icon
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // Change the icon to an 'x' when the menu is open
    navbar.classList.toggle('active');  // Show or hide the navbar
});

// ========== scroll sections active link ==========
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Handle the active link state based on scroll position
window.onscroll = () => {
    let top = window.scrollY;
    // Loop through all sections
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;  // Adjust the section's top offset
        let height = sec.offsetHeight;     // Height of the section
        let id = sec.getAttribute('id');   // Get the section ID
        // Check if the scroll position is within the section
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');  // Remove active state from all links
            });
            // Add active class to the link corresponding to the current section
            document.querySelectorAll('header nav a[href*=' + id + ']').forEach(link => {
                link.classList.add('active');
            });
        }
    });
    // ========== sticky navbar ==========
    let header = document.querySelector('header');
    // Sticky navbar effect when scrolling down
    header.classList.toggle('sticky', window.scrollY > 100);
    // ========== remove toggle icon and navbar when click navbar link (scroll) ==========
    menuIcon.classList.remove('bx-x'); // Close the menu icon
    navbar.classList.remove('active');  // Hide the navbar when a link is clicked
};

//  MULTIPLE TEXT
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .projects-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['𝓕𝓪𝓬𝓾𝓵𝓽𝔂 𝓸𝓯 𝓒𝓸𝓶𝓹𝓾𝓽𝓮𝓻 𝓢𝓬𝓲𝓮𝓷𝓬𝓮 𝓐𝓷𝓭 𝓔𝓷𝓰𝓲𝓷𝓮𝓮𝓻𝓲𝓷𝓰', '𝔽𝕀ℕ𝕂𝕀', '🅕🅒🅢🅔', '𝓘/𝓞'],
    typeSpeed: 70,
    backSpeed: 20,
    backDelay: 1000,
    loop: true
});

// SOUND
const clickSound = document.getElementById("click-sound");
const soundBtn = document.getElementById("sound-btn");

soundBtn.addEventListener("click", () => {
    if (clickSound.paused) {
        clickSound.play();
    } else {
        clickSound.pause();
        clickSound.currentTime = 0;
    }
});


// PROGRAMMING LANGUAGES DIALOG
const dialog = document.getElementById('language-dialog');
const dialogTitle = document.getElementById('dialog-title');
const dialogDescription = document.getElementById('dialog-description');
const closeButton = document.getElementById('close-dialog');

document.querySelectorAll('.read-more-button').forEach(button => {
    button.addEventListener('click', () => {
        const language = button.parentElement.querySelector('.language').textContent;
        const description = button.parentElement.querySelector('.description').textContent;

        dialogTitle.textContent = language;
        dialogDescription.textContent = description;
        dialog.showModal();
    });
});

closeButton.addEventListener('click', () => {
    dialog.close();
});


// DATA TECHNOLOGIES & ANALYSIS DROPDOWN
document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.dropdown-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const parent = toggle.parentElement;
            parent.classList.toggle('active');
        });
    });
});


// TECHNOLOGIES DIALOG
const techDialog = document.getElementById('technologies-dialog');
const techDialogTitle = document.getElementById('technologies-dialog-title');
const techDialogDescription = document.getElementById('technologies-dialog-description');
const techCloseButton = document.getElementById('technologies-close-dialog');

document.querySelectorAll('.read-more-button').forEach(button => {
    button.addEventListener('click', () => {
        // Get the <li> element that contains the button
        const li = button.closest('li');

        // Get the title from the <li> text before the button
        const title = li.firstChild.textContent.trim();

        // Get the hidden description
        const description = li.querySelector('.description').textContent.trim();

        // Set the dialog content
        techDialogTitle.textContent = title;
        techDialogDescription.textContent = description;

        // Show the dialog
        techDialog.showModal();
    });
});

techCloseButton.addEventListener('click', () => {
    techDialog.close();
});


