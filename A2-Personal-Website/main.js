// for hamburgur menu

function toggleMenu() { // toggle = switch
    const menu = document.querySelector(".menu-links"); //targetting an element (menu) and using a built in javascript function on it
    const icon = document.querySelector(".ham-icon");
    menu.classList.toggle("open"); // whenever we click on that element, it adds or removes the open class in that element, and that open class has some specific styling
    icon.classList.toggle("open");
  }

// for contact form

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us! We will get back to you as soon as possible.');
        this.reset();
    });
});