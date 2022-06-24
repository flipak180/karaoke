<template>
    <Video/>
    <Lyrics/>
    <CurrentNote/>
</template>

<script setup>
import Video from '../components/Video.vue';
import Lyrics from '../components/Lyrics.vue';
import CurrentNote from '../components/CurrentNote.vue';
import {onMounted} from "vue";

onMounted(() => {
    document.getElementById("video").play();
})
</script>

<style scoped>

</style>
