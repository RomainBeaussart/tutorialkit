---
type: lesson
title: Création de Composants avec Class-Components
focus: /src/App.vue
editor: true
---

### Création de Composants avec Class-Components

#### **Objectifs de l'Étape :**
- Apprendre à créer des composants Vue.js 2 en utilisant l'approche Class-Components.
- Comprendre le cycle de vie des composants Vue.
- Savoir définir et utiliser les attributs, les propriétés, et les méthodes dans un composant Vue.js.

---

#### **1. Qu'est-ce que l'Approche Class-Components ?**

L'approche Class-Components dans Vue.js 2 permet de définir des composants en utilisant la syntaxe de classes JavaScript moderne, en s'appuyant sur les décorateurs. Cette approche est similaire à celle de frameworks comme Angular ou React avec TypeScript, offrant une structure plus organisée et lisible pour les développeurs qui préfèrent la programmation orientée objet.

**Avantages :**
- Meilleure lisibilité du code pour les développeurs habitués à la programmation orientée objet.
- Intégration facile avec TypeScript.
- Utilisation des décorateurs pour simplifier la déclaration des composants, des props, et des méthodes.

---

#### **2. Création d'un Composant avec Class-Components**

##### **a) Structure de Base d'un Composant avec Class-Components**

Voici un exemple de création d'un composant en utilisant l'approche Class-Components.

**Exemple :**
```vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MyComponent extends Vue {
  // Déclaration des données
  title: string = 'Bienvenue sur Vue.js avec Class-Components';
  description: string = 'Ceci est un exemple de composant utilisant Class-Components.';
}
</script>

<style scoped>
h1 {
  color: green;
}
</style>
```

**Explication :**
- **`@Component`** : Décorateur qui indique que la classe suivante est un composant Vue.
- **`extends Vue`** : La classe étend la classe `Vue`, héritant ainsi des fonctionnalités de Vue.js.
- **Données (state)** : Les propriétés de la classe sont utilisées pour définir les données réactives du composant.

##### **b) Déclaration des Méthodes**

Dans Class-Components, les méthodes sont simplement définies comme des fonctions au sein de la classe.

**Exemple :**
```vue
<template>
  <div>
    <button @click="increment">Incrémenter</button>
    <p>Compteur : {{ counter }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CounterComponent extends Vue {
  // Données
  counter: number = 0;

  // Méthode
  increment() {
    this.counter++;
  }
}
</script>
```

**Explication :**
- **`increment`** : Méthode définie dans la classe qui modifie la donnée réactive `counter` à chaque clic sur le bouton.

##### **c) Utilisation des Props**

Les props dans Class-Components sont définies à l'aide du décorateur `@Prop`.

**Exemple :**
```vue
<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Message : {{ message }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class MessageComponent extends Vue {
  @Prop(String) title!: string;
  @Prop({ type: String, default: 'Aucun message' }) message!: string;
}
</script>
```

**Explication :**
- **`@Prop`** : Décorateur utilisé pour définir une prop. La première valeur est le type attendu, et la seconde permet de définir une valeur par défaut ou d'autres options.

##### **d) Utilisation des Emits**

Les événements personnalisés (emits) dans Class-Components sont définis à l'aide du décorateur `@Emit`, ou avec la fonction `this.$emit`.
Elle permet de déclencher des événements personnalisés pour communiquer avec les composants parents.

**Exemple :**
Composant enfant :
```vue
<template>
  <div>
    <button @click="emitEvent">Déclencher un événement</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class EventComponent extends Vue {
  @Emit() customEvent() {
    return 'Données à envoyer';
  }

  emitEvent() {
    this.customEvent();
  }
}
</script>
```
Component parent :
```vue
<template>
  <div>
    <EventComponent @customEvent="handleEvent" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ParentComponent extends Vue {
  handleEvent(data: string) {
    console.log('Données reçues :', data);
  }
}
</script>
```

**Explication :**
- **`@Emit`** : Décorateur utilisé pour définir un événement personnalisé. La méthode décorée sera appelée lors de l'émission de l'événement.
- **`this.$emit`** : Fonction standard de Vue.js pour émettre un événement personnalisé.


##### **e) Cycle de Vie des Composants**

Les hooks du cycle de vie dans Class-Components sont des méthodes standard de Vue.js qui peuvent être définies directement dans la classe.

**Exemple :**
```vue
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LifecycleComponent extends Vue {
  mounted() {
    console.log('Le composant est monté !');
  }

  beforeDestroy() {
    console.log('Le composant va être détruit.');
  }
}
</script>
```

**Explication :**
- **`mounted`** et **`beforeDestroy`** : Hooks du cycle de vie définis comme méthodes dans la classe, permettant d'exécuter du code à des moments spécifiques du cycle de vie du composant.

---

#### **4. Conclusion et Exercices**

L'approche Class-Components apporte une structure plus organisée et lisible pour créer des composants dans Vue.js 2, en particulier pour les développeurs familiers avec les classes en JavaScript. Les props, les méthodes, et le cycle de vie sont gérés de manière intuitive en utilisant des décorateurs et des méthodes standard.

> **Exercice :** Modifiez les composants `App.vue` et `Counter.vue` afin d'afficher la somme des deux compteurs dans le composant principal. Créer aussi deux `input` pour modifier les noms des compteurs.