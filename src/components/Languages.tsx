import { UseLanguageStore } from "@/store/language"

const Languages = () => {
    const language = UseLanguageStore(state => state.language)
  return (
    <div className="flex flex-col gap-2">
        {language === 'english' && 
            <>
                <h2 className="font-bold sm:text-xl dark:text-white text-base duration-300">Languages spoken</h2>
                <div className="flex flex-wrap gap-3 dark:text-white">
                    <article className="flex  flex-col items-center justify-center border rounded-full duration-300 hover:border-zinc-900 dark:border-zinc-600  dark:hover:border-zinc-100 p-2 bg-gradient-to-r dark:from-slate-900 dark:to-zinc-950 from-slate-50 to-blue-200 relative shrink-0 overflow-hidden size-16 ">
                        <span className="text-sm w-[70%] aspect-auto object-cover ">
                            <img src="https://goodies.icons8.com/web/common/header/flags/es.svg" alt="bandera de españa" />
                        </span>
                        <span className="text-xs">native</span>    
                    </article> 
                    <article className="flex flex-col items-center justify-center border rounded-full duration-300 hover:border-zinc-900 dark:border-zinc-600  dark:hover:border-zinc-100 p-2 bg-gradient-to-r dark:from-slate-900 dark:to-zinc-950 from-slate-50 to-blue-200 relative shrink-0 overflow-hidden size-16">
                        <span className="text-sm w-[70%] aspect-auto object-cover ">
                            <img src="https://goodies.icons8.com/web/common/header/flags/us.svg" alt="Bandera eeuu" />
                        </span>
                        <span className="text-xs">B2-</span>   
                    </article>  
                </div>
            </>
        }
        {language === 'spanish' && 
            <>
            <h2 className="font-bold sm:text-xl dark:text-white text-base duration-300">Idiomas hablados</h2>
            <div className="flex flex-wrap gap-3 dark:text-white">
                    <article className="flex  flex-col items-center justify-center border rounded-full duration-300 hover:border-zinc-900 dark:border-zinc-600  dark:hover:border-zinc-100 p-2 bg-gradient-to-r dark:from-slate-900 dark:to-zinc-950 from-slate-50 to-blue-200 relative shrink-0 overflow-hidden size-16 ">
                        <span className="text-sm w-[70%] aspect-auto object-cover ">
                            <img src="https://goodies.icons8.com/web/common/header/flags/es.svg" alt="bandera de españa" />
                        </span>
                        <span className="text-xs">nativo</span>    
                    </article>
                    <article className="flex flex-col items-center justify-center border rounded-full duration-300 hover:border-zinc-900 dark:border-zinc-600  dark:hover:border-zinc-100 p-2 bg-gradient-to-r dark:from-slate-900 dark:to-zinc-950 from-slate-50 to-blue-200 relative shrink-0 overflow-hidden size-16">
                        <span className="text-sm w-[70%] aspect-auto object-cover ">
                            <img src="https://goodies.icons8.com/web/common/header/flags/us.svg" alt="Bandera eeuu" />
                        </span>
                        <span className="text-xs">B2-</span>   
                    </article>  
                </div>
            </>
        }


    </div>
  )
}

export default Languages