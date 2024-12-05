<template>
    <div style="display: flex; width: 100%;">
        <Counter></Counter>
        <Counter></Counter>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Counter from "./components/Counter.vue";

@Options({
    components: {
        Counter: Counter
    }
})
export default class App extends Vue {
}
</script>