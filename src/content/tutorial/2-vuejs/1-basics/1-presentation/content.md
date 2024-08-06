---
type: lesson
title: Introduction à Vue.js
focus: /src/App.vue
editor: { fileTree: false }
---

### Introduction à Vue.js 2

#### **Objectifs de l'Étape :**
- Comprendre les concepts fondamentaux de Vue.js 2.
- Saisir l'intérêt de l'utilisation de Vue.js dans le développement d'applications web.
- Découvrir les composants, l'état, et la réactivité dans Vue.js 2.

---

#### **1. Qu'est-ce que Vue.js ?**
Vue.js est un framework JavaScript progressif utilisé pour construire des interfaces utilisateur interactives. Il est conçu pour être adopté progressivement, ce qui signifie que vous pouvez l'utiliser aussi bien pour enrichir une page HTML existante que pour créer des applications web entières. Vue.js se distingue par sa simplicité, sa flexibilité et sa capacité à gérer facilement la réactivité de l'interface utilisateur.

**Points clés :**
- **Composants réutilisables** : Vue.js permet de créer des composants modulaires et réutilisables qui encapsulent le HTML, le CSS et le JavaScript nécessaires.
- **Réactivité** : Vue.js réagit aux changements de données en mettant à jour automatiquement l'interface utilisateur, sans avoir besoin de manipulations DOM manuelles.
- **Ecosystème riche** : Vue.js propose un écosystème complet avec Vue Router pour la gestion des routes, Vuex pour la gestion de l'état global, et bien d'autres.

---

#### **2. Concepts Clés de Vue.js 2**

##### **a) Les Composants**
Un composant est une unité réutilisable dans Vue.js qui combine le code HTML, le style CSS et la logique JavaScript. Les composants peuvent être imbriqués les uns dans les autres, créant ainsi des interfaces utilisateur complexes à partir d'éléments simples et isolés.

**Exemple d'un composant simple :**
```vue
<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
    message = "Bienvenue dans Vue.js !";
}
</script>
<style>
h1 {
    color: blue;
}
</style>
```
*Dans cet exemple, le composant affiche un message de bienvenue et stylise le texte en bleu.*

##### **b) L'État (State)**
L'état (ou data) dans Vue.js représente les données qui sont utilisées par les composants pour rendre l'interface utilisateur. Chaque composant peut avoir son propre état local.


##### **c) La Réactivité**
Vue.js utilise un système de réactivité qui observe les changements dans les données et met automatiquement à jour l'interface utilisateur en conséquence. Cela signifie que chaque fois que l'état d'un composant change, l'affichage correspondant est mis à jour sans intervention manuelle.

**Exemple :**
```vue
<template>
    <div>
        <p>Compteur : {{ compteur }}</p>
        <button @click="incrementer">Incrémenter</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
    compteur = 0;
    incrementer() {
        this.compteur++;
    }
}
</script>
```
*Dans cet exemple, chaque clic sur le bouton incrémente le compteur et met à jour l'affichage en temps réel.*

---

#### **3. Pourquoi Utiliser Vue.js ?**
Vue.js se distingue par sa facilité d'apprentissage, son intégration progressive et sa performance. Que vous soyez débutant en JavaScript ou développeur expérimenté, Vue.js offre une courbe d'apprentissage douce tout en permettant de construire des applications complexes. Son écosystème mature et son support communautaire en font un choix populaire pour le développement d'applications modernes.

**Avantages :**
- **Simplicité** : Facile à apprendre et à utiliser, avec une documentation claire.
- **Modularité** : Possibilité de créer des composants réutilisables et modulaires.
- **Flexibilité** : Peut être intégré dans des projets existants ou utilisé pour des applications complètes.
- **Performance** : Légèreté et rapidité grâce à un système de réactivité optimisé.

---

#### **4. Conclusion et Suite de la Formation**
Cette introduction a pour but de vous familiariser avec les concepts de base de Vue.js. Dans les prochains modules, vous apprendrez à créer des composants en utilisant l'approche Class-Components, à gérer les états, et à concevoir des interfaces utilisateur modernes avec Vuetify.

**Prochaine étape :** Dans le prochain module, nous aborderons la structure d'un projet Vue.js et l'initialisation d'une application avec Vue CLI. Vous découvrirez également comment créer et organiser des composants en utilisant Class-Components.

---

**Exercice :** Explorez le playground avec un exemple de composant de base et modifiez les données pour observer la réactivité de Vue.js en action. Essayez de créer un petit composant qui affiche un message et un compteur qui s'incrémente lorsqu'on clique sur un bouton.