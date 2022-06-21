<template>
    <div v-show="isOn">
        <Video />
        <Lyrics />
        <CurrentNote />
    </div>
    <div class="play" @click="play" v-show="!isOn">Play</div>
</template>

<script>
import Lyrics from "./components/Lyrics.vue";
import Video from "./components/Video.vue";
import CurrentNote from "./components/CurrentNote.vue";

export default {
    name: "App",
    data() {
        return {
            isOn: false
        }
    },
    components: {
        Lyrics,
        Video,
        CurrentNote
    },
    methods: {
        play() {
            this.isOn = true;
            document.getElementById('video').play();
        }
    }
}
</script>

<style>

html,
body {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    background: url("https://images5.alphacoders.com/577/577743.jpg") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100vh;
}

.play {
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 10;
    background: #000;
    padding: 10px 30px;
    color: #fff;
    font-size: 42px;
    cursor: pointer;
    border-radius: 5px;
}

@media (max-width: 575px) {
    html,
    body {
        font-size: 10px;
    }
}

</style>
