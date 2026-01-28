const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

elements.forEach(el => observer.observe(el));


https://script.google.com/macros/s/AKfycbzVQSLsnU3rGUFjwyAD0D7BJImQ1mC2BGYD_7m2IaFWMNL7HtVQc5j9asLiTBGg-Utr4A/exec


const form = document.querySelector("form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    name: form.querySelector('[name="name"]').value,
    email: form.querySelector('[name="email"]').value,
    company_size: form.querySelector('[name="company_size"]').value,
    message: form.querySelector('[name="message"]').value
  };

  const response = await fetch("https://script.google.com/macros/s/AKfycbzVQSLsnU3rGUFjwyAD0D7BJImQ1mC2BGYD_7m2IaFWMNL7HtVQc5j9asLiTBGg-Utr4A/exec
", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (response.ok) {
    alert("Thank you! We’ll get back to you soon.");
    form.reset();
  } else {
    alert("Something went wrong. Please try again.");
  }
});
