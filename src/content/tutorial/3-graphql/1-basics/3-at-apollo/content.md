---
type: lesson
title: Decorateur Apollo
editor: false
terminal: false
previews: false
---

### Decorateur Apollo

### Utilisation du Décorateur `@Apollo` en TypeScript

#### **Objectifs de l'Étape :**
- Comprendre le fonctionnement du décorateur `@Apollo` développé en TypeScript.
- Découvrir comment configurer le décorateur pour différents cas d'utilisation.

---

#### **1. Introduction au Décorateur `@Apollo`**

Le décorateur `@Apollo` est conçu pour simplifier l'intégration des requêtes Apollo GraphQL dans les composants Vue.js. Il permet d'exécuter automatiquement une requête lorsque la valeur d'un attribut change, en mettant à jour dynamiquement l'état du composant avec les résultats de la requête.

**Pourquoi utiliser `@Apollo` ?**
- **Automatisation** : Il automatise l'exécution des requêtes Apollo en réponse aux changements d'attributs, éliminant le besoin de gérer manuellement ces opérations.
- **Flexibilité** : Il permet de configurer la manière dont les résultats de la requête sont traités et intégrés dans le composant.
- **Modularité** : En encapsulant la logique d'exécution des requêtes dans un décorateur, le code devient plus propre et plus maintenable.

---

#### **2. Utilisation de Base du Décorateur `@Apollo`**

Voyons maintenant comment utiliser ce décorateur dans un composant Vue.js en utilisant Class-Components.

**Exemple 1 : Requête Apollo Basique**

```typescript
<template>
  <div>
    <h1>Liste des Utilisateurs</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import gql from 'graphql-tag';
import { Apollo } from '@/decorators'; // Importer le décorateur

@Component
export default class UserList extends Vue {
  // Déclaration de l'attribut qui sera mis à jour par Apollo
  users: any[] = [];

  // Utilisation du décorateur @Apollo pour exécuter une requête
  @Apollo(gql`
    query {
      users {
        id
        name
      }
    }
  `)
  users!: any;
}
</script>
```

**Explication :**
- **Déclaration de la requête** : Le décorateur `@Apollo` est utilisé pour associer la requête GraphQL à l'attribut `users`.
- **Mise à jour automatique** : Chaque fois que la requête est exécutée (par exemple, lorsqu'un autre attribut change ou selon la configuration), l'attribut `users` est mis à jour avec les résultats de la requête.

**Exemple 2 : Utilisation d'une Fonction pour Traiter les Données**

```typescript
<template>
  <div>
    <h1>Informations de l'Utilisateur</h1>
    <p>ID : {{ userId }}</p>
    <p>Nom : {{ userName }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import gql from 'graphql-tag';
import { Apollo } from '@/decorators'; // Importer le décorateur

@Component
export default class UserInfo extends Vue {
  userId: string = '1'; // Id utilisateur initial

  // Attributs pour stocker les données de l'utilisateur
  userName: string = '';

  // Utilisation du décorateur @Apollo pour exécuter une requête et traiter les résultats
  @Apollo(
    gql`
      query GetUser($id: ID!) {
        user(id: $id) {
          id
          name
        }
      }
    `,
    function(data: any) {
      return data.user.name;
    }
  )
  userName!: string;
}
</script>
```

**Explication :**
- **Requête avec paramètres** : La requête `GetUser` prend un paramètre `id` qui est lié dynamiquement à `userId`.
- **Traitement personnalisé des résultats** : La fonction associée à `@Apollo` extrait le nom de l'utilisateur des données retournées et le stocke dans `userName`.

---

#### **4. Options Avancées et Personnalisation**

Le décorateur `@Apollo` permet également d'utiliser des options avancées pour personnaliser davantage la manière dont les requêtes sont exécutées et les résultats sont traités.

**Exemple : Personnalisation des Options Apollo**

```typescript
<template>
  <div>
    <h1>Détails de l'Article</h1>
    <p>Titre : {{ articleTitle }}</p>
    <p>Contenu : {{ articleContent }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import gql from 'graphql-tag';
import { Apollo } from '@/decorators'; // Importer le décorateur

@Component
export default class ArticleDetails extends Vue {
  articleId: string = '1';

  // Attributs pour stocker les données de l'article
  articleTitle: string = '';
  articleContent: string = '';

  // Utilisation du décorateur @Apollo avec des options avancées
  @Apollo({
    query: gql`
      query GetArticle($id: ID!) {
        article(id: $id) {
          title
          content
        }
      }
    `,
    variables() {
      return { id: this.articleId };
    },
    specificResult({ data }: { data: any }) {
      this.articleTitle = data.article.title;
      this.articleContent = data.article.content;
    }
  })
  articleTitle!: string;

  // L'attribut 'articleContent' est mis à jour via 'specificResult' dans l'exemple ci-dessus

  async updateArticle({ id, title, content }: { id: string, title: string, content: string }) {
    // Code pour mettre à jour l'article

    await this.$apollo.mutate({
      mutation: gql`
        mutation UpdateArticle($id: ID!, $title: String!, $content: String!) {
          updateArticle(id: $id, title: $title, content: $content) {
            id
            title
            content
          }
        }
      `,
      variables: { id, title, content }
    });

  }
}
</script>
```

Si on a besoin de modifier directement le resultat de la requête, il faut passer par un variable intermédiaire.

```typescript
@Apollo({
  query: gql`
    query GetLoading($id: ID!) {
      loading(id: $id) {
        currentStep
        totalSteps
      }
    }
  `,
  variables() {
    return { id: this.articleId };
  },
  specificResult({ data }: { data: any }) {
    const tmp = { ...data.loading }

    this.loading = {
      currentStep: tmp.currentStep,
      totalSteps: tmp.totalSteps,
      progress: Math.round((tmp.currentStep / tmp.totalSteps) * 100)
    }
  }
})
```

**Explication :**
- **`variables`** : La fonction `variables` permet de définir dynamiquement les variables de la requête en fonction de l'état du composant. C'est a dire que la requête `GetArticle` sera réexécutée à chaque fois que `articleId` change.
- **`specificResult`** : Permet un traitement plus granulaire des résultats de la requête. Ici, `specificResult` met à jour à la fois `articleTitle` et `articleContent`.


#### **5. Skip et Bounce**

Il est possible de sauter l'exécution de la requête en utilisant la propriété `skip` du décorateur `@Apollo`. Cette propriété prend une fonction qui retourne un booléen indiquant si la requête doit être exécutée ou non.

```typescript
@Apollo({
  query: gql`
    query GetArticle($id: ID!) {
      article(id: $id) {
        title
        content
      }
    }
  `,
  variables() {
    return { id: this.articleId };
  },
  specificResult({ data }: { data: any }) {
    this.articleTitle = data.article.title;
    this.articleContent = data.article.content;
  },
  skip() {
    return !this.articleId;
  }
})
articleTitle!: string;
```

Dans cet exemple, la requête `GetArticle` ne sera pas exécutée si `articleId` est vide ou nul.

Il est également possible de définir un délai de rebond (bounce) pour l'exécution de la requête en utilisant la propriété `bounce` du décorateur `@Apollo`. Cette propriété prend un nombre en millisecondes qui définit le délai avant l'exécution de la requête après que l'attribut a été modifié.

```typescript
@Apollo({
  query: gql`
    query GetArticle($id: ID!) {
      article(id: $id) {
        title
        content
      }
    }
  `,
  variables() {
    return { id: this.articleId };
  },
  specificResult({ data }: { data: any }) {
    this.articleTitle = data.article.title;
    this.articleContent = data.article.content;
  },
  bounce: 500 // Délai de 500ms avant l'exécution de la requête
})
articleTitle!: string;
```

Dans cet exemple, la requête `GetArticle` sera exécutée après un délai de 500ms après que `articleId` a été modifié.

---

> **⚠️ Remarque** : Pour plus de lisibilité, nous avons écrit les requetes directement dans le code. Il est recommandé de les externaliser dans des fichiers *.gql* séparés pour une meilleure organisation.
---

#### **5. Conclusion et Exercices**

Le décorateur `@Apollo` est un outil puissant pour intégrer et automatiser les requêtes Apollo dans les composants Vue.js utilisant Class-Components. Il permet de simplifier le code et de rendre les composants plus réactifs aux changements d'état.