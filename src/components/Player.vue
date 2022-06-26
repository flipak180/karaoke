<template>
    <Video :src="song.video" />
    <Lyrics :lines="song.lyrics" />
    <CurrentNote/>
    <NotesSlider :notes="song.notes" :duration="song.duration" />
    <CountDown @end="start" :number="startDelay" />
</template>

<script>
import Video from "./Video.vue";
import Lyrics from "./Lyrics.vue";
import CurrentNote from "./CurrentNote.vue";
import CountDown from "./CountDown.vue";
import NotesSlider from "./NotesSlider.vue";

export default {
    name: "Player",
    props: ['song'],
    components: {
        Video,
        Lyrics,
        CurrentNote,
        CountDown,
        NotesSlider
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

            let video = document.getElementById("video");
            video.play();
            // video.ontimeupdate = () => {
            //     console.log(Math.round(video.currentTime * 1000));
            // }
        }
    }
}
</script>

<style scoped>

</style>
