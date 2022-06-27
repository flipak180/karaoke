<template>
    <div class="notes-slider">
        <CurrentNotePoint v-if="currentNote" :note="currentNote.number" />
        <div class="notes-wrapper" v-if="notes" :style="{width: duration + 'px'}" ref="notesWrapper">
            <div class="note" v-for="note in prepareNotes" :style="note.styles"></div>
        </div>
    </div>
</template>

<script>
import {MAX_NOTE} from "../models/Note.js";
import CurrentNotePoint from "./CurrentNotePoint.vue";
import {mapState} from "vuex";

export default {
    name: "NotesSlider",
    // props: ['duration'],
    components: {
        CurrentNotePoint
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
            // notes: null,
        }
    },
    mounted() {
        // this.notes = JSON.parse(localStorage.getItem('notes'));
        // this.$nextTick(() => {
        //     this.$refs.notesWrapper.animate([
        //         { transform: 'translateX(0)' },
        //         { transform: `translateX(-${this.duration}px)` }
        //     ], {
        //         duration: this.duration,
        //     })
        // });
    },
    computed: {
        ...mapState(['time', 'currentNote']),
        prepareNotes() {
            // let left = 0;
            return this.notes.map((note, index) => {
                note.start += 40000;
                note.end += 40000;


                const width = note.end - note.start;
                // left += width + (index * 50);
                const left = note.start;
                const top = (MAX_NOTE - note.number) * 2;
                note.styles = {
                    width: width + 'px',
                    left: left + 'px',
                    top: top + 'px',
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
