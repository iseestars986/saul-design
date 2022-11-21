const arrow = document.getElementById('#arrow');

arrow.addEventListener('click', () => {
  const height = window.innerHeight
  window.scrollTo({ top: height, behavior: 'smooth' });
});