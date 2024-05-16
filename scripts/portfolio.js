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
    const title = content;
    const left = '<div class="gauche"><h3>Le projet</h3><p>Instagram permet de télécharger nos données utilisateurs sous forme de fichier JSON ou HTML. Parmi ces données se trouve nos conversations.<br><br> J\'ai effectué un programme Python permettant trier nos messages Instagram et également un sytème de recherche de message (non disponible sur instagram)<br><br> Tous les messages sont stockés dans la mémoire, si le fichier est très volumineux le programme peut mettre un certain temps à s\'effectuer(un fichier très volumineux prend environ 15 secondes à être mis en mémoire).</p><h3>Compétences acquises</h3><p>Pour ce faire j\'ai du étudier la forme du fichier JSON afin de le retranscrire en dictionnaire lisible sur python. Afin d\'ensuite le manipuler comme je veux.</p><p>Téléchargement et captures d\'écran du code pas encore disponnibles</p></div>';
    const right = '<div class="droite"><h3>Catégories</h3><ul><li>Info</li><li>Programmation</li></ul><h3>Notions</h3><ul><li>Python</li><li>JSON</li><li>Interface Graphique (Tkinter)</li></ul><h3>Logiciels</h3><ul><li>Visual Studio Code</li></ul></div>';
    return title+left+right;
  } 
  else if (content.includes("Site Web sur")){
    const title = content;
    const left = '<div class="gauche"><p>Lors de notre première année de BUT en Réseaux et Télécommunications nous avons dû développer un site internet sur une passion commune avec un camarade de classe (<a href="https://cedric.home.tabary.net/">Cédric Tabary</a>). Notre passion commune étant l\'Esport nous avons fait un site sur cette discipline, présentant nos équipes et nos jeux esport préférés.</p><h3>Mes compétences</h3><p>Partant de quasiment zero avec mon camarade, nous avions dû apprendre le langage HTML et CSS de nous même. Vu que le thème du site était notre passion, les recherches sur les langages étaient prioritaires.<br>Ce site avait pour but d\'être responsive pour ordinateur et mobile.</p><p><a href="https://xkayato.github.io/Site-Esport" target="_blank">Site web</a><br><br></p><a href="https://xkayato.github.io/Site-Esport" target="_blank"><img src="img/portfolio/Esport/esport.png" alt="Image esport site"></a></div>';
    const right = '<div class="droite"><h3>Catégories</h3><ul><li>Info</li><li>Programmation</li></ul><h3>Notions</h3><ul><li>HTML</li><li>CSS</li></ul><h3>Logiciels</h3><ul><li>Visual Studio Code</li></ul></div>';
    return title+left+right;
  }
  else if (content.includes("Checklist")){
    const title = content;
    const left = '<div class="gauche"><p>Lors de notre première année de BUT en Réseaux et Télécommunications, en groupe de quatre nous avions dû concevoir un projet de A à Z. Partant de l\'idée à la réalisation de ce projet.</p><p>Ce projet consistait à développer un site web dynamique de gestion de bonne pratique.</p><p>Ce projet m\'a permit d\'apprendre à travailler en équipe, l\'organisation (en utilisant des outils professionels tel que des RACI, diagramme de Gant, analyse de risque) et le développement de site web dynamique à l\'aide de php et sql. Ce site web devait être hébergé sur un raspberry, que nous avions dû configurer nous même pour en assurer le fonctionnement.</p></div>';
    const right = '<div class="droite"><h3>Catégories</h3><ul><li>Gestion de projet</li><li>Info</li><li>Programmation</li></ul><h3>Notions</h3><ul><li>HTML</li><li>CSS</li><li>PHP</li><li>SQL</li></ul><h3>Logiciels</h3><ul><li>Visual Studio Code</li><li>DB Brower for SQLite</li><li>Excel</li></ul></div>';


    return title+left+right;
  }else if (content.includes("Interview d'un professionel")){
    const title = content;

    const left = "<div class='gauche'><h3>Explication</h3><p>Avec un camarade, lors de notre première année en BUT nous avions dû préparer une interview d'un professionel dans le milieu des réseaux et télécommunications. Avec notre camarade nous avions choisi un ingénieur en cybersécurité et plus précisément un pentester et chercheur de solution en cybersécurité chez Amadeus.</p><h3>Compétences</h3><p>Cette préparation d'interview nous a permis d'apprendre à parler à un professionnel, se renseigner sur son métier, choisir de bonnes questions et mettre en place un rendez-vous.</p><h3>Le métier</h3><p>Suite à cette interview, j'en ai plus appris sur le métier de pentester, un métier qui m'interesse de plus en plus. Le professionnel nous à donné son parcours et j'aimerais bien faire un parcours qui y ressemble.</p></div>";
    const right = '<div class="droite"><h3>Catégories</h3><ul><li>Interview</li><li>Communication</li></ul><h3>Notions</h3><ul><li>Recherches</li></div>';

    return title+left+right;
  }

  const left = "<div class='gauche'></p></div>";
  const right = "<div class='droite'><h3>Catégories</h3><ul><li>Gestion de projet</li><li>Info</li><li>Programmation</li></ul><h3>Notions</h3><ul><li>HTML</li><li>CSS</li><li>PHP</li><li>SQL</li></ul><h3>Logiciels</h3><ul><li>Visual Studio Code</li><li>DB Brower for SQLite</li><li>Excel</li></ul></div>";

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
