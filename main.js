const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  // Your logic here, e.g., toggle the class for the menu

  navLinks.classList.toggle('active');
});

 // email integration
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect user inputs
    let templateParams = {
      name: this.querySelector('input[type="text"]').value,
      email: this.querySelector('input[type="email"]').value,
      message: this.querySelector('textarea').value,
    };

    // Send the email via EmailJS
    emailjs.send("service_69ljeut", "template_3kbz8ho", templateParams)
      .then(function (response) {
        alert("Message sent successfully!");
        console.log("Success:", response);
      }, function (error) {
        alert("Failed to send message. Please try again.");
        console.log("Error:", error);
      });

    // Reset the form
    this.reset();
  });
});
