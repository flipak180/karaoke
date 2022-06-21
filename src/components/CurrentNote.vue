<template>
    <div class="current-note">
        <p>
            Нота: <strong v-if="noteInfo">{{ noteInfo.name }} ({{ noteInfo.nameRus }})</strong>
        </p>
        <p>
            Октава: <strong v-if="noteInfo">{{ noteInfo.octave }}</strong>
        </p>
    </div>
</template>

<script>
import aubio from "aubiojs";

export default {
    name: "CurrentNote",
    data() {
        return {
            noteInfo: null,

            pitchDetector: null,
            bufferSize: 4096,
            middleA: 440,
            semitone: 69,
            noteStrings: ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"],
            noteStringsRus: ["До", "До♯", "Ре", "Ре♯", "Ми", "Фа", "Фа♯", "Соль", "Соль♯", "Ля", "Ля♯", "Си"]
        }
    },
    mounted() {
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            const audioContext = new AudioContext();
            const analyser = audioContext.createAnalyser();
            const scriptProcessor = audioContext.createScriptProcessor(this.bufferSize, 1, 1);

            aubio().then((aubio) => {
                this.pitchDetector = new aubio.Pitch("default", this.bufferSize, 1, audioContext.sampleRate);

                audioContext.createMediaStreamSource(stream).connect(analyser);
                analyser.connect(scriptProcessor);
                scriptProcessor.connect(audioContext.destination);
                scriptProcessor.addEventListener("audioprocess", (event) => {
                    const frequency = this.pitchDetector.do(event.inputBuffer.getChannelData(0));
                    if (frequency) {
                        const note = this.getNote(frequency);
                        this.noteInfo.value = {
                            name: this.noteStrings[note % 12],
                            nameRus: this.noteStringsRus[note % 12],
                            value: note,
                            cents: this.getCents(frequency, note),
                            octave: parseInt(note / 12) - 1,
                            frequency: frequency,
                        };
                        console.log(this.noteInfo.value);
                    }
                });
            });
        });
    },
    methods: {
        getNote(frequency) {
            const note = 12 * (Math.log(frequency / this.middleA) / Math.log(2));
            return Math.round(note) + this.semitone;
        },
        getStandardFrequency(note) {
            return this.middleA * Math.pow(2, (note - this.semitone) / 12);
        },
        getCents(frequency, note) {
            return Math.floor((1200 * Math.log(frequency / this.getStandardFrequency(note))) / Math.log(2));
        },
    }
}
</script>

<style scoped>

.current-note {
    position: fixed;
    top: 0;
    left: 0;
    padding: 15px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
}

</style>
