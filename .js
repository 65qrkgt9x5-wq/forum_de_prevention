
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

  // 1. Définir la date cible (Année, Mois-1, Jour, Heure, Minute)
// Attention : Les mois commencent à 0 en JS (Janvier = 0, Décembre = 11)
// Exemple ici : 31 Décembre 2025 à minuit
const dateCible = new Date(2025, 11, 2, 13, 0, 0).getTime();

// 2. Fonction qui met à jour le compte à rebours
function mettreAJourCompteur() {
    const maintenant = new Date().getTime();
    const distance = dateCible - maintenant;

    const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
    const heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((distance % (1000 * 60)) / 1000);

    // Si le compte à rebours est fini
    if (distance < 0) {
        document.getElementById("jours").innerText = 0;
        document.getElementById("heures").innerText = 0;
        document.getElementById("minutes").innerText = 0;
        document.getElementById("secondes").innerText = 0;
        const blocMagnum = document.querySelector('.lienmagnum');
        blocMagnum.classList.remove('bloque');
    }

    

    if (distance >= 0) {
        
    document.getElementById("jours").innerText = jours;
    document.getElementById("heures").innerText = heures;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("secondes").innerText = secondes;
        
    }
}

// 3. Lancer la fonction immédiatement, puis toutes les 1 secondes (1000ms)
setInterval(mettreAJourCompteur, 1000);
mettreAJourCompteur(); // Pour éviter le délai d'une seconde au chargement