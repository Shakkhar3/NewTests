const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Serveur en cours d\'exécution !');
});

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
