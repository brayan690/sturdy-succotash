document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Merci pour votre message, nous vous contacterons bientôt !');
  this.reset();
});
