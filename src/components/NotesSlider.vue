<template>
    <div class="notes-slider">
        <div class="notes-wrapper">
            <CurrentNotePoint :minNote="minNote" :maxNote="maxNote" />
            <NotesLabels :minNote="minNote" :maxNote="maxNote" />
            <div class="note-slider-panel" v-if="notes" :style="{width: duration + 'px'}" ref="notesWrapper">
                <div class="note" v-for="note in prepareNotes" :style="note.styles"></div>
            </div>
        </div>
    </div>
</template>

<script>
import CurrentNotePoint from "./CurrentNotePoint.vue";
import {mapState} from "vuex";
import NotesLabels from "./NotesLabels.vue";

const NOTE_HEIGHT = 20;

export default {
    name: "NotesSlider",
    // props: ['duration'],
    components: {
        CurrentNotePoint,
        NotesLabels
    },
    props: {
        notes: {
            type: Array,
            default: []
        },
        duration: {
            type: Number,
        }
    },
    data() {
        return {
            minNote: null,
            maxNote: null,
            notesWrapperHeight: null,
        }
    },
    mounted() {
        this.notesWrapperHeight = this.$refs.notesWrapper.clientHeight;
    },
    computed: {
        ...mapState(['time', 'currentNote']),
        prepareNotes() {
            for (let note of this.notes) {
                if (!this.minNote || (note.number < this.minNote.number)) {
                    this.minNote = note;
                }
                if (!this.maxNote || (note.number > this.maxNote.number)) {
                    this.maxNote = note;
                }
            }

            // let left = 0;
            return this.notes.map((note, index) => {
                note.start += 40000;
                note.end += 40000;

                const width = note.end - note.start;
                // left += width + (index * 50);
                const left = note.start;
                const topRatio = (note.number - this.minNote.number) / ((this.maxNote.number - this.minNote.number) / 100);
                //console.log(topRatio);
                note.styles = {
                    width: width + 'px',
                    left: left + 'px',
                    // top: top + 'px',
                    bottom: `calc(${topRatio}% - ${NOTE_HEIGHT / 2}px)`,
                    height: NOTE_HEIGHT + 'px',
                }
                return note;
            });
        },
    },
    watch: {
        time() {
            this.$refs.notesWrapper.style.transform = `translateX(-${this.time}px)`;
        }
    }
}
</script>

<style scoped>

</style>
