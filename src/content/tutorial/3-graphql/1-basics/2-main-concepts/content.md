---
type: lesson
title: Les Concepts Clés de GraphQL
editor: true
focus: /schema.graphql
terminal: false
previews: false
---

### Les Concepts Clés de GraphQL

#### **Objectifs de l'Étape :**
- Comprendre les principaux concepts de GraphQL, y compris le schéma, les types, les queries, et les mutations.
- Apprendre à définir et structurer un schéma GraphQL.
- Savoir comment interagir avec un serveur GraphQL en utilisant des queries et des mutations.

---

#### **1. Le Schéma GraphQL**

Le schéma est le cœur d'une API GraphQL. Il définit la structure des données disponibles pour les clients et spécifie comment les données peuvent être interrogées ou modifiées. Un schéma GraphQL est constitué de types, de queries, et de mutations.

**Principaux éléments du schéma :**
- **Types** : Ils définissent la structure des objets de données que vous pouvez interroger via l'API.
- **Queries** : Elles représentent les opérations de lecture. Elles permettent aux clients de demander des données.
- **Mutations** : Elles représentent les opérations d'écriture. Elles permettent aux clients de créer, modifier ou supprimer des données.

**Exemple de schéma de base :**
```graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}

type Query {
  users: [User!]!
  user(id: ID!): User
  posts: [Post!]!
  post(id: ID!): Post
}

type Mutation {
  createUser(name: String!, email: String!): User!
  updateUser(id: ID!, name: String, email: String): User
  deleteUser(id: ID!): Boolean!
}
```

**Explication :**
- **Types `User` et `Post`** : Ils définissent la structure des utilisateurs et des articles. Par exemple, un `User` a un `id`, un `name`, un `email`, et une liste de `posts`.
- **Query `users` et `user`** : Ces queries permettent de récupérer une liste d'utilisateurs ou un utilisateur spécifique en fonction de son `id`.
- **Mutations `createUser`, `updateUser`, `deleteUser`** : Elles permettent de créer, mettre à jour, ou supprimer un utilisateur.

---

#### **2. Les Types dans GraphQL**

Les types sont au centre de GraphQL. Chaque champ d'une query ou d'une mutation doit avoir un type défini dans le schéma.

**Types scalaires :** GraphQL dispose de types de base intégrés appelés scalaires, tels que :
- **`Int`** : Nombre entier.
- **`Float`** : Nombre à virgule flottante.
- **`String`** : Chaîne de caractères.
- **`Boolean`** : Valeur booléenne (`true` ou `false`).
- **`ID`** : Identifiant unique souvent utilisé pour les clés primaires.

**Types d'objet :** Ce sont des types définis par l'utilisateur qui représentent des objets de données, comme `User` et `Post` dans l'exemple précédent.

**Types de liste :** GraphQL permet de définir des champs qui renvoient des listes d'objets ou de scalaires en utilisant la syntaxe `[Type!]!`. Par exemple, `[Post!]!` indique une liste non nulle d'objets `Post` non nuls.

**Non-nullabilité :** En ajoutant un `!` après un type, vous indiquez que ce champ est obligatoire. Par exemple, `String!` signifie que le champ ne peut pas être `null`.

---

#### **3. Les Queries dans GraphQL**

Les queries sont utilisées pour lire ou récupérer des données. Elles sont l'équivalent des requêtes `GET` dans les API REST.

**Exemple de query :**
```graphql
{
  users {
    id
    name
    email
  }
}
```

**Explication :**
- Cette query demande une liste d'utilisateurs avec leurs `id`, `name`, et `email`. Vous pouvez sélectionner les champs que vous voulez, ce qui donne au client un contrôle granulaire sur les données reçues.

**Query avec arguments :**
```graphql
{
  user(id: "1") {
    id
    name
    email
    posts {
      title
      content
    }
  }
}
```

**Explication :**
- Ici, la query `user` prend un argument `id` pour récupérer un utilisateur spécifique, ainsi que ses articles associés.

**Fragments :**
Les fragments sont des morceaux réutilisables de requêtes qui vous permettent d'éviter la répétition de code.

**Exemple avec fragment :**
```graphql
{
  users {
    ...UserFields
  }
}

fragment UserFields on User {
  id
  name
  email
}
```

**Explication :**
- Le fragment `UserFields` définit un ensemble de champs qui peuvent être réutilisés dans plusieurs queries.

---

#### **4. Les Mutations dans GraphQL**

Les mutations sont utilisées pour créer, mettre à jour, ou supprimer des données. Elles sont l'équivalent des requêtes `POST`, `PUT`, ou `DELETE` dans les API REST.

**Exemple de mutation :**
```graphql
mutation {
  createUser(name: "Alice", email: "alice@example.com") {
    id
    name
    email
  }
}
```

**Explication :**
- Cette mutation `createUser` crée un nouvel utilisateur avec un `name` et un `email` spécifiés, puis retourne les données de l'utilisateur nouvellement créé.

**Mutation avec mise à jour :**
```graphql
mutation {
  updateUser(id: "1", name: "Alice Updated") {
    id
    name
    email
  }
}
```

**Explication :**
- Cette mutation met à jour le nom de l'utilisateur avec l'`id` 1 et renvoie les informations mises à jour.

**Gestion des retours :**
- Les mutations peuvent retourner les objets affectés ou d'autres informations pertinentes, comme dans les exemples ci-dessus. Cela permet au client de recevoir immédiatement les données modifiées ou d'autres détails suite à l'opération.

---

#### **5. Conclusion : L'Essence de GraphQL**

GraphQL offre une approche puissante et flexible pour interagir avec les données. En définissant un schéma bien structuré, vous pouvez offrir une API riche et évolutive qui permet aux clients de récupérer exactement les données dont ils ont besoin. Les concepts de types, de queries, et de mutations constituent les fondations sur lesquelles repose toute API GraphQL.

> **Exercice :** Dans le playground, créez un schéma GraphQL simple avec un type `Book` contenant des champs `id`, `title`, et `author`. Définissez une query `books` pour récupérer une liste de livres, et une mutation `createBook` pour ajouter un nouveau livre.