<template>
    <div class="control-buttons">
        <button class="btn" v-show="!isRec" @click="start">Rec</button>
        <button class="btn" v-show="isRec" @click="stop">Stop</button>
    </div>
</template>

<script>
import Note from "../models/Note.js";
import AudioProcess from "../models/AudioProcess.js";

const ALLOW_EMPTY_NOTES = 5;

let notes = [];
let note = null;
let time = null;
let processor = null;
let emptyNotes = 0;

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
            time = Date.now();
            processor = new AudioProcess(frequency => {
                if (frequency && !note) {
                    note = new Note(frequency);
                    note.start = Date.now() - time;
                }

                if (frequency && note && !note.isEqual(frequency)) {
                    note.end = Date.now() - time;
                    notes.push(note);

                    note = new Note(frequency);
                    note.start = Date.now() - time;
                }

                if (!frequency && note) {
                    note.end = Date.now() - time;
                    notes.push(note);
                    note = null;

                    // emptyNotes++;
                    // if (emptyNotes > ALLOW_EMPTY_NOTES) {
                    //     note.end = Date.now() - time;
                    //     notes.push(note);
                    //     note = null;
                    // }
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
