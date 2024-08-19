import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface StateLanguage {
    language: string 
    changeLanguage: (idiom:string) => void
}

export const UseQuestionsStore = create<StateLanguage>()(persist((set) => {
    return {
        language: 'spanish',
        changeLanguage(idiom) {
            set({ language: idiom })
        },
    }
}, {
    name: 'test'
}))