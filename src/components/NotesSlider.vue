<template>
    <div class="notes-slider" v-if="notes">
        <div class="notes-wrapper">
            <div class="note" v-for="note in prepareNotes" :style="note.styles"></div>
        </div>
    </div>
</template>

<script>
const MIN_NOTE = 30;

const MAX_NOTE = 70;

export default {
    name: "NotesSlider",
    // props: {
    //     notes: {
    //         type: Array,
    //         default: []
    //     },
    // },
    data() {
        return {
            notes: null,
        }
    },
    mounted() {
        this.notes = JSON.parse(localStorage.getItem('notes'));
    },
    computed: {
        prepareNotes() {
            console.log(this.notes);
            // let left = 0;
            return this.notes.map((note, index) => {
                const width = (note.end - note.start) / 15;
                // left += width + (index * 50);
                const left = note.start / 15;
                const diff = MAX_NOTE - note.number;
                const top = diff + diff;
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
