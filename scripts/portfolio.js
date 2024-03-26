function openModal(index) {
  const modal = document.getElementById('myModal');
  const modalContent = document.getElementById('modal-content');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Set modal content based on the clicked item
  const clickedItemContent = portfolioItems[index - 1].innerHTML;
  modalContent.innerHTML = customizeModalContent(clickedItemContent);
  disableScroll()
  modal.style.display = 'block';
}

function customizeModalContent(content) {
  if (content.includes("Python : JSON et Instagram")) {
    // Personnalise le contenu pour le Projet 1
    const left = '<div class="gauche"><h3>Mes compétences</h3><p>Instagram permet de télécharger nos données utilisateurs sous forme de fichier JSON ou HTML. Parmi ces données se trouve nos conversations.<br><br> J\'ai effectué un programme Python permettant trier nos messages Instagram et également un sytème de recherche de message (non disponible sur instagram)<br><br> Tous les messages sont stockés dans la mémoire, si le fichier est très volumineux le programme peut mettre un certain temps à s\'effectuer(un fichier très volumineux prend environ 15 secondes à être mis en mémoire).<br><br><button class="button" data-modal="modalOne">En savoir plus</button></p></div>';
    const right = '<div class="droite"><h3>Catégories</h3><ul><li>Info</li><li>Programmation</li></ul><h3>Notions</h3><ul><li>Python</li><li>JSON</li><li>Interface Graphique (Tkinter)</li></ul><h3>Logiciels</h3><ul><li>Visual Studio Code</li></ul></div>';
    return left+right;
    // return "";
  }
  // Ajoutez d'autres conditions pour d'autres projets si nécessaire

  // Si aucune condition ne correspond, retournez simplement le contenu original
  return content;
}



function closeModal() {
const modal = document.getElementById('myModal');
modal.style.display = 'none';
enableScroll()

}

// Close modal if user clicks outside of it
window.onclick = function (event) {
const modal = document.getElementById('myModal');
if (event.target === modal) {
  modal.style.display = 'none';
  enableScroll()

}
};

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
