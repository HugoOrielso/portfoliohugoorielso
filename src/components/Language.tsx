import { UseLanguageStore } from '@/store/language'
import React from 'react'


const Language = () => {
    const language = UseLanguageStore(state => state.language)
    const setLanguage = UseLanguageStore(state => state.changeLanguage)
    
    const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value)
    }
    
    return (
    <div className="relative w-full max-w-[6em]">
        <label htmlFor="language_selection"></label>
        <select
            id='language_selection'
            name={language}
            value={language}
            onChange={handleLanguage}
            className="w-full appearance-none border bg-black text-white rounded  focus:outline-none focus:ring-2 focus:ring-transparent focus:border-zinc-500 p-1"
        >
            <option className="bg-black text-white focus:bg-zinc-500" value="spanish">
                Español 
            </option>
            <option className="bg-black text-white focus:bg-zinc-500" value="english">
                English
            </option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.293-3.294a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
        </div>
    </div>

    )
}

export default Language