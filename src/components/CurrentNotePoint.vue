<template>
    <div class="current-note-point" :style="{bottom}"></div>
</template>

<script>
import {mapState} from "vuex";

const HEIGHT = 4;
let timer;

export default {
    name: "CurrentNotePoint",
    props: ['maxNote', 'minNote'],
    data() {
        return {
            bottom: '50%',
        }
    },
    computed: {
        ...mapState(['currentNote', 'transpose']),
    },
    watch: {
        currentNote() {
            clearTimeout(timer);
            if (!this.currentNote) {
                timer = setTimeout(() => {
                    this.bottom = '50%';
                }, 500);
                return;
            }

            const number = this.currentNote.number + (this.transpose * 12);
            const bottom = (number - this.minNote.number) / ((this.maxNote.number - this.minNote.number) / 100);
            // if (topRatio < 0 || topRatio > 100) {
            //     topRatio = 1000;
            // }
            this.bottom = `calc(${bottom}% - ${HEIGHT / 2}px)`;
        }
    }
}
</script>

<style scoped>

</style>
