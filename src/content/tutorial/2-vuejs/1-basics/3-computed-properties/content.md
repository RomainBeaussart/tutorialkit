---
type: lesson
title: Utilisation des Computed Properties
focus: /src/App.vue
editor: { fileTree: false }
---

### Utilisation des Computed Properties

#### **Objectifs de l'Étape :**
- Comprendre ce que sont les computed properties dans Vue.js.
- Apprendre à créer et utiliser des computed properties avec l'approche Class-Components.
- Savoir comment les computed properties optimisent les performances en évitant les recalculs inutiles.

---

#### **1. Qu'est-ce qu'une Computed Property ?**

Les computed properties (ou propriétés calculées) dans Vue.js sont des propriétés qui dépendent d'autres données du composant. Elles sont recalculées automatiquement lorsque les données dont elles dépendent changent. Contrairement aux méthodes, les computed properties sont mises en cache, ce qui signifie qu'elles ne seront réévaluées que si leurs dépendances changent.

**Avantages des computed properties :**
- **Optimisation des performances** : Les computed properties sont mises en cache, évitant les recalculs inutiles.
- **Code plus propre** : Elles permettent de simplifier la logique dans le template en déplaçant les calculs dans le script.

---

#### **2. Création de Computed Properties avec Class-Components**

Dans l'approche Class-Components, les computed properties sont définies comme des getters dans la classe.

**Exemple :**
```vue
<template>
  <div>
    <p>Nom complet : {{ fullName }}</p>
    <input v-model="firstName" placeholder="Prénom">
    <input v-model="lastName" placeholder="Nom de famille">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UserProfile extends Vue {
  // Données
  firstName: string = 'John';
  lastName: string = 'Doe';

  // Computed property
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
</script>

<style scoped>
input {
  margin-bottom: 10px;
  display: block;
}
</style>
```

**Explication :**
- **`firstName`** et **`lastName`** sont des propriétés réactives (state) du composant.
- **`fullName`** est une computed property définie comme un getter. Elle concatène `firstName` et `lastName` pour former un nom complet. La valeur de `fullName` est recalculée uniquement lorsque `firstName` ou `lastName` change.

---

#### **3. Computed Properties avec des Setters**

En plus des getters, vous pouvez également définir des setters pour vos computed properties, ce qui vous permet de réagir aux modifications de ces propriétés calculées et de mettre à jour les données sous-jacentes.

**Exemple avec un setter :**
```vue
<template>
  <div>
    <p>Firstname : {{ firstName }}</p>
    <p>Lastname : {{ lastName }}</p>
    <input v-model="fullName" placeholder="Nom complet">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UserProfile extends Vue {
  // Données
  firstName: string = 'John';
  lastName: string = 'Doe';

  // Computed property avec getter et setter
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value: string) {
    const names = value.split(' ');
    this.firstName = names[0] || '';
    this.lastName = names[1] || '';
  }
}
</script>
```

**Explication :**
- Le setter pour `fullName` permet de mettre à jour séparément `firstName` et `lastName` lorsque l'utilisateur modifie le champ de saisie complet.
- Lorsque l'utilisateur entre un nom complet dans le champ de saisie, le setter décompose ce nom en prénom et nom de famille, et les affecte aux propriétés correspondantes.

---

#### **4. Les Computed Properties vs. Methods**

Il est important de distinguer les computed properties des méthodes dans Vue.js :
- **Computed properties** : Mises en cache, elles ne sont recalculées que si les dépendances changent.
- **Methods** : Recalculées à chaque fois qu'elles sont appelées dans le template.

**Exemple comparatif :**
```vue
<template>
  <div>
    <p>Nom complet avec computed : {{ fullName }}</p>
    <p>Nom complet avec méthode : {{ getFullName() }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UserProfile extends Vue {
  firstName: string = 'John';
  lastName: string = 'Doe';

  // Computed property
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // Méthode
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
</script>
```

**Explication :**
- **`fullName`** est mis en cache et ne se recalculera que si `firstName` ou `lastName` change.
- **`getFullName`** est une méthode qui sera appelée et exécutée à chaque rendu, même si les données n'ont pas changé.

---

#### **5. Conclusion et Exercices**

Les computed properties sont un outil puissant pour simplifier et optimiser la logique des composants Vue.js. Elles permettent de séparer les calculs de l'interface utilisateur tout en garantissant des performances optimales grâce à la mise en cache des résultats.

> **Exercice :** Dans le playground, créez un composant avec Class-Components qui inclut des computed properties pour calculer des informations dérivées (par exemple, calculer un total ou formater une date). Essayez d'utiliser à la fois des getters et des setters pour manipuler les données de manière réactive.