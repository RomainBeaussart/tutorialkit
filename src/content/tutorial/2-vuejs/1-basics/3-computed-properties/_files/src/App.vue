<template>
    <div>
        <p>Nom complet : {{ fullName }}</p>
        <input v-model="firstName" placeholder="Prénom">
        <input v-model="lastName" placeholder="Nom de famille">
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UserProfile extends Vue {
    // Données
    firstName: string = 'John';
    lastName: string = 'Doe';

    // Computed property
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
</script>

<style scoped>
input {
    margin-bottom: 10px;
    display: block;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>