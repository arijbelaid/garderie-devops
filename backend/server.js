const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 1. Informations générales
app.get('/api/garderie', (req, res) => {
  res.json({
    nom: "Ma Garderie",
    description: "Un environnement sûr et chaleureux pour vos enfants.",
    adresse: "123 Rue de l'Enfance, Tunis",
    telephone: "+216 71 000 000"
  });
});

// 2. Liste des services
app.get('/api/services', (req, res) => {
  res.json([
    { id: 1, icon: "👶", title: "Crèche", description: "Accueil des tout-petits de 3 mois à 3 ans." },
    { id: 2, icon: "🎨", title: "Activités Créatives", description: "Peinture, dessin et travaux manuels." },
    { id: 3, icon: "🎵", title: "Éveil Musical", description: "Chansons et découverte des instruments." }
  ]);
});

// 3. Liste des activités
app.get('/api/activites', (req, res) => {
  res.json([
    { id: 1, nom: "Sortie au parc", date: "2024-06-15" },
    { id: 2, nom: "Atelier pâtisserie", date: "2024-06-20" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
