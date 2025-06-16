  const cursorSmall = document.querySelector('.cursor-small');
  const cursorLarge = document.querySelector('.cursor-large');
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursorLarge.classList.add('mouse-enter');
  });

  link.addEventListener('mouseleave', () => {
    cursorLarge.classList.remove('mouse-enter');
  });
});


  let mouseX = 0, mouseY = 0;
  let largeX = 0, largeY = 0;

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Small circle follows instantly
    cursorSmall.style.left = `${mouseX}px`;
    cursorSmall.style.top = `${mouseY}px`;
  });

  // Animate large circle with delay
  function animate() {
    // Lerp (smooth step toward mouse position)
    largeX += (mouseX - largeX) * 1;
    largeY += (mouseY - largeY) * 1;

    cursorLarge.style.left = `${largeX}px`;
    cursorLarge.style.top = `${largeY}px`;

    requestAnimationFrame(animate);
  }

  animate();

  