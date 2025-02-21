const basket = document.getElementById('basket');
const object = document.getElementById('object');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Move the basket with arrow keys
document.addEventListener('keydown', (e) => {
  const basketRect = basket.getBoundingClientRect();
  if (e.key === 'ArrowLeft') {
    console.log('clicked');
    console.log(basketRect.left);
    
    basket.style.left = `${basketRect.left/10 - 10}px`;
  }
  if (e.key === 'ArrowRight') {
    console.log('clicked');
    console.log(basketRect.left);
    basket.style.left = `${basketRect.left/10 + 10}px`;
  }
});

// Check for collision and update score
object.addEventListener('animationiteration', () => {
  const basketRect = basket.getBoundingClientRect();
  const objectRect = object.getBoundingClientRect();

  if (
    objectRect.bottom >= basketRect.top &&
    objectRect.left >= basketRect.left &&
    objectRect.right <= basketRect.right
  ) {
    score++;
    scoreDisplay.textContent = score;
  }

  // Reset object position
  object.style.left = `${Math.random() * 370}px`;
});