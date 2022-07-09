import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            time: 0,
            currentNote: null,
            transpose: 0,
        }
    },
    mutations: {
        setTime(state, payload) {
            state.time = payload;
        },
        setNote(state, currentNote) {
            state.currentNote = currentNote;
        },
        setTranspose(state, transpose) {
            state.transpose = transpose;
        }
    }
})

export default store;
