<template>
    <Video :src="song.video" />
    <Lyrics :lines="song.lyrics" />
    <CurrentNote/>
    <NotesSlider :notes="song.notes" :duration="song.duration" />
<!--    <CountDown @end="start" :number="startDelay" />-->
    <button @click="toggle" class="video-play-btn">{{ isPlay ? 'Pause' : 'Play' }}</button>
</template>

<script>
import Video from "./Video.vue";
import Lyrics from "./Lyrics.vue";
import CurrentNote from "./CurrentNote.vue";
import CountDown from "./CountDown.vue";
import NotesSlider from "./NotesSlider.vue";

let video = null;

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
            isPlay: false,
        }
    },
    mounted() {
        video = document.getElementById("video");
        video.ontimeupdate = () => {
            this.$store.commit('setTime', Math.round(video.currentTime * 1000));
        }
    },
    methods: {
        toggle() {
            this.isPlay = !this.isPlay;
            if (this.isPlay) {
                video.play();
            } else {
                video.pause();
            }
        }
    }
}
</script>

<style scoped>

</style>
