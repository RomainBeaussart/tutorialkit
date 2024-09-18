---
type: lesson
title: Traduction d'un Composant
editor: false
terminal: false
previews: false
---

### Traduction d’un Composant Vue.js 2 Classique vers Vue.js Class-Component

#### **Objectifs de l’Étape :**
- Comprendre comment convertir un composant Vue.js 2 classique vers une approche Class-Component.
- Apprendre à gérer les données, les méthodes, les props, les computed properties, et les hooks du cycle de vie avec Class-Component.

---

#### **1. Vue d'ensemble : Vue.js Classique vs Class-Component**

Dans Vue.js classique, on utilise une structure basée sur des objets pour définir les données, les méthodes, les computed properties, et les hooks de cycle de vie. En Class-Component, on utilise des classes modernes de JavaScript ou TypeScript, avec des décorateurs pour structurer et organiser le code de manière plus lisible.

**Exemple Vue.js Classique :**
```javascript
<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="increment">Incrémenter</button>
    <p>Compteur : {{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Bienvenue',
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  mounted() {
    console.log('Le composant est monté');
  }
};
</script>
```

---

#### **2. Conversion vers Class-Component**

Voyons maintenant comment traduire ce composant vers une syntaxe Class-Component en TypeScript ou JavaScript moderne.

**Composant traduit en Class-Component :**
```typescript
<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="increment">Incrémenter</button>
    <p>Compteur : {{ count }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CounterComponent extends Vue {
  // Propriétés réactives
  title: string = 'Bienvenue';
  count: number = 0;

  // Méthode
  increment() {
    this.count++;
  }

  // Hook du cycle de vie
  mounted() {
    console.log('Le composant est monté');
  }
}
</script>
```

**Explication des étapes de conversion :**
- **Classe TypeScript** : Au lieu d'un objet exporté, nous avons une classe qui hérite de `Vue`.
- **Propriétés réactives** : Les données ne sont plus dans une fonction `data()`. Ici, `title` et `count` sont des attributs de la classe. Ils sont automatiquement réactifs grâce à l’héritage de `Vue`.
- **Méthodes** : Les méthodes sont simplement définies comme des fonctions de la classe (par exemple, `increment`).
- **Cycle de vie** : Les hooks comme `mounted` sont définis comme des méthodes normales.

---

#### **3. Gestion des `Props` avec Class-Component**

Dans Vue.js classique, on définit les `props` dans un objet `props`. Avec Class-Component, on utilise le décorateur `@Prop` pour les déclarer.

**Exemple Vue.js Classique avec `Props` :**
```javascript
<template>
  <div>
    <p>Le compteur initial est : {{ initialCount }}</p>
    <p>Compteur : {{ count }}</p>
    <button @click="increment">Incrémenter</button>
  </div>
</template>

<script>
export default {
  props: {
    initialCount: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      count: this.initialCount
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>
```

**Traduction en Class-Component :**
```typescript
<template>
  <div>
    <p>Le compteur initial est : {{ initialCount }}</p>
    <p>Compteur : {{ count }}</p>
    <button @click="increment">Incrémenter</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class CounterComponent extends Vue {
  // Prop
  @Prop({ default: 0 }) initialCount!: number;

  // Propriété réactive
  count: number = this.initialCount;

  increment() {
    this.count++;
  }
}
</script>
```

**Explication :**
- **`@Prop`** : Utilisé pour déclarer `initialCount` comme une prop. On peut spécifier le type et la valeur par défaut directement via le décorateur.
- **`count`** : Initialisé avec la valeur de `initialCount` dans la classe.

---

#### **4. Utilisation des Computed Properties avec Class-Component**

Les `computed properties` dans Vue.js classique sont définies dans un objet `computed`. En Class-Component, elles sont définies comme des getters.

**Exemple Vue.js Classique avec Computed Property :**
```javascript
<template>
  <div>
    <p>Compteur doublé : {{ doubleCount }}</p>
    <button @click="increment">Incrémenter</button>
    <p>Compteur : {{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>
```

**Traduction en Class-Component :**
```typescript
<template>
  <div>
    <p>Compteur doublé : {{ doubleCount }}</p>
    <button @click="increment">Incrémenter</button>
    <p>Compteur : {{ count }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CounterComponent extends Vue {
  count: number = 0;

  increment() {
    this.count++;
  }

  // Computed property
  get doubleCount(): number {
    return this.count * 2;
  }
}
</script>
```

**Explication :**
- **Getter** : Les `computed properties` sont simplement des getters dans Class-Component, et elles se comportent de la même manière que dans Vue.js classique.

---

#### **5. Gestion des Hooks du Cycle de Vie**

Dans Vue.js classique, les hooks comme `created`, `mounted`, et `updated` sont définis dans l'objet `export default`. Avec Class-Component, ils deviennent des méthodes de la classe.

**Exemple Vue.js Classique avec Cycle de Vie :**
```javascript
<template>
  <div>
    <p>Compteur : {{ count }}</p>
    <button @click="increment">Incrémenter</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  mounted() {
    console.log("Le composant est monté");
  },
  beforeDestroy() {
    console.log("Le composant va être détruit");
  }
};
</script>
```

**Traduction en Class-Component :**
```typescript
<template>
  <div>
    <p>Compteur : {{ count }}</p>
    <button @click="increment">Incrémenter</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CounterComponent extends Vue {
  count: number = 0;

  increment() {
    this.count++;
  }

  mounted() {
    console.log("Le composant est monté");
  }

  beforeDestroy() {
    console.log("Le composant va être détruit");
  }
}
</script>
```

**Explication :**
- **Cycle de vie** : Les hooks comme `mounted` et `beforeDestroy` sont simplement des méthodes dans la classe et se comportent de la même manière que dans la syntaxe classique.

---

#### **6. Conclusion et Exercice**

La traduction d'un composant Vue.js classique vers une approche Class-Component est principalement une réorganisation du code avec l'utilisation des classes et des décorateurs. Cela offre une structure plus claire, notamment pour les grands projets.
