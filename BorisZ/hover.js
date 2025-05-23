  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-0.3125rem)";
        card.style.boxShadow = "0 0.375rem 0.9375rem rgba(0,0,0,0.2)";
        card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "none";
        card.style.boxShadow = "0 0.25rem 0.625rem rgba(0,0,0,0.15)";
      });
    });
  });