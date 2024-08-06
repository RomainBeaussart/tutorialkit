<template>
    <v-app>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card>
              <v-card-title class="headline">Bienvenue sur Vuetify</v-card-title>
              <v-card-text>
                Ceci est un exemple de carte Vuetify.
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