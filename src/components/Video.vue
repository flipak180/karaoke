<template>
    <CurrentNote/>
    <video :src="'/video/' + src" playsinline controls id="video"></video>
    <button @click="toggle" class="video-play-btn">{{ isPlay ? 'Pause' : 'Play' }}</button>
</template>

<script>
import CurrentNote from './CurrentNote.vue';

let reqId, video;

export default {
    name: "Video",
    components: {
        CurrentNote
    },
    props: ['src'],
    data() {
        return {
            isPlay: false
        }
    },
    mounted() {
        video = document.getElementById("video");
        video.ontimeupdate = () => {
            this.$store.commit('setTime', Math.round(video.currentTime * 1000));
        }
        video.addEventListener('play', this.startTracking);
        video.addEventListener('pause', this.stopTracking);
    },
    methods: {
        startTracking() {
            let scope = this;
            scope.$store.commit('setTime', Math.round(video.currentTime * 1000));
            reqId = requestAnimationFrame(function play() {
                scope.$store.commit('setTime', Math.round(video.currentTime * 1000));
                reqId = requestAnimationFrame(play);
            });
        },
        stopTracking() {
            if (reqId) {
                cancelAnimationFrame(reqId);
            }
        },
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
