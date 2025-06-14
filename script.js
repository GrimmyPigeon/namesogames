const waveText = document.getElementById('wave-text');
const text = waveText.textContent;
waveText.textContent = '';

for(let i = 0; i < text.length; i++){
  const span = document.createElement('span');
  span.textContent = text[i];
  span.style.animationDelay = `${i * 0.1}s`;
  waveText.appendChild(span);
}