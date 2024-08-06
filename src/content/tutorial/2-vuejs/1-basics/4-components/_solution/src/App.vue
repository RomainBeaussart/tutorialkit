<template>
    <div style="display: flex; width: 100%;">
        <Counter 
            v-for="(counter, index) in counters" 
            :key="index" 
            @count="counter.count = $event" 
            :name="counter.name"
        ></Counter>
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