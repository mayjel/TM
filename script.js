document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Perform form validation
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // If form is valid, you can proceed with form submission or other actions
    // For demonstration purposes, let's log the form data
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Password: ", password);
  
    // You can also submit the form programmatically if needed
    // document.getElementById("signup-form").submit();
  });
  