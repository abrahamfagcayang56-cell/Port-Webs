// highlight active nav link
window.addEventListener('load', () => {
  const links = document.querySelectorAll('a[data-link]');
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === path);
  });
});
// Open modal with clicked image
function openModal(img) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = img.src;
}

// Close modal
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
