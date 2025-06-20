// Exemple de données statiques pour les tests
const covoiturages = [
    {
        pseudo: "Alex",
        photo: "https://via.placeholder.com/80",
        note: 4.8,
        places: 2,
        prix: 15,
        date: "2025-06-21",
        heureDepart: "08:00",
        heureArrivee: "10:30",
        electrique: true
    },
    {
        pseudo: "Marie",
        photo: "https://via.placeholder.com/80",
        note: 4.5,
        places: 0, // Non affiché
        prix: 10,
        date: "2025-06-21",
        heureDepart: "09:00",
        heureArrivee: "11:00",
        electrique: false
    }
];

document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const results = document.getElementById('results');
    results.innerHTML = '';

    const filtered = covoiturages.filter(trajet => trajet.date === date && trajet.places > 0);

    if (filtered.length === 0) {
        const alternative = covoiturages.find(t => t.places > 0);
        if (alternative) {
            results.innerHTML = `<p>Aucun trajet à cette date. Prochain disponible : ${alternative.date}</p>`;
        } else {
            results.innerHTML = `<p>Aucun covoiturage disponible actuellement.</p>`;
        }
        return;
    }

    filtered.forEach(trajet => {
        const card = document.createElement('div');
        card.className = `col-md-6 card p-3 ${trajet.electrique ? 'eco' : ''}`;
        card.innerHTML = `
            <div class="d-flex align-items-center mb-2">
                <img src="${trajet.photo}" class="rounded-circle me-3" width="60" height="60">
                <div>
                    <strong>${trajet.pseudo}</strong><br>
                    Note : ${trajet.note}/5
                </div>
            </div>
            <p><strong>Places restantes :</strong> ${trajet.places}</p>
            <p><strong>Prix :</strong> ${trajet.prix}€</p>
            <p><strong>Départ :</strong> ${trajet.date} à ${trajet.heureDepart}</p>
            <p><strong>Arrivée :</strong> ${trajet.heureArrivee}</p>
            <p><strong>${trajet.electrique ? 'Voyage écologique 🚗⚡' : 'Voyage non écologique'}</strong></p>
            <button class="btn btn-outline-success">Détail</button>
        `;
        results.appendChild(card);
    });
});
