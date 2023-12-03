
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
function downloadResume() {
    // Change the URL to your resume file path
    var resumeUrl = 'VikasChourasiya_InternshalaResume.pdf';
    var link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Vikas_Chourasiya_Resume.pdf';
    link.click();
}
function toggleTheme() {
    const body = document.body;
    const sunIcon = document.querySelector('.toggle-mode .fa-sun');
    const moonIcon = document.querySelector('.toggle-mode .fa-moon');
  
    body.classList.toggle('dark-theme'); // Toggle the dark-theme class on the body
  
    // Toggle the visibility of sun and moon icons based on the theme
    if (body.classList.contains('dark-theme')) {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }
  
// Event listener for toggling menu visibility when the bars icon is clicked
document.getElementById("bars-icon").addEventListener("click", function() {
    toggleMenu();
});

// Sample JavaScript for handling form submission

// Function to validate and submit the contact form
function submitForm() {
    // Add form validation logic here
    
    // For example, you can access form elements by their IDs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform form validation checks

    // Assuming the form is valid, you might submit it via AJAX or handle it according to your backend setup
    // This is a basic example of submitting the form (not using AJAX)
    alert("Form submitted!\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);
}

// Event listener for form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    submitForm(); // Call the submitForm function for handling form submission
});
