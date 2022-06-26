import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            time: 0,
            currentNote: null,
        }
    },
    mutations: {
        setTime(state, payload) {
            state.time = payload;
        },
        setNote(state, currentNote) {
            state.currentNote = currentNote;
        }
    }
})

export default store;
