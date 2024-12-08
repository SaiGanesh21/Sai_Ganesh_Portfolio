const menuIcon=document.querySelector("#menu-icon");
const navLinks=document.querySelector('.nav-links');

menuIcon.onclick=()=>{
    navLinks.classList.toggle("active");
}


document.getElementById("submitButton").addEventListener("click", function () {
    const email = document.getElementById("emailInput").value;
    
    if (email) {
      console.log("Email recorded:", email); // Log email in the console
      alert(`Email recorded: ${email}`); // Show a confirmation alert
    } else {
      alert("Please enter a valid email.");
    }
  });