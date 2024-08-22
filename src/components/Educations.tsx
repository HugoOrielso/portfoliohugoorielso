import BlurFade from "@/components/magicui/blur-fade"
import { dataEnglish, dataSpanish } from "@/data"
import { UseLanguageStore } from "@/store/language"
import Languages from "./Languages"

const Education = () => {
    const language = UseLanguageStore(state=>state.language)
    return (
    <>
        <section  className="flex flex-col w-full mt-2 pt-14 gap-4" id="education">
            <BlurFade delay={0.01}>
                {language === 'english' &&
                    <h2 className="font-bold sm:text-2xl dark:text-white text-lg duration-300">Education</h2>
                }
                {language === 'spanish' &&
                    <h2 className="font-bold sm:text-2xl dark:text-white text-lg duration-300">Educación</h2>
                }
            </BlurFade>
            {language === 'english' && <>
            {
                dataEnglish.education.map((item)=>{
                    return(
                    <BlurFade delay={0.05} key={crypto.randomUUID()}>
                    <div className="flex w-full items-center justify-between gap-4">
                        <div className="relative flex shrink-0 overflow-hidden rounded-full border size-16 border-zinc-500" style={{background: item.background}}>
                            <img src={item.logoUrl} alt="logo university" className='aspect-square h-full w-full object-contain'/>
                        </div>
                        <div className="flex items-start justify-between w-full">
                            <div className="flex items-start flex-col justify-between  dark:text-white">
                                <h3 className="flex flex-col items-center justify-center font-semibold  text-xs sm:text-base duration-300">{item.school} </h3>
                                <p className="font-sans sm:text-base text-yellow-500">{item.degree}</p>
                            </div>
                            <div>
                                <p className="dark:text-white flex w-full text-xs sm:text-sm tabular-nums text-muted-foreground duration-300"> {item.start} - {item.end}</p>
                            </div>
                        </div>
                    </div> 
                    <div className="mt-3">
                        <Languages/>
                    </div>
                    </BlurFade>
                    )
                })
            }
            </>}
            {language === 'spanish' && <>
            {
                dataSpanish.education.map((item)=>{
                    return(
                    <BlurFade delay={0.05} key={crypto.randomUUID()}>
                    <div className="flex w-full items-center justify-between gap-4">
                        <div className="relative flex shrink-0 overflow-hidden rounded-full border size-16 border-zinc-500" style={{background: item.background}}>
                            <img src={item.logoUrl} alt="logo university" className='aspect-square h-full w-full object-contain'/>
                        </div>
                        <div className="flex items-start justify-between w-full">
                            <div className="flex items-start flex-col justify-between  dark:text-white">
                                <h3 className="flex flex-col items-center justify-center font-semibold  text-xs sm:text-base duration-300">{item.school} </h3>
                                <p className="font-sans sm:text-base text-yellow-500">{item.degree}</p>
                            </div>
                            <div>
                                <p className="dark:text-white flex w-full text-xs sm:text-sm tabular-nums text-muted-foreground duration-300"> {item.start} - {item.end}</p>
                            </div>

                        </div>
                    </div> 
                    <div className="mt-3">
                        <Languages/>
                    </div>
                    </BlurFade>
                    )
                })
            }
            </>}
        </section>
    </>
  )
}

export default Education