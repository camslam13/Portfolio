import emailjs from 'emailjs-com';
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

  // Perform form validation
  if (name && email && message) {
    // Send form data using EmailJS
    sendEmailWithService(name, email, message);
  } else {
    alert('Please fill in all the fields.');
  }
}
function sendEmailWithService(name, email, message) {
  // Initialize EmailJS
  emailjs.init('Zaeju7Hxxhxk4eS0x');

  // Prepare email parameters
  const emailParams = {
    from_name: name,
    from_email: email,
    message: message
  };

  // Send email using EmailJS service
  emailjs.send('service_fymigef', 'template_60bvziq', emailParams, 'Zaeju7Hxxhxk4eS0x')
    .then(function(response) {
      console.log('Email sent successfully:', response.status, response.text);
      // Reset form fields
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
      alert('Message sent successfully!');
    }, function(error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    });
}
