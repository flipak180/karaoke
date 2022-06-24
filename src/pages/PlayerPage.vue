<template>
    <Video/>
    <Lyrics/>
    <CurrentNote/>
</template>

<script>
import Video from '../components/Video.vue';
import Lyrics from '../components/Lyrics.vue';
import CurrentNote from '../components/CurrentNote.vue';

export default {
    name: "Test",
    components: {
        Video,
        Lyrics,
        CurrentNote
    },
    mounted() {
        document.getElementById("video").play();
    }
}
</script>

<style scoped>

</style>
