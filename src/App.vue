<script setup>
import Lyrics from "./components/Lyrics.vue";
import Video from "./components/Video.vue";
import CurrentNote from "./components/CurrentNote.vue";
import {ref} from "vue";

const isOn = ref(false);
const isRec = ref(false);

function play() {
    isOn.value = true;
    document.getElementById('video').play();
}
</script>

<template>
    <div v-show="isOn">
        <Video />
        <Lyrics />
        <CurrentNote :isRec="isRec" />
    </div>

    <div class="control-buttons">
        <div class="btn" @click="play" v-show="!isOn">Play</div>
        <div class="btn" @click="isRec = true" v-show="!isRec">Record</div>
        <div class="btn" @click="isRec = false" v-show="isRec">Stop</div>
    </div>
</template>

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

.control-buttons {
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 10;
}

.btn {
    background: #000;
    padding: 10px 30px;
    color: #fff;
    font-size: 42px;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 30px;
}

@media (max-width: 575px) {
    html,
    body {
        font-size: 10px;
    }
}

</style>
