<template>
    <div class="current-note-point" :style="styles"></div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "CurrentNotePoint",
    props: ['maxNote', 'minNote'],
    data() {
        return {
            styles: {}
        }
    },
    computed: {
        ...mapState(['currentNote']),
        top() {
            // console.log(this.currentNote.frequency);
            //console.log(this.number);
            // return (MAX_NOTE - this.number) * 2;
            // return this.currentNote.frequency;
        }
    },
    watch: {
        currentNote() {
            let topRatio = this.currentNote ?
                (this.currentNote.number - this.minNote.number) / ((this.maxNote.number - this.minNote.number) / 100) :
                50;
            // if (topRatio < 0 || topRatio > 100) {
            //     topRatio = 1000;
            // }
            this.styles = {
                bottom: topRatio + '%',
            }
        }
    }
}
</script>

<style scoped>

</style>
