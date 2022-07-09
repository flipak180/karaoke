<template>
    <span v-for="note in notes" :style="{bottom: getBottom(note.number)}" class="note-label" v-html="note.title"></span>
</template>

<script>
import Note from "../models/Note.js";

const HEIGHT = 28;

export default {
    name: "NotesLabels",
    props: ['maxNote', 'minNote'],
    data() {
        return {
            notes: []
        }
    },
    mounted() {
        const noteStrings = Note.noteStrings;
        for (let number = this.maxNote.number; number >= this.minNote.number; number--) {
            let noteIndex = number % 12;
            let octave = Math.floor(number / 12);
            this.notes.push({
                number,
                title: noteStrings[noteIndex] + (noteIndex ? '' : `<sub>${octave}</sub>`),
            });
        }
    },
    methods: {
        getBottom(number) {
            let bottom = (number - this.minNote.number) / ((this.maxNote.number - this.minNote.number) / 100);
            return `calc(${bottom}% - ${HEIGHT / 2}px)`;
        }
    }
}
</script>

<style scoped>

</style>
