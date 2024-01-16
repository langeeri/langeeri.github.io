
// main.js

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("blogModal");
    var closeSpan = document.getElementsByClassName("close")[0];
  
    // Function to open the modal
    function openModal() {
        modal.style.display = "block";
    }
  
    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }
  
    // Attach event listeners to all elements that should open the modal
    var modalTriggers = document.querySelectorAll(".header-links a[href='#Blog'], .hero-card a[href='#Blog']");
    modalTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', openModal);
    });
  
    // Close the modal when the user clicks on <span> (x)
    closeSpan.onclick = closeModal;
  
    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    };
  
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
  });