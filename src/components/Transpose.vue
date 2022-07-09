<template>
    <div class="change-transpose">
        <span>{{ transpose }}</span>
        <button @click="changeTranspose(-1)">-1</button>
        <button @click="changeTranspose(1)">+1</button>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "Transpose",
    computed: {
        ...mapState(['transpose']),
    },
    methods: {
        changeTranspose(transpose) {
            this.$store.commit('setTranspose', this.transpose + transpose);
        }
    }
}
</script>

<style scoped>

</style>
