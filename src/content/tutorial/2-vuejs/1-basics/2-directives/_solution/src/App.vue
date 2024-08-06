<template>
    <div>
        <input 
            type="number" 
            v-model.number="limit" 
            placeholder="Entrez une limite"
        />
        <ul>
            <li 
                v-for="i in limit" 
                :key="i"
            >
                {{ fizzBuzzValue(i) }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
    limit = 20;

    fizzBuzzValue(number: number) {
        const n = +number;
        if (n % 3 === 0 && n % 5 === 0) {
            return "FizzBuzz";
        } else if (n % 3 === 0) {
            return "Fizz";
        } else if (n % 5 === 0) {
            return "Buzz";
        }
        return n;
    }
}
</script>