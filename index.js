const express = require('express');
const bodyParser= require('body-parser');
const app = express();

var liste = [
{
   "id": 0,
   "nom": "BOITEUX",
   "prenom": "Rémi",
   "javascript": "Non",
   "fav_web": "http://motogp.com/fr",
   "fav_web_why": "Le design est agréable et j’y trouve toutes les infos dont j’ai besoin",
   "fav_app": "WEC (World Endurance Championship)",
   "fav_app_why": "Pour y trouver toutes les infos quand je ne peux pas suivre les courses",
   "before_ifa": "Chef de projets SEM",
   "why_ifa": "Pour acquérir des compétences en développement et mieux comprendre les différents langages",
   "contact_mail": "boiteux.remi@gmail.com"
 },
 {
   "id": 1,
   "nom": "Dos Santos",
   "prenom": "Christophe",
   "javascript": "Pas d'expérience",
   "fav_web": "behance / themeforest",
   "fav_web_why": "",
   "fav_app": "pas d'appli",
   "fav_app_why": "",
   "before_ifa": "graphiste / webdesigner",
   "why_ifa": "Pour acquérir des compétences en développement intégration",
   "contact_mail": "contact@christopheds.com Www.christopheds.com"
 }];

// mis en route le server

app.listen(3000, function() {
  console.log('listening on 3000...')
});

// utiliser body-parser
app.use(bodyParser.urlencoded({extended: true}))

// servir l'index.html
app.get('/', function (req, res) {
	// res.send("hello ifa");
	res.sendFile(__dirname + '/index.html')
});

app.get('/liste', function (req, res) {
	// res.send("hello ifa");
	res.json(liste);
});


// créer les routes
app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!');
  var requete = req.body;
  console.log(requete);
  // console.log(requete[name]);
  res.send("ok");
});
// console.log("premiere console script de node...");