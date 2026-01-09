
# 🎓 TP GraphQL

Vous allez enrichir une API GraphQL existante sous Apollo Server.

## 🎯 Objectifs

- Lire plusieurs fichiers .gql

- Comprendre comment Apollo fusionne les schémas

- Écrire vos propres Query

- Ajouter des arguments

- Manipuler des resolvers relationnels


## 🔧 Rappel des emplacements réels dans le projet

- Schéma (.gql) : src/graphql/typeDefs/*.gql

- Resolvers : src/graphql/resolvers/*.js

- Données mock : src/data/*.js

- Serveur Apollo : server.js

## PARTIE 1 : Exercices 

###  EXERCICE 1 — Lire les données simples
A. **Récupérer tous les livres**
- Afficher id, title, year

B. **Récupérer un livre spécifique**
- Trouver le livre avec id = 3
- N'afficher que title et year

C. **Récupérer tous les auteurs**
- N'afficher que id et name

D. **Récupérer un auteur par ID**
- Affciher id, name, nationnality

E. **Récupérer tous les genres**
- Afficher uniquement label 

---

### EXERCICE 2 - Modifier l'API

1. Ajouter une query `booksByYear(year: Int!)`

Retourner la liste des livres publiés l’année donnée.

2. Ajouter une query `searchBooks(keyword: String!)`

Retourner la liste des livres dont le titre contient le mot-clé fourni (insensible à la casse).

3. Ajouter une query `authorsByNationality(nationality: String!)`

Retourner tous les auteurs correspondant à la nationalité donnée.

4. Ajouter un champ calculé dans Book : isClassic: Boolean!

Un livre est considéré comme “classic” si sa date de publication est antérieure à 1970.
Créer ce champ et le résoudre.

💡 Les fichiers à modifier sont `book.gql` et `Book.js`

---

### Bonus — Ajouter une query multi-filtres filterBooks

Créer une query capable de filtrer les livres selon un ou plusieurs des critères suivants :

- year: Int
- keyword: String
- authorId: ID

Si un paramètre n’est pas fourni, il est simplement ignoré.


## PARTIE 2 : Autorisation et middleware

### 1. Ajouter l’authentification pour une query me

- Seul un utilisateur connecté peut récupérer ses informations.

- Le token JWT est fourni dans le header Authorization.

- Si aucun utilisateur n’est connecté → retourner une erreur.


### 2. Ajouter un contrôle d’accès sur la mutation createBook

- Seuls les utilisateurs avec le rôle "ADMIN" peuvent créer un livre.

- Si l’utilisateur n’a pas le rôle requis → retourner une erreur.

### 3. Protéger certains champs dans Author ou Book

- Exemple : ajouter un champ salary ou secretNote dans Author.

- Seul un utilisateur connecté et admin peut accéder à ce champ.

### 4. Créer une directive `@auth(role: String)`

Permet d’annoter le schéma directement pour sécuriser les queries ou mutations.

La directive doit vérifier `context.user` et éventuellement `context.user.role`.