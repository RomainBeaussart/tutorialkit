<template>
    <div style="padding: 5px">
        <p>{{ name }} : {{ compteur }}</p>
        <v-btn @click="incrementer">Incrémenter</v-btn>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class App extends Vue {
    @Prop() name: string = ""

    compteur = 0;

    @Emit('count')
    incrementer() {
        return this.compteur++;
    }
}
</script>