// Add dark mode toggle functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
});

// Check local storage for dark mode preference
const isDarkMode = localStorage.getItem('dark-mode') === 'true';
if (isDarkMode) {
    body.classList.add('dark-mode');
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get form inputs
      const nameInput = contactForm.querySelector('input[type="text"]');
      const emailInput = contactForm.querySelector('input[type="email"]');
      const messageInput = contactForm.querySelector('textarea');
  
      // Get the form feedback element (to display messages)
      const feedback = document.createElement("div");
      feedback.className = "feedback";
  
      if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
        feedback.textContent = "Please fill in all fields.";
        feedback.className = "feedback error";
      } else {
        // You can send the form data to your server or handle it as needed
        feedback.textContent = "Message sent!";
        contactForm.reset(); // Clear the form
      }
  
      // Display the feedback message
      contactForm.appendChild(feedback);
  
      // Remove the feedback message after a few seconds
      setTimeout(function () {
        contactForm.removeChild(feedback);
      }, 5000);
    });

    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust the offset as needed
                    behavior: 'smooth',
                });
            }
        });
    });
});

// Additional JavaScript for animations and other functionalities
// Add fade-in animation to the about section
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
      aboutSection.classList.add('animated', 'fade-in');
  }
});
