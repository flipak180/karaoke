import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            time: 0,
            currentNote: null,
        }
    },
})
