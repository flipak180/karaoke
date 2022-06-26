import aubio from "aubiojs";

export default class AudioProcess {

    scriptProcessor = null;
    pitchDetector = null;

    constructor(callback) {
        this.callback = callback;
        this.process();
    }

    process() {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(async (stream) => {
            const audioContext = new AudioContext();
            const analyser = audioContext.createAnalyser();
            this.scriptProcessor = audioContext.createScriptProcessor(4096, 1, 1);

            const { Pitch } = await aubio();
            this.pitchDetector = new Pitch("default", 4096, 1, audioContext.sampleRate);
            audioContext.createMediaStreamSource(stream).connect(analyser);
            analyser.connect(this.scriptProcessor);
            this.scriptProcessor.connect(audioContext.destination);

            this.scriptProcessor.addEventListener("audioprocess", this.handler);
        });
    }

    handler = (event) => {
        const frequency = this.pitchDetector.do(event.inputBuffer.getChannelData(0));
        this.callback(frequency);
    }

    stop = () => {
        this.scriptProcessor.removeEventListener("audioprocess", this.handler)
    }
}
