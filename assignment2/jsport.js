document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded
  document.body.classList.remove("hidden");
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#contact form');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            if (input.hasAttribute('required') && input.value.trim() === '') {
                isValid = false;
                input.style.border = '2px solid #ff6347'; // Change border color for invalid input
            } else {
                input.style.border = '1px solid #ccc'; // Reset border color for valid input
            }
        });

        return isValid;
    }
});