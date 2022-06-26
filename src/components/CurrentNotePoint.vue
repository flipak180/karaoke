<template>
    <div class="current-note-point" :style="{top: top + 'px'}"></div>
</template>

<script>
import {MAX_NOTE} from "../models/Note.js";

export default {
    name: "CurrentNotePoint",
    props: {
        number: {
            type: Number,
        },
    },
    computed: {
        top() {
            console.log(this.number);
            return (MAX_NOTE - this.number) * 2;
        }
    }
}
</script>

<style scoped>

</style>
