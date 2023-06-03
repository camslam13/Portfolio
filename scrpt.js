// script.js

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

for (const link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();

  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
  });
}

// Form submission handling
const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  // Collect form data
  const nameInput = document.querySelector('input[type="text"]');
  const emailInput = document.querySelector('input[type="email"]');
  const messageInput = document.querySelector('textarea');

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Perform form validation and submission
  if (name && email && message) {
    // Perform form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form fields
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    alert('Message sent successfully!');
  } else {
    alert('Please fill in all the fields.');
  }
}
