document.getElementById('whatsappBtn').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;

  if (!name || !email || !service || !date) {
    alert('Please fill in all fields');
    return;
  }

  const message = `Hello! My name is ${name}. I would like to book a ${service} appointment on ${date}. My email is ${email}.`;
  const whatsappUrl = `https://wa.me/27123456789?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
});
