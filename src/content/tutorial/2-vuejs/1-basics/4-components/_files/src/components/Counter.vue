<template>
    <div style="padding: 5px">
        <p>Compteur : {{ compteur }}</p>
        <v-btn @click="incrementer">Incrémenter</v-btn>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class App extends Vue {
    compteur = 0;
    incrementer() {
        this.compteur++;
    }
}
</script>