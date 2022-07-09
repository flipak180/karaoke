<template>
    <div class="current-note-point" :style="{bottom: top + '%'}"></div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "CurrentNotePoint",
    props: ['maxNote', 'minNote'],
    computed: {
        ...mapState(['currentNote', 'transpose']),
        top() {
            if (!this.currentNote) {
                return 50;
            }

            const number = this.currentNote.number + (this.transpose * 12);
            return (number - this.minNote.number) / ((this.maxNote.number - this.minNote.number) / 100);

            // if (topRatio < 0 || topRatio > 100) {
            //     topRatio = 1000;
            // }
        }
    },
}
</script>

<style scoped>

</style>
