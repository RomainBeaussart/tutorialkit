---
type: lesson
title: Vuetify
focus: /src/App.vue
editor: true
---

### Utilisation de Vuetify avec Class-Components

#### **Objectifs de l'Étape :**
- Découvrir comment créer et utiliser des composants Vuetify tels que les boutons, les cartes, et les formulaires dans une application Vue.js avec Class-Components.

---

#### **1. Qu'est-ce que Vuetify ?**

Vuetify est une bibliothèque de composants UI basée sur les directives de Material Design de Google. Il fournit une large gamme de composants prêts à l'emploi qui permettent de créer rapidement des interfaces utilisateur modernes, réactives et esthétiques. Vuetify est très bien intégré avec Vue.js et peut être utilisé facilement avec l'approche Class-Components.

>Il est vivement conseillé de lire la [documentation officielle de Vuetify](https://v2.vuetifyjs.com/en/getting-started/installation/) pour en savoir plus sur les composants disponibles et les fonctionnalités offertes.

---

#### **2. Utilisation de Vuetify avec Class-Components**

Avec Vuetify installé, vous pouvez commencer à créer des composants en utilisant l'approche Class-Components.

**Exemple : Création d'une carte avec des boutons**

```vue
<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-card-title class="headline">Bienvenue sur Vuetify</v-card-title>
            <v-card-text>
              Ceci est un exemple de carte Vuetify créée avec Class-Components.
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="primaryAction">Action Principale</v-btn>
              <v-btn color="secondary" @click="secondaryAction">Action Secondaire</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VuetifyCardComponent extends Vue {
  // Méthode pour l'action principale
  primaryAction() {
    alert('Action principale exécutée');
  }

  // Méthode pour l'action secondaire
  secondaryAction() {
    alert('Action secondaire exécutée');
  }
}
</script>

<style scoped>
/* Ajoutez des styles personnalisés ici si nécessaire */
</style>
```

**Explication :**
- **`v-app`** : Le conteneur racine de l'application Vuetify. Il est obligatoire pour que les composants Vuetify fonctionnent correctement.
- **`v-container`, `v-row`, `v-col`** : Ces composants permettent de structurer la mise en page en utilisant un système de grille réactif.
- **`v-card`** : Un composant de carte Vuetify qui encapsule les titres, les textes, et les boutons.
- **`v-btn`** : Un composant de bouton qui suit les directives de Material Design, avec des options de couleur et d'actions.

---

#### **3. Utilisation des Formulaires avec Vuetify**

Vuetify facilite également la création et la gestion des formulaires avec des champs de saisie, des sélecteurs, et des validations intégrées.

**Exemple : Création d'un formulaire avec Vuetify**

```vue
<template>
  <v-app>
    <v-container>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="name"
          :rules="[rules.required]"
          label="Nom"
          required
        ></v-text-field>

        <v-select
          v-model="selectedOption"
          :items="options"
          label="Sélectionnez une option"
          :rules="[rules.required]"
          required
        ></v-select>

        <v-btn :disabled="!valid" color="primary" @click="submitForm">
          Soumettre
        </v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VuetifyFormComponent extends Vue {
  // Données réactives
  name: string = '';
  selectedOption: string | null = null;
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  valid: boolean = false;

  // Règles de validation
  rules = {
    required: (value: string) => !!value || 'Champ requis',
  };

  // Méthode pour soumettre le formulaire
  submitForm() {
    if (this.$refs.form.validate()) {
      alert(`Nom: ${this.name}, Option: ${this.selectedOption}`);
    }
  }
}
</script>

<style scoped>
/* Styles personnalisés */
</style>
```

**Explication :**
- **`v-form`** : Un composant de formulaire qui inclut la gestion des validations.
- **`v-text-field`** : Champ de texte avec une liaison bidirectionnelle (`v-model`) et des règles de validation.
- **`v-select`** : Un composant de sélection déroulante qui permet à l'utilisateur de choisir parmi des options prédéfinies.
- **Validation** : Les règles de validation sont définies dans l'objet `rules` et appliquées aux champs de formulaire.

---

#### **4. Conclusion et Exercices**

En utilisant Vuetify avec l'approche Class-Components, vous pouvez rapidement construire des interfaces utilisateur riches et réactives tout en bénéficiant des avantages d'une structure de classe organisée. Les composants Vuetify offrent des fonctionnalités puissantes pour la mise en page, les formulaires, et bien plus encore.

**Exercice :** Dans le playground, créez un formulaire utilisant Vuetify et Class-Components. Ajoutez des champs de texte, des sélecteurs, et des boutons avec des validations intégrées. Assurez-vous que le formulaire ne peut être soumis que lorsque toutes les validations sont réussies.
