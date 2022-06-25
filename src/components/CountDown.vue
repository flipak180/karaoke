<template>
    <div class="count-down" v-show="isVisible">{{ countDownNum }}</div>
</template>

<script>
let timer = null;

export default {
    name: "CountDown",
    props: {
        number: {
            type: Number,
            default: 5
        },
    },
    data() {
        return {
            countDownNum: this.number,
            isVisible: false,
        }
    },
    mounted() {
        if (this.countDownNum >= 1) {
            this.isVisible = true;

            setTimeout(() => {
                this.start();
            }, 200);
        } else {
            this.$emit('end');
        }
    },
    methods: {
        start() {
            timer = setInterval(() => {
                if (this.countDownNum <= 1) {
                    clearInterval(timer);
                    this.isVisible = false;
                    this.$emit('end');
                }
                this.countDownNum--;
            }, 1000);
        }
    }
}
</script>

<style scoped>

</style>
