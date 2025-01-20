// JavaScript for Interactivity (if needed)

// Example: Simple console log when a feature card is clicked
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('click', () => {
    console.log(`Feature clicked: ${card.querySelector('h3').innerText}`);
  });
});
