<template>
    <div class="notes-slider">
        <div class="notes-wrapper" v-if="notes" :style="{width: duration + 'px'}" ref="notesWrapper">
            <div class="note" v-for="note in prepareNotes" :style="note.styles"></div>
        </div>
    </div>
</template>

<script>
import {Transition} from "vue";

const MIN_NOTE = 30;

const MAX_NOTE = 70;

export default {
    name: "NotesSlider",
    // props: ['duration'],
    components: {
        Transition
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
        this.$nextTick(() => {
            this.$refs.notesWrapper.animate([
                { transform: 'translateX(0)' },
                { transform: `translateX(-${this.duration}px)` }
            ], {
                duration: this.duration,
            })
        });
    },
    computed: {
        prepareNotes() {
            console.log(this.notes);
            // let left = 0;
            return this.notes.map((note, index) => {
                const width = note.end - note.start;
                // left += width + (index * 50);
                const left = note.start;
                const diff = MAX_NOTE - note.number;
                const top = diff * 2;
                note.styles = {
                    width: width + 'px',
                    left: left + 'px',
                    top: top + 'px',
                }
                return note;
            });
        },
    },
}
</script>

<style scoped>

</style>
