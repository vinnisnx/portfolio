const cards = document.querySelectorAll(".card-inner");

function flipCard() {
  this.classList.toggle("flip");
}

cards.forEach((card) => card.addEventListener("click", flipCard));

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  sendEmail();
});

function sendEmail() {
  let submitButton = document.getElementById("submit-btn");

  submitButton.value = "Sending...";
  submitButton.disabled = true;

  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_lkbtspw", "template_fnkovuc", parms).then(function() {
    window.location.href = "thank-you.html";
  }).catch(function(error) {
    window.location.href = "smth-went-wrong.html";
  });

}