# IUT Project - R6A.05

## Description
Ce projet a été développé dans le cadre du module R6A.05 à l'IUT. Il s'agit d'une application web backend construite avec Hapi.js, utilisant une architecture moderne et des pratiques de développement avancées.

## Structure du Projet
```
├── lib/                # Contient la logique métier principale
├── server/            # Configuration et démarrage du serveur
├── test/              # Tests unitaires et d'intégration
├── .env               # Variables d'environnement
├── knexfile.js        # Configuration de la base de données
└── package.json       # Dépendances et scripts
```

## Prérequis
- Node.js (v12 ou supérieur)
- MySQL
- npm ou yarn

## Technologies Principales
- **@hapi/hapi**: Framework web pour Node.js
- **@hapipal/schwifty**: ORM pour la gestion de base de données
- **Knex.js**: Query builder SQL
- **MySQL**: Base de données
- **Nodemailer**: Pour l'envoi d'emails
- **JWT**: Authentification via tokens

## Installation
1. Clonez le repository
```bash
git clone https://github.com/SofianSmd/R6A.05.git
cd R6A.05
```

2. Installez les dépendances
```bash
npm install
```

3. Configurez les variables d'environnement
```bash
cp .env.example .env
# Modifiez le fichier .env avec vos configurations
```

## Scripts Disponibles
```bash
# Démarrer le serveur
npm start

# Exécuter les tests
npm test

# Vérifier le style du code
npm run lint
```

## Utilisation
1. Assurez-vous que votre base de données MySQL est en cours d'exécution
2. Démarrez le serveur avec `npm start`
3. L'API sera disponible à l'adresse `http://localhost:3000`

## Documentation API
La documentation Swagger de l'API est disponible à l'adresse `http://localhost:3000/documentation` lorsque le serveur est en cours d'exécution.

## Auteur
- Sofian SMIMID

## Licence
Ce projet est sous licence ISC
