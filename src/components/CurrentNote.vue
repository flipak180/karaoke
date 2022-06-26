<template>
    <div class="current-note">
        <div>
            <span>Нота:</span>
            <strong v-if="currentNote">{{ currentNote.name }} ({{ currentNote.nameRus }})</strong>
        </div>
        <div>
            <span>Октава:</span>
            <strong v-if="currentNote">{{ currentNote.octave }}</strong>
        </div>
    </div>
</template>

<script>
import Note from "../models/Note.js";
import AudioProcess from "../models/AudioProcess.js";
import CurrentNotePoint from "./CurrentNotePoint.vue";
import {mapState} from "vuex";

export default {
    name: "CurrentNote",
    components: {
        CurrentNotePoint,
    },
    computed: {
        ...mapState(['currentNote'])
    },
    mounted() {
        new AudioProcess(frequency => {
            this.$store.commit('setNote', frequency ? new Note(frequency) : null);
        });
    },
}
</script>

<style scoped>

</style>
