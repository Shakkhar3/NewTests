const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuration de la base de données
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',  // Remplacez par votre mot de passe MySQL
  database: 'gestion_tournois'     // Le nom de votre base de données
});

// Connexion à la base de données
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

// Exemple de route pour obtenir tous les tournois
app.get('/api/tournois', (req, res) => {
  const sql = 'SELECT * FROM Tournoi';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des tournois');
    } else {
      res.json(results);
    }
  });
});

// Démarrer le serveur Express
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});