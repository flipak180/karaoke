<template>
    <div class="control-buttons">
        <button class="btn" v-show="!isRec" @click="start">Rec</button>
        <button class="btn" v-show="isRec" @click="stop">Stop</button>
    </div>
</template>

<script>
import Note from "../models/Note.js";
import AudioProcess from "../models/AudioProcess.js";

let notes = [];
let processor = null;

export default {
    name: "Recorder",
    data() {
        return {
            isRec: false,
        }
    },
    methods: {
        start() {
            this.isRec = true;
            processor = new AudioProcess((frequency) => {
                if (frequency) {
                    const note = new Note(frequency);
                    notes.push(note);
                }
            });
        },
        stop() {
            this.isRec = false;
            localStorage.setItem('notes', JSON.stringify(notes));
            console.log(notes);
            notes = [];
            processor.stop();
        }
    }
}
</script>

<style scoped>

</style>
