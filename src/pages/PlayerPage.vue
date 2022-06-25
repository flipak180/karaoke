<template>
    <Player :song="song" v-if="song"/>
</template>

<script>
import Player from "../components/Player.vue";
import uprising from "../songs/uprising.js";

export default {
    name: "PlayerPage",
    components: {
        Player,
    },
    data() {
        return {
            song: null,
        }
    },
    mounted() {
        this.song = uprising;
    }
}
</script>

<style scoped>

</style>
