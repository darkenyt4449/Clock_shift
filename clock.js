function updateClock() {
  const now = new Date();
  const h = now.getHours().toString().padStart(2, '0'); // e.g., "12"
  const m = now.getMinutes().toString().padStart(2, '0'); // e.g., "30"
  const s = now.getSeconds().toString().padStart(2, '0'); // e.g., "45"

  // Extract digits
  const digits = [
    parseInt(h[0]), // hour tens
    parseInt(h[1]), // hour units
    parseInt(m[0]), // minute tens
    parseInt(m[1]), // minute units
    parseInt(s[0]), // second tens
    parseInt(s[1]), // second units
  ];

  const digitHeight = 50; // Must match .numbers span height in CSS

  // Select all scrolling containers in order
  const movingContainers = [
    document.querySelector('.hourline1'),
    document.querySelector('.hourline2'),
    document.querySelector('.minuteline1'),
    document.querySelector('.minuteline2'),
    document.querySelector('.secondline1'),
    document.querySelector('.secondline2'),
  ];

  movingContainers.forEach((container, i) => {
    const digit = digits[i];
    const offset = -digit * digitHeight;
    container.style.transform = `translateY(${offset}px)`;
    container.style.transition = 'transform 0.5s ease-out';
  });
}

setInterval(updateClock, 1000);
updateClock();