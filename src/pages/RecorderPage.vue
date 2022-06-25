<template>
    <CurrentNote :isRec="isRec"/>
    <div class="control-buttons">
        <button class="btn" v-show="!isRec" @click="isRec = true">Rec</button>
        <button class="btn" v-show="isRec" @click="isRec = false">Stop</button>
    </div>
</template>

<script>
import CurrentNote from '../components/CurrentNote.vue';
export default {
    name: "Test",
    data() {
        return {
            isRec: false,
        }
    },
    components: {
        CurrentNote
    }
}
</script>

<style scoped>

</style>
