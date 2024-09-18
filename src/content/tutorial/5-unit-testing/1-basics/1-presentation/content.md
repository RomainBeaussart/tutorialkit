---
type: lesson
title: Introduction aux tests unitaires
editor: false
terminal: false
previews: false
---

### Introduction à Mocha et Chai pour les Tests Unitaires

#### **Objectifs :**
- Comprendre l’utilisation de Mocha pour exécuter des tests unitaires en JavaScript/TypeScript.
- Apprendre à utiliser Chai pour les assertions dans les tests.
- Intégrer Mocha et Chai pour une meilleure couverture de tests unitaires.

---

#### **1. Qu'est-ce que Mocha ?**

Mocha est un framework de test JavaScript léger et flexible, principalement utilisé pour exécuter des tests unitaires. Il est conçu pour être exécuté sur Node.js et dans le navigateur.

**Principaux avantages :**
- **Tests asynchrones** : Mocha prend en charge les tests synchrones et asynchrones.
- **Structure claire** : Il permet de bien structurer les tests avec des suites (`describe`) et des tests individuels (`it`).

---

#### **2. Qu'est-ce que Chai ?**

Chai est une bibliothèque d’assertions pour JavaScript, souvent utilisée avec Mocha. Elle permet d'écrire des assertions dans un style **BDD** (Behavior-Driven Development) ou **TDD** (Test-Driven Development), avec une syntaxe simple et expressive.

**Principaux avantages :**
- **Styles variés** : Chai supporte plusieurs styles d'assertions (`expect`, `should`, et `assert`).
- **Extensible** : Vous pouvez ajouter des plugins pour enrichir les possibilités d’assertion.

---

#### **3. Structure de Base d’un Test avec Mocha et Chai**

Un test unitaire avec Mocha et Chai se structure autour de deux concepts principaux :
- **`describe`** : Regroupe une série de tests qui partagent une thématique.
- **`it`** : Représente un test unitaire individuel.
- **`expect`/`assert`** : Utilisé pour les assertions avec Chai.

**Exemple de test basique :**
```javascript
const { expect } = require('chai');

// Une simple fonction à tester
function addition(a, b) {
  return a + b;
}

describe('Tests d\'addition', () => {
  it('devrait retourner 5 quand on additionne 2 et 3', () => {
    expect(addition(2, 3)).to.equal(5);
  });

  it('devrait retourner 0 quand on additionne -1 et 1', () => {
    expect(addition(-1, 1)).to.equal(0);
  });
});
```

**Explication :**
- **`describe`** : Crée une suite de tests nommée "Tests d'addition".
- **`it`** : Chaque test individuel vérifie un comportement spécifique de la fonction `addition`.
- **`expect`** : Utilisé pour affirmer que le résultat de `addition(2, 3)` est bien `5`.

---

#### **4. Utilisation de Mocha pour les Tests Asynchrones**

Mocha supporte naturellement les tests asynchrones. Vous pouvez passer un callback `done` à vos tests, ou utiliser des promesses pour gérer les opérations asynchrones.

**Exemple de test asynchrone :**
```javascript
const { expect } = require('chai');

function fetchData(callback) {
  setTimeout(() => {
    callback('données reçues');
  }, 1000);
}

describe('Test Asynchrone', () => {
  it('devrait retourner des données après un délai', (done) => {
    fetchData((data) => {
      expect(data).to.equal('données reçues');
      done(); // Important pour signaler que le test est terminé
    });
  });
});
```

**Explication :**
- **Callback `done`** : Indique à Mocha que le test est asynchrone et doit attendre l’appel de `done` avant de se terminer.
- **Tests asynchrones** : Ce modèle est pratique pour tester des opérations avec des délais, comme des appels réseau.

---

#### **5. Les Différents Styles d'Assertions avec Chai**

Chai propose trois styles d’assertions différents : **`expect`**, **`should`**, et **`assert`**.

##### **a) Style `expect`**
Le style `expect` est le plus populaire et permet de construire des assertions lisibles.

**Exemple :**
```javascript
expect(5).to.equal(5);
expect([1, 2, 3]).to.have.lengthOf(3);
```

##### **b) Style `should`**
Ce style ajoute les méthodes `should` à tous les objets. Il est plus "naturel" à lire, mais peut parfois être moins flexible.

**Exemple :**
```javascript
const obj = { foo: 'bar' };
obj.should.have.property('foo').equal('bar');
```

##### **c) Style `assert`**
Le style `assert` est plus proche du style traditionnel des frameworks de test, avec des méthodes explicites.

**Exemple :**
```javascript
assert.equal(5, 5);
assert.deepEqual([1, 2], [1, 2]);
```

---

#### **6. Intégration Mocha + Chai dans VSCode**

L'un des grands avantages de Mocha et Chai est leur parfaite intégration avec **VSCode**. Grâce à cela, vous pouvez :
- **Lancer vos tests** directement depuis VSCode via une tâche ou une extension.
- **Voir instantanément les résultats** des tests dans le terminal intégré.
- **Auto-complétion des assertions** : VSCode peut suggérer automatiquement les méthodes Chai (`expect`, `to.equal`, etc.).

---

#### **7. Conclusion**

Mocha et Chai sont des outils simples et puissants pour les tests unitaires. Mocha fournit la structure des tests et permet de les exécuter de manière synchrone ou asynchrone, tandis que Chai permet d'écrire des assertions claires et lisibles.

> Si vous voulez en savoir plus sur Mocha et Chai, consultez la [documentation officielle de Mocha](https://mochajs.org/) et de [Chai](https://www.chaijs.com/). Vous pouvez également lire cet article: [Chai with Mocha: Unit Testing in Node.js](https://medium.com/@anjali19/chai-with-mocha-unit-testing-in-node-js-4b005a9f1097).