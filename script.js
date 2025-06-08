document.addEventListener('click', function (e) {
  const symbol = document.createElement('div');
  symbol.className = 'medical-symbol';
  symbol.style.left = `${e.clientX}px`;
  symbol.style.top = `${e.clientY}px`;
  document.body.appendChild(symbol);

  setTimeout(() => {
    symbol.remove();
  }, 600);
});
