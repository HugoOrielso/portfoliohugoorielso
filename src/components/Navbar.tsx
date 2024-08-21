import { dataEnglish, dataSpanish } from '@/data';
import React, { useState } from 'react';
import Language from './Language';
import { UseLanguageStore } from '@/store/language';
const Navbar = () => {
    const language = UseLanguageStore(state => state.language)
    const [open,setOpen] = useState<boolean>(false)
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' }); 
        }
    };

    const toggleMenu = () => {
        setOpen(!open)
    }

  return (
    <header className="flex sm:p-1 flex-col top-0 left-0 items-center z-50 bg-[#24242428] backdrop-blur-md justify-center w-full mb-4 fixed sm:dark:border-b">
        {language === 'english' && <>
        <div className='flex w-full items-center justify-between p-2 dark:text-white border-b border-zinc-900 dark:border-white sm:hidden'>
            <Language />
            <button onClick={toggleMenu} className='flex items-center border-zinc-800 dark:border-white justify-center border rounded p-2 sm:hidden'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>    
            </button>
        </div>
        <div className='hidden sm:flex items-center w-full justify-between gap-10 max-w-[850px]'> 
            <Language />
            <nav className={`hidden sm:flex gap-2 p-1 w-full list-none items-center justify-end sm:max-w-[1000px] dark:text-white text-xs sm:text-base`}>
                {
                    dataEnglish.links.map(item=>{
                        return(
                            <li key={crypto.randomUUID()}>
                                <a href={`#${item.section}`} onClick={(e) => scrollToSection(e, `${item.section}`)} className="dark:text-zinc-300 transition-all duration-300  p-1 rounded hover:text-yellow-500 dark:hover:text-yellow-500">{item.name}</a>
                            </li>
                            
                        )
                    })
                }
            </nav>
        </div>
        <nav className={`${open ? 'flex': 'hidden'} sm:hidden h-screen flex-col w-full list-none items-start gap-2 justify-start sm:max-w-[1000px] dark:text-white text-xs sm:text-base duration-300 mt-2`}>
            {
                dataEnglish.links.map(item=>{
                    return(
                        <li key={crypto.randomUUID()} className='flex w-full px-2'>
                            <a href={`#${item.section}`} onClick={(e) => scrollToSection(e, `${item.section}`)} className="dark:text-white text-lg w-full">{item.name}</a>
                        </li>
                    )
                })
            }
        </nav>
        </>}


        {language === 'spanish' && <>
        <div className='flex w-full items-center justify-between p-2 dark:text-white border-b border-zinc-900 dark:border-white sm:hidden'>
            <Language />
            <button onClick={toggleMenu} className='flex items-center border-zinc-800 dark:border-white justify-center border rounded p-2 sm:hidden'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>    
            </button>
        </div>
        <div className='hidden sm:flex items-center w-full justify-between gap-10 max-w-[850px]'> 
            <Language />
            <nav className={`hidden sm:flex gap-2 p-1 w-full list-none items-center justify-end sm:max-w-[1000px] dark:text-white text-xs sm:text-base`}>
                {
                    dataSpanish.links.map(item=>{
                        return(
                            <li key={crypto.randomUUID()}>
                                <a href={`#${item.section}`} onClick={(e) => scrollToSection(e, `${item.section}`)} className="dark:text-zinc-300 transition-all duration-300  p-1 rounded hover:text-yellow-500 dark:hover:text-yellow-500">{item.name}</a>
                            </li>
                            
                        )
                    })
                }
            </nav>
        </div>
        <nav className={`${open ? 'flex': 'hidden'} sm:hidden h-screen flex-col w-full list-none items-start gap-2 justify-start sm:max-w-[1000px] dark:text-white text-xs sm:text-base duration-300 mt-2`}>
            {
                dataSpanish.links.map(item=>{
                    return(
                        <li key={crypto.randomUUID()} className='flex w-full px-2'>
                            <a href={`#${item.section}`} onClick={(e) => scrollToSection(e, `${item.section}`)} className="dark:text-white text-lg w-full">{item.name}</a>
                        </li>
                    )
                })
            }
        </nav>
        </>}
    </header>
  );
};

export default Navbar;
