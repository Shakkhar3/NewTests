# **Wiki du Projet : Plateforme d'inscription au tournoir Lyon eSport**

## **Table des matières**
1. [Présentation du projet](#présentation-du-projet)
2. [Objectifs](#objectifs)
3. [Architecture du projet](#architecture-du-projet)
4. [Technologies utilisées](#technologies-utilisées)
5. [Étapes de développement](#étapes-de-développement)
6. [Base de données](#base-de-données)
7. [Gestion de projet](#gestion-de-projet)
8. [Méthodes d'estimation](#méthodes-destimation)
9. [Processus de développement](#processus-de-développement)
10. [Ressources et outils](#ressources-et-outils)

---

## **1. Présentation du projet**

Le projet consiste à développer une plateforme d'inscription en ligne pour un tournoi eSport. Les participants pourront s'inscrire individuellement ou en équipe pour participer à différents tournois organisés. L'application doit permettre aux organisateurs de gérer les inscriptions, de vérifier les informations des joueurs et de communiquer avec eux tout au long du tournoi.

### **Caractéristiques principales :**
- Inscription individuelle ou en équipe.
- Gestion des utilisateurs et des équipes.
- Système de validation des informations (email, équipe).
- Paiement en ligne pour les frais d'inscription.
- Interface pour les administrateurs permettant de visualiser les inscriptions et de gérer les tournois.

---

## **2. Objectifs**

- **Permettre une inscription simple et rapide** pour les participants aux tournois eSport.
- **Faciliter la gestion des tournois** pour les administrateurs en centralisant toutes les informations des joueurs.
- **Assurer la sécurité des données** des utilisateurs (informations personnelles et paiements).
- **Automatiser la confirmation d’inscription** via email et permettre l’affectation automatique aux équipes.

---

## **3. Architecture du projet**

### **Architecture générale :**

L'application suit une architecture **client-serveur** avec un front-end en **Angular** et un back-end en **Express.js**, connecté à une base de données **MySQL**.

- **Front-end (Angular)** : Application web dynamique avec des formulaires d’inscription, la gestion des utilisateurs, et l’affichage des informations relatives aux tournois.
- **Back-end (Express.js)** : API RESTful pour la gestion des inscriptions, la validation des données, l’authentification et les paiements.
- **Base de données (MySQL)** : Stockage des informations sur les utilisateurs, équipes, tournois et inscriptions.

---

## **4. Technologies utilisées**

| Composant               | Technologie                    | Description                                                                                   |
|-------------------------|--------------------------------|-----------------------------------------------------------------------------------------------|
| **Front-end**           | Angular                        | Framework front-end pour construire des interfaces dynamiques et réactives.                   |
| **Back-end**            | Express.js                     | Framework minimaliste basé sur Node.js pour créer des APIs REST.                              |
| **Base de données**     | MySQL                          | Système de gestion de base de données relationnelles pour stocker et gérer les données.       |
| **Gestion de projet**   | Trello                         | Outil de gestion de tâches pour organiser les sprints, les tâches et les priorités.           |

---

## **5. Étapes de développement**

### **Phase 1 : Conception et planification**
- Réunion initiale pour définir les besoins du client.
- Création des **user stories** pour chaque fonctionnalité du projet.
- Conception de l'architecture et choix des technologies.

### **Phase 2 : Développement**
- **Front-end (Angular)** :
   - Développement des interfaces utilisateur : formulaires d'inscription, tableau de bord pour les équipes.
   - Gestion des états avec les services Angular.
  
- **Back-end (Express.js)** :
   - Mise en place de l'API REST pour la gestion des utilisateurs, des équipes et des tournois.
   - Intégration de l'ORM Sequelize pour la communication avec MySQL.
   - Authentification JWT et gestion des sessions.

### **Phase 3 : Intégration de la base de données**
- Création des modèles et des relations entre les tables (utilisateurs, équipes, tournois).
- Développement des requêtes SQL et des endpoints pour gérer les données d'inscription.

### **Phase 4 : Tests et validation**
- **Tests unitaires** sur les composants Angular.
- **Tests d'intégration** pour vérifier l'interaction entre le front-end et le back-end.
- **Tests fonctionnel** pour vérifier si le fonctionnement constaté est identique à ce qui est attendu.
- **Tests de bout en bout** pour tester l'ensemble du logiciel pour les dépendances.

### **Phase 5 : Déploiement**
- Déploiement de l'application sur une plateforme cloud.
- Mise en place d’un environnement de production sécurisé.

---

## **6. Base de données**

### **Modèles principaux :**

#### **Joueur**
- `id_joueur` (INT, PK)
- 'id_equipe' (INT)
- `nom` (VARCHAR)
- `prénom` (VARCHAR)
- `pseudo` (VARCHAR)
- `date_naissance` (TIMESTAMP)

#### **Inscription Équipe**
- `id_equipe` (INT, PK)
- `nom_equipe` (VARCHAR, unique)
- `id_tournoi` (INT)

#### **Tournoi**
- `id_tournoi` (INT, PK)
- `nom_tournoi` (VARCHAR)

#### **Inscription Solo**
- `id_joueur` (INT)
- `pseudo' (VARCHAR)
- 'id_tournoi' (INT)

### **Relations**
- Un **joueur** peut être un capitaine.
- Un **tournoi** peut avoir plusieurs équipes inscrites.
- Un **tournoi** peut avoir plusieurs joueur solo inscrit.
- Une **équipe** a un capitaine.
- Une **équipe** peut avoir plusieurs joueurs.

---

## **7. Gestion de projet**

### **Méthodologie Agile avec Trello :**
- Utilisation de **Trello** pour organiser les sprints et les tâches.
- Les tableaux sont structurés en colonnes :
   - **Backlog** : Toutes les tâches à faire.
   - **En cours** : Tâches actuellement en développement.
   - **Tests** : Tâches en phase de test.
   - **Terminé** : Tâches terminées et validées.
   
- **Poker planning** utilisé pour estimer les tâches et définir leur complexité.

---

## **8. Méthodes d'estimation**

### **Poker Planning**
Le **Poker Planning** est une technique utilisée dans les équipes agiles pour estimer le temps ou la complexité d’une tâche. Voici comment l'appliquer dans ce projet :

1. **Sélection d'une tâche** : L'équipe choisit une tâche à estimer (ex: développer l'interface d'inscription).
2. **Discussion** : Tous les membres discutent brièvement de la tâche pour s'assurer qu'ils comprennent bien ce qui est requis.
3. **Estimation individuelle** : Chaque membre de l'équipe choisit une carte avec un chiffre représentant son estimation de la complexité ou du temps requis pour réaliser la tâche.
4. **Révélation des estimations** : Toutes les cartes sont révélées simultanément.
5. **Discussion des écarts** : Si les estimations varient fortement, l'équipe discute des raisons et tente d'arriver à un consensus.
6. **Nouvelle estimation** : Un second tour d'estimation a lieu si nécessaire.

Cette méthode favorise la discussion et aide à obtenir une estimation collective plus précise.

---

## **9. Processus de développement**

### **Étapes générales du développement :**
1. Création des branches Git pour chaque fonctionnalité.
2. Développement selon les **user stories**.
3. **Pull requests** et revues de code pour valider les contributions.
4. Intégration et tests continus avec des outils comme **Jenkins** ou **GitLab CI**.
5. Tests manuels et automatisés avant le déploiement.

---

## **10. Ressources et outils**

### **Outils utilisés :**
- **Trello** : Gestion des tâches et organisation des sprints.
- **ScrumPokerOnline** : Réalisation d'un poker planning.
- **GitHub/GitLab** : Versionnage du code, gestion des pull requests.
- **Visual Studio Code** : IDE principal pour le développement Angular et Node.js.
- **Discord** : Communication d'équipe et gestion des réunions quotidiennes.

---
