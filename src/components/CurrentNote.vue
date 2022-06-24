<script setup>
import aubio from "aubiojs";
import {onMounted, ref, watch} from "vue";

const bufferSize = 4096;
const middleA = 440;
const semitone = 69;
const noteStrings = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];
const noteStringsRus = ["До", "До♯", "Ре", "Ре♯", "Ми", "Фа", "Фа♯", "Соль", "Соль♯", "Ля", "Ля♯", "Си"];

let notes = [];

const props = defineProps(['isRec'])

const note = ref({});

onMounted(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(async (stream) => {
        const audioContext = new AudioContext();
        const analyser = audioContext.createAnalyser();
        const scriptProcessor = audioContext.createScriptProcessor(bufferSize, 1, 1);

        const { Pitch } = await aubio();
        let pitchDetector = new Pitch("default", bufferSize, 1, audioContext.sampleRate);
        audioContext.createMediaStreamSource(stream).connect(analyser);
        analyser.connect(scriptProcessor);
        scriptProcessor.connect(audioContext.destination);

        scriptProcessor.addEventListener("audioprocess", (event) => {
            const frequency = pitchDetector.do(event.inputBuffer.getChannelData(0));
            if (frequency) {
                const currentNote = getNote(frequency);
                const noteInfo = {
                    name: noteStrings[currentNote % 12],
                    nameRus: noteStringsRus[currentNote % 12],
                    value: currentNote,
                    cents: getCents(frequency, currentNote),
                    octave: parseInt(currentNote / 12) - 1,
                    frequency: frequency,
                    time: props.isRec ? Date.now() : null,
                };
                note.value = noteInfo;
                if (props.isRec) {
                    notes.push(noteInfo);
                }
            }
        });
    });
})

watch(() => props.isRec, async (newValue, oldValue) => {
    if (!props.isRec) {
        console.log(notes);
        notes = [];
    }
})

function getNote(frequency) {
    const note = 12 * (Math.log(frequency / middleA) / Math.log(2));
    return Math.round(note) + semitone;
}

function getStandardFrequency(note) {
    return middleA * Math.pow(2, (note - semitone) / 12);
}

function getCents(frequency, note) {
    return Math.floor((1200 * Math.log(frequency / getStandardFrequency(note))) / Math.log(2));
}
</script>

<template>
    <div class="current-note">
        <div>
            <span>Нота:</span>
            <strong v-if="note">{{ note.name }} ({{ note.nameRus }})</strong>
        </div>
        <div>
            <span>Октава:</span>
            <strong v-if="note">{{ note.octave }}</strong>
        </div>
    </div>
</template>

<style scoped>

.current-note {
    position: fixed;
    top: 0;
    left: 0;
    padding: 15px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    font-size: 1rem;
}
.current-note {
    margin: 0;
}
.current-note span {
    font-size: 0.8rem;
    opacity: 0.5;
    margin-right: 5px;
}

</style>
