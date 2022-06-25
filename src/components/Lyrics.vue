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

.lyrics {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 900;
    font-size: 1.5rem;
    padding: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    /*height: calc(4rem + 60px);*/
    /*min-height: calc(4rem + 60px);*/
    /*line-height: 2rem;*/
    /*overflow: hidden;*/
}

/*.lines {*/
/*    position: absolute;*/
/*    top: 0;*/
/*    margin-top: 30px;*/
/*}*/

.lyrics p {
    display: none;
    /*margin-bottom: 1rem;*/
    margin-bottom: 0;
}

.lyrics .active,
.lyrics .next {
    display: block;
}

.lyrics .next {
    font-size: 1rem;
    opacity: 0.5;
}

</style>
