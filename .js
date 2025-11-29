
  // On sélectionne le header
  const header = document.querySelector('header');

  // On écoute l'événement "scroll" de la fenêtre
  window.addEventListener('scroll', () => {
    
    // Si on a scrollé de plus de 50px vers le bas
    if (window.scrollY > 50) {
      header.classList.add('scrolled'); // On ajoute la classe CSS
    } else {
      header.classList.remove('scrolled'); // Sinon on l'enlève (retour à la normale)
    }
    
  });
