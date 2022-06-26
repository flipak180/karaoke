<template>
    <div class="current-note">
        <div>
            <span>Нота:</span>
            <strong v-if="note">{{ note.name }} ({{ note.nameRus }})</strong>
        </div>
        <div>
            <span>Октава:</span>
            <strong v-if="note">{{ note.octave }}</strong>
        </div>
    </div>
</template>

<script>
import Note from "../models/Note.js";
import AudioProcess from "../models/AudioProcess.js";

export default {
    name: "CurrentNote",
    data() {
        return {
            note: null
        }
    },
    mounted() {
        new AudioProcess(frequency => {
            this.note = frequency ? new Note(frequency) : null;
        });
    },
}
</script>

<style scoped>

</style>
