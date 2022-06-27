<template>
    <CurrentNote/>
    <video :src="'/video/' + src" playsinline controls id="video"></video>
</template>

<script>
import CurrentNote from './CurrentNote.vue';

export default {
    name: "Video",
    components: {
        CurrentNote
    },
    props: ['src']
}
</script>

<style scoped>

</style>
