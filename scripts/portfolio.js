function openModal(index) {
  const modal = document.getElementById('myModal');
  const modalContent = document.getElementById('modal-content');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Set modal content based on the clicked item
  const clickedItemContent = portfolioItems[index - 1].innerHTML;
  modalContent.innerHTML = customizeModalContent(clickedItemContent);

  modal.style.display = 'block';
}

function customizeModalContent(content) {
  if (content.includes("Projet 1")) {
    // Personnalise le contenu pour le Projet 1
    return "<p>Ceci est un test</p>";
  }
  // Ajoutez d'autres conditions pour d'autres projets si nécessaire

  // Si aucune condition ne correspond, retournez simplement le contenu original
  return content;
}



function closeModal() {
const modal = document.getElementById('myModal');
modal.style.display = 'none';
}

// Close modal if user clicks outside of it
window.onclick = function (event) {
const modal = document.getElementById('myModal');
if (event.target === modal) {
  modal.style.display = 'none';
}
};
