document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  const cards = Array.from(document.querySelectorAll('.appcontainer .card'));

  const filterCards = (query) => {
    const term = query.trim().toLowerCase();
    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const matches = !term || text.includes(term);
      card.classList.toggle('is-hidden', !matches);
    });
  };

  searchInput.addEventListener('input', (event) => {
    filterCards(event.target.value);
  });
});
