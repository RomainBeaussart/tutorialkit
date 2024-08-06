---
type: lesson
title: Les Directives dans Vue.js
focus: /src/App.vue
editor: { fileTree: false }
---

### Les Directives dans Vue.js

#### **Objectifs de l'Étape :**
- Comprendre le rôle des directives dans Vue.js.
- Apprendre à utiliser les directives de base comme `v-bind`, `v-if`, `v-for`, `v-model`, et `v-show`.
- Savoir créer des directives personnalisées pour des besoins spécifiques.

---

#### **1. Qu'est-ce qu'une Directive dans Vue.js ?**

Les directives dans Vue.js sont des attributs spéciaux que vous ajoutez à vos balises HTML pour lier leur comportement à des propriétés de votre composant. Elles sont préfixées par `v-` et permettent d'ajouter de la logique réactive à votre interface utilisateur.

---

#### **2. Les Directives de Base**

##### **a) `v-bind` : Liaison Dynamique d'Attributs**
`v-bind` est utilisé pour lier dynamiquement des attributs à des expressions de données dans votre composant. Il permet de lier des valeurs de données aux attributs HTML comme `href`, `src`, ou `class`.

**Syntaxe :**
```html
<a v-bind:href="url">Lien vers un site</a>
```
*Ce code liera dynamiquement l'attribut `href` à la valeur de `url` dans votre composant.*

**Version abrégée :**
```html
<a :href="url">Lien vers un site</a>
```

##### **b) `v-if` : Rendu Conditionnel**
`v-if` permet d'afficher ou de masquer des éléments en fonction de la valeur d'une expression booleéenne.

**Syntaxe :**
```html
<p v-if="isVisible">Ce texte est visible si isVisible est vrai.</p>
```
*Si `isVisible` est `true`, le paragraphe sera rendu, sinon, il sera retiré du DOM.*

**Utilisation avec `v-else` :**
```html
<p v-if="isVisible">Visible</p>
<p v-else>Non visible</p>
```

##### **c) `v-for` : Boucles et Itérations**
`v-for` est utilisé pour rendre une liste d'éléments en fonction d'un tableau ou d'un objet.

**Syntaxe :**
```html
<ul>
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</ul>
```
*Cette directive génère une liste d'éléments `li` en itérant sur le tableau `items`. Chaque élément est lié à une clé unique grâce à l'attribut `:key`.*

##### **d) `v-model` : Liaison Bidirectionnelle des Données**
`v-model` est utilisé pour lier les éléments de formulaire (comme les champs de saisie, les cases à cocher, etc.) à des données de votre composant, permettant une mise à jour en temps réel.

**Syntaxe :**
```html
<input v-model="message" placeholder="Entrez un message">
<p>Message : {{ message }}</p>
```
*Le champ de saisie et le paragraphe sont liés à la même donnée `message`. Toute modification du champ de saisie met à jour le paragraphe en temps réel.*

##### **e) `v-show` : Affichage Conditionnel**
`v-show` fonctionne comme `v-if`, mais au lieu de supprimer l'élément du DOM, il modifie la propriété CSS `display` pour le masquer ou le montrer.

**Syntaxe :**
```html
<p v-show="isVisible">Ce texte est visible si isVisible est vrai.</p>
```
*Le paragraphe sera toujours présent dans le DOM, mais il sera caché si `isVisible` est `false`.*

---

#### **4. Conclusion et Exercices**

Les directives sont un outil puissant dans Vue.js pour manipuler dynamiquement le DOM et créer des interfaces utilisateur réactives. Elles permettent de lier les données aux éléments HTML et de contrôler leur rendu en fonction des états de votre application.

> **Exercice :** Dans le playground, créez un champs texte lié à une variable `limit` qui correspond au nombre d'itération d'une boucle `v-for`. Affichez une liste de nombres de 1 à `limit` en utilisant `v-for`. Si le nombre est divisible par 3, affichez "Fizz", si le nombre est divisible par 5, affichez "Buzz", et si le nombre est divisible par 3 et 5, affichez "FizzBuzz".

