# Projet WEB - Quarto
Cette application web développée permet à deux joueurs de jouer ensemble au jeu de société Quarto. Le jeu et les règles y sont présentés pour les joueurs ne connaissant pas le jeu. Un classement permet de voir les meilleures parties (parties gagnées avec le moins de coups possible et le plus rapidement).


## Installation

### Prérequis

Installer Node.js. Cela se fait directement via : https://nodejs.org/fr. 

Cloner le dossier git : ```git clone https://github.com/Tharathathal/WEB.git```

### Serveur de la base de données

Si besoin, installer Express, SQLite3 et Cors : ```npm install express sqlite3 cors```

### Dépendances

Si besoin, installer les dépendances : ```cd ./projet-web``` et ```npm install```, puis ```cd ../database``` et de nouveau ```npm install```


## Lancement du site Web

Pour lancer le serveur de la base de données : ```node `./database/server.js```

Pour lancer le site côté client : ```cd ./projet-web```, puis ```npm start```. Le projet est alors disponible dans un navigateur à http://localhost:3000.

## Réinitaliser la base de données

Pour réinitialiser la base de données : ```node ./database/reset.js```

Pour consulter rapidement le contenu de la base de données, accéder à  http://localhost:5000/api/games.