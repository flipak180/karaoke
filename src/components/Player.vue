<template>
    <Video :src="song.video" />
    <Lyrics :lines="song.lyrics" />
    <CurrentNote/>
    <CountDown @end="start" :number="startDelay" />
</template>

<script>
import Video from "./Video.vue";
import Lyrics from "./Lyrics.vue";
import CurrentNote from "./CurrentNote.vue";
import CountDown from "./CountDown.vue";

export default {
    name: "Player",
    props: ['song'],
    components: {
        Video,
        Lyrics,
        CurrentNote,
        CountDown,
    },
    data() {
        return {
            startDelay: 0,
        }
    },
    mounted() {
        console.log(this.song);
    },
    methods: {
        start() {
            console.log('start');
            //document.getElementById("video").play();
        }
    }
}
</script>

<style scoped>
    .count-down {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        font-size: 72px;
    }
</style>
