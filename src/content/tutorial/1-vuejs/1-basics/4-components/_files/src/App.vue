<template>
    <div style="display: flex; width: 100%;">
        <Counter></Counter>
        <Counter></Counter>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Counter from "./components/Counter.vue";

@Component({
    components: {
        Counter: Counter
    }
})
export default class App extends Vue {
}
</script>