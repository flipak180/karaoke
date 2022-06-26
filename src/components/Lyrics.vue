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
import {mapState} from "vuex";

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
        ...mapState(['time'])
    },
    mounted() {
        timer = setInterval(() => {
            this.checkLine();
        }, 1000);
    },
    methods: {
        checkLine() {
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
