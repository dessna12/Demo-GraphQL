
# 🎓 TP GraphQL

## 🔧 Rappel des emplacements réels dans ton projet

Schéma (.gql) : src/graphql/typeDefs/*.gql

Resolvers : src/graphql/resolvers/*.js

Données mock : src/data/*.js

Serveur Apollo : server.js

## 🧪 EXERCICE 1 — Lire les données simples
A. Récupérer tous les livres
- Afficher id, title, year

B. Récupérer un livre spécifique
- Trouver le livre avec id = 3
- N'afficher que title et year

C. Récupérer tous les auteurs
- N'afficher que id et name

D. Récupérer un auteur par ID
- Affciher id, name, nationnality

E. Récupérer tous les genres
- Afficher uniquement label 


## 🧪 EXERCICE 2 - Modifier l'API

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


### ✨ BONUS — Ajouter une query multi-filtres filterBooks

Créer une query capable de filtrer les livres selon un ou plusieurs des critères suivants :

- year: Int
- keyword: String
- authorId: ID

Si un paramètre n’est pas fourni, il est simplement ignoré.