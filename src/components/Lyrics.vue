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

let timer = null;

export default {
    name: "Test",
    props: ['lines'],
    data() {
        return {
            startTime: null,
            activeLine: null,
        }
    },
    mounted() {
        this.startTime = Date.now();
        timer = setInterval(() => {
            this.checkLine();
        }, 1000);
    },
    methods: {
        checkLine() {
            let estimate = Date.now() - this.startTime;
            console.log(estimate);
            for (const [i, line] of this.lines.entries()) {
                if (estimate > line.time && estimate < this.lines[i + 1].time && this.activeLine !== i) {
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
