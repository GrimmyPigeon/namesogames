const waveText = document.getElementById('wave-text');
const text = waveText.textContent;
waveText.textContent = '';

const spans = [];

for (let i = 0; i < text.length; i++) {
  const span = document.createElement('span');
  span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
  span.style.animationDelay = `${i * 0.2}s`;

  waveText.appendChild(span);
  spans.push({ el: span, lastVisible: false });
  moveRandomly(span);
}

function moveRandomly(el) {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
}

function animate() {
  for (const s of spans) {
    const opacity = parseFloat(getComputedStyle(s.el).opacity);
    const isVisible = opacity > 0.05;

    if (!isVisible && s.lastVisible) {
      moveRandomly(s.el);
    }

    s.lastVisible = isVisible;
  }

  requestAnimationFrame(animate);
}

animate();
