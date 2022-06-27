<template>
    <div class="current-note-point" :style="{bottom: top + 'px'}"></div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "CurrentNotePoint",
    props: ['note'],
    computed: {
        ...mapState(['currentNote']),
        top() {
            console.log(this.currentNote.frequency);
            //console.log(this.number);
            // return (MAX_NOTE - this.number) * 2 + 30; // with padding 30
            return this.currentNote.frequency; // with padding 30
        }
    }
}
</script>

<style scoped>

</style>
