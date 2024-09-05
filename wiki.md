Wiki du Projet : Plateforme d'inscription à un tournoi eSport
Table des matières

    Présentation du projet
    Objectifs
    Architecture du projet
    Technologies utilisées
    Étapes de développement
    Base de données
    Gestion de projet
    Méthodes d'estimation
    Processus de développement
    Ressources et outils

1. Présentation du projet

Le projet consiste à développer une plateforme d'inscription en ligne pour un tournoi eSport. Les participants pourront s'inscrire individuellement ou en équipe pour participer à différents tournois organisés. L'application doit permettre aux organisateurs de gérer les inscriptions, de vérifier les informations des joueurs et de communiquer avec eux tout au long du tournoi.
Caractéristiques principales :

    Inscription individuelle ou en équipe.
    Gestion des utilisateurs et des équipes.
    Système de validation des informations (email, équipe).
    Paiement en ligne pour les frais d'inscription.
    Interface pour les administrateurs permettant de visualiser les inscriptions et de gérer les tournois.

2. Objectifs

    Permettre une inscription simple et rapide pour les participants aux tournois eSport.
    Faciliter la gestion des tournois pour les administrateurs en centralisant toutes les informations des joueurs.
    Assurer la sécurité des données des utilisateurs (informations personnelles et paiements).
    Automatiser la confirmation d’inscription via email et permettre l’affectation automatique aux équipes.

3. Architecture du projet
Architecture générale :

L'application suit une architecture client-serveur avec un front-end en Angular et un back-end en Express.js, connecté à une base de données MySQL.

    Front-end (Angular) : Application web dynamique avec des formulaires d’inscription, la gestion des utilisateurs, et l’affichage des informations relatives aux tournois.
    Back-end (Express.js) : API RESTful pour la gestion des inscriptions, la validation des données, l’authentification et les paiements.
    Base de données (MySQL) : Stockage des informations sur les utilisateurs, équipes, tournois et inscriptions.

4. Technologies utilisées
Composant	Technologie	Description
Front-end	Angular	Framework front-end pour construire des interfaces dynamiques et réactives.
Back-end	Express.js	Framework minimaliste basé sur Node.js pour créer des APIs REST.
Base de données	MySQL	Système de gestion de base de données relationnelles pour stocker et gérer les données.
ORM (back-end)	Sequelize	ORM (Object Relational Mapping) pour gérer les interactions avec la base de données MySQL.
Authentification	JWT (JSON Web Tokens)	Solution d'authentification basée sur des tokens pour sécuriser l'accès à l'application.
Paiement	Stripe ou PayPal API	Intégration d'un système de paiement pour les frais d'inscription.
Gestion de projet	Trello	Outil de gestion de tâches pour organiser les sprints, les tâches et les priorités.
5. Étapes de développement
Phase 1 : Conception et planification

    Réunion initiale pour définir les besoins du client.
    Création des user stories pour chaque fonctionnalité du projet.
    Conception de l'architecture et choix des technologies.

Phase 2 : Développement

    Front-end (Angular) :
        Développement des interfaces utilisateur : formulaires d'inscription, tableau de bord pour les équipes.
        Gestion des états avec les services Angular.
    Back-end (Express.js) :
        Mise en place de l'API REST pour la gestion des utilisateurs, des équipes et des tournois.
        Intégration de l'ORM Sequelize pour la communication avec MySQL.
        Authentification JWT et gestion des sessions.

Phase 3 : Intégration de la base de données

    Création des modèles et des relations entre les tables (utilisateurs, équipes, tournois).
    Développement des requêtes SQL et des endpoints pour gérer les données d'inscription.

Phase 4 : Tests et validation

    Tests unitaires sur les composants Angular.
    Tests d'intégration pour vérifier l'interaction entre le front-end et le back-end.
    Tests de sécurité pour l'authentification et les paiements en ligne.

Phase 5 : Déploiement

    Déploiement de l'application sur une plateforme cloud (ex. Heroku, AWS).
    Mise en place d’un environnement de production sécurisé.

6. Base de données
Modèles principaux :
Utilisateur

    id (INT, PK)
    nom (VARCHAR)
    email (VARCHAR, unique)
    mot_de_passe (VARCHAR)
    date_inscription (TIMESTAMP)

Équipe

    id (INT, PK)
    nom (VARCHAR, unique)
    capitaine_id (INT, FK - Utilisateur)

Tournoi

    id (INT, PK)
    nom (VARCHAR)
    date_debut (DATE)
    date_fin (DATE)

Inscription

    id (INT, PK)
    utilisateur_id (INT, FK - Utilisateur)
    tournoi_id (INT, FK - Tournoi)
    equipe_id (INT, FK - Équipe)
    date_inscription (TIMESTAMP)

Relations

    Un utilisateur peut appartenir à plusieurs équipes.
    Un tournoi peut avoir plusieurs équipes inscrites.
    Un utilisateur peut être inscrit à plusieurs tournois.

7. Gestion de projet
Méthodologie Agile avec Trello :

    Utilisation de Trello pour organiser les sprints et les tâches.
    Les tableaux sont structurés en colonnes :
        Backlog : Toutes les tâches à faire.
        En cours : Tâches actuellement en développement.
        Tests : Tâches en phase de test.
        Terminé : Tâches terminées et validées.
    Poker planning utilisé pour estimer les tâches et définir leur complexité.

8. Méthodes d'estimation
Poker Planning :

    Chaque membre de l'équipe attribue une estimation de l'effort pour chaque tâche, généralement sur une échelle de Fibonacci (1, 2, 3, 5, 8, 13…).
    Discussion sur les divergences entre les estimations avant de s'accorder sur un chiffre final.

Points d’effort :

    Chaque tâche est associée à un certain nombre de points d’effort, permettant de planifier la charge de travail par sprint.

9. Processus de développement
1. Création des User Stories

    Rédaction des user stories pour chaque fonctionnalité du projet (ex. : "En tant qu’utilisateur, je veux pouvoir m’inscrire à un tournoi pour participer").

2. Développement en Sprints

    Le projet est découpé en sprints (cycles de développement) d’une durée de 2 à 4 semaines, avec des objectifs précis à atteindre à la fin de chaque sprint.

3. Tests continus

    Des tests unitaires et d’intégration sont exécutés régulièrement pour s’assurer de la stabilité et de la performance du projet.

10. Ressources et outils
Outils de développement :

    Visual Studio Code : IDE principal pour le développement.
    Postman : Utilisé pour tester les APIs REST.
    GitHub : Plateforme pour le versionnement du code et la collaboration.

Outils de gestion :

    Trello : Suivi des tâches et organisation des sprints.
    Slack : Communication de l’équipe.

Liens utiles :

    Documentation Angular
    Documentation Express.js
    Documentation MySQL
