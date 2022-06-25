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

<script>
import aubio from "aubiojs";

const bufferSize = 4096;
const middleA = 440;
const semitone = 69;
const noteStrings = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];
const noteStringsRus = ["До", "До♯", "Ре", "Ре♯", "Ми", "Фа", "Фа♯", "Соль", "Соль♯", "Ля", "Ля♯", "Си"];

let notes = [];

export default {
    name: "CurrentNote",
    props: ['isRec'],
    data() {
        return {
            note: {}
        }
    },
    mounted() {
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
                    const currentNote = this.getNote(frequency);
                    const noteInfo = {
                        name: noteStrings[currentNote % 12],
                        nameRus: noteStringsRus[currentNote % 12],
                        value: currentNote,
                        cents: this.getCents(frequency, currentNote),
                        octave: parseInt(currentNote / 12) - 1,
                        frequency: frequency,
                        number: currentNote % 12 + ((parseInt(currentNote / 12) - 1) * 12),
                        time: this.isRec ? Date.now() : null,
                    };
                    this.note = noteInfo;
                    if (this.isRec) {
                        notes.push(noteInfo);
                    }
                }
            });
        });
    },
    watch: {
        isRec() {
            if (!this.isRec) {
                console.log(notes);
                notes = [];
            }
        }
    },
    methods: {
        getNote(frequency) {
            const note = 12 * (Math.log(frequency / middleA) / Math.log(2));
            return Math.round(note) + semitone;
        },
        getStandardFrequency(note) {
            return middleA * Math.pow(2, (note - semitone) / 12);
        },
        getCents(frequency, note) {
            return Math.floor((1200 * Math.log(frequency / this.getStandardFrequency(note))) / Math.log(2));
        },
    }
}
</script>

<style scoped>

</style>
