export default class Note {

    static get middleA() {
        return 440;
    }

    static get semitone() {
        return 69;
    }

    static get noteStrings() {
        return ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];
    }

    static get noteStringsRus() {
        return ["До", "До♯", "Ре", "Ре♯", "Ми", "Фа", "Фа♯", "Соль", "Соль♯", "Ля", "Ля♯", "Си"];
    }

    constructor(frequency) {
        const currentNote = this.getNote(frequency);

        this.name = Note.noteStrings[currentNote % 12];
        this.nameRus = Note.noteStringsRus[currentNote % 12];
        this.value = currentNote;
        // this.cents = this.getCents(frequency, currentNote);
        this.octave = Math.floor(currentNote / 12) - 1;
        this.frequency = frequency;
        this.number = currentNote % 12 + (this.octave * 12);
    }

    getNote(frequency) {
        const note = 12 * (Math.log(frequency / Note.middleA) / Math.log(2));
        return Math.round(note) + Note.semitone;
    }

    getStandardFrequency(note) {
        return Note.middleA * Math.pow(2, (note - Note.semitone) / 12);
    }

    getCents(frequency, note) {
        return Math.floor((1200 * Math.log(frequency / this.getStandardFrequency(note))) / Math.log(2));
    }

    getInfo() {
        return {}
    }
}
