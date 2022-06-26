<template>
    <div class="lyrics">
        <div class="lines">
            <!--        <p class="active">Paranoia is in bloom</p>-->
            <!--        <p class="next">The PR transmissions will resume</p>-->
            <p v-for="(line, index) in lines" :class="{
                active: activeLine && (index === activeLine),
                next: activeLine && (index === activeLine + 1)
            }">{{ line.text }}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useMainStore } from '../stores/main.js'

let timer = null;

export default {
    name: "Lyrics",
    props: ['lines'],
    data() {
        return {
            activeLine: null,
        }
    },
    computed: {
        ...mapState(useMainStore, ['time'])
    },
    mounted() {
        timer = setInterval(() => {
            this.checkLine();
        }, 1000);
    },
    methods: {
        checkLine() {
            console.log(this.time);
            for (const [i, line] of this.lines.entries()) {
                if (this.time > line.time && this.time < this.lines[i + 1].time && this.activeLine !== i) {
                    this.activeLine = i;
                    break;
                }
            }
        },
    }
}
</script>

<style scoped>

</style>
