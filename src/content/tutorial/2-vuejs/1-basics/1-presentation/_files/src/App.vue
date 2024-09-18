<template>
    <div>
        <p>Compteur : {{ compteur }}</p>
        <v-btn @click="incrementer">Incrémenter</v-btn>
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