<template>
    <Video />
    <Lyrics />
    <CurrentNote/>
</template>

<script>
import Lyrics from "./components/Lyrics.vue";
import Video from "./components/Video.vue";
import CurrentNote from "./components/CurrentNote.vue";

export default {
    name: "App",
    components: {
        Lyrics,
        Video,
        CurrentNote
    }
}
</script>

<style>
body {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
}
</style>
