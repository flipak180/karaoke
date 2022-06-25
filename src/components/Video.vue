<template>
    <CurrentNote/>
    <video :src="'/video/' + src" playsinline id="video"></video>
</template>

<script>
import CurrentNote from './CurrentNote.vue';

export default {
    name: "Test",
    components: {
        CurrentNote
    },
    props: ['src']
}
</script>

<style scoped>
video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
}
</style>
