<template>
    <div>
        <div style="display: flex; width: 100%;">
            <div
                v-for="(counter, index) in counters" 
                :key="index" 
            >
                <input 
                    v-model="counter.name" 
                    placeholder="Entrez un nom"
                />
                <Counter 
                    @count="counter.count = $event" 
                    :name="counter.name"
                ></Counter>
            </div>
        </div>
        <div>
            SUM: {{ counters.reduce((acc, counter) => acc + counter.count, 0) }}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Counter from "./components/Counter.vue";

type CounterType = {
    count: number;
    name: string;
}

@Component({
    components: {
        Counter: Counter
    }
})
export default class App extends Vue {
    
    counters: CounterType[] = [
        { count: 0, name: 'First' },
        { count: 0, name: 'Second' }
    ];
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