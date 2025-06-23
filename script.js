document.getElementById("search-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const depart = document.getElementById("ville-depart").value.trim();
  const arrivee = document.getElementById("ville-arrivee").value.trim();
  const date = document.getElementById("date-trajet").value;

  if (depart && arrivee && date) {
    // Simule une redirection avec des paramètres de recherche (à remplacer par un vrai backend)
    window.location.href = `covoiturages.html?depart=${encodeURIComponent(depart)}&arrivee=${encodeURIComponent(arrivee)}&date=${encodeURIComponent(date)}`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const formConnexion = document.getElementById("formConnexion");
  if (formConnexion) {
    formConnexion.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      const utilisateur = JSON.parse(localStorage.getItem("utilisateur"));

      const messageEl = document.getElementById("message");

      if (utilisateur && utilisateur.email === email && utilisateur.password === password) {
        localStorage.setItem("connecte", "true");
        window.location.href = "index.html";
      } else {
        messageEl.textContent = "Identifiants incorrects.";
      }
    });
  }
});
