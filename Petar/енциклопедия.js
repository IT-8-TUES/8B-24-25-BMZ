function enableCardHoverEffect() {
  const infoCards = document.querySelectorAll('.card');

  infoCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.1)'; 
      card.style.transition = 'transform 0.3s ease-in-out'; 
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)'; 
      card.style.zIndex = '10'; 
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)'; 
      card.style.boxShadow = 'none'; 
      card.style.zIndex = 'auto'; 
    });
  });
}

document.addEventListener('DOMContentLoaded', enableCardHoverEffect);