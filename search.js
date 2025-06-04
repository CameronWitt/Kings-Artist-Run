// search.js
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const artworks = document.querySelectorAll('.artwork-item');
  const noResultsMessage = document.getElementById('noResultsMessage');

  if (!searchInput) return;

  searchInput.addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    let visibleCount = 0;

    artworks.forEach(artwork => {
      const artist = artwork.querySelector('.artist-name')?.textContent.toLowerCase() || '';
      const piece = artwork.querySelector('.piece-name')?.textContent.toLowerCase() || '';

      if (artist.includes(filter) || piece.includes(filter)) {
        artwork.style.display = '';
        visibleCount++;
      } else {
        artwork.style.display = 'none';
      }
    });

    if (noResultsMessage) {
      noResultsMessage.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  });
});
