import BlurFade from '@/components/magicui/blur-fade'
import { dataEnglish, dataSpanish } from '@/data'
import { UseLanguageStore } from '@/store/language'


const Experience = () => {
    const language = UseLanguageStore(state=> state.language)
  return (
    <section className='flex flex-col gap-2 dark:text-white pt-14' id='experience'>
        <BlurFade  delay={0.05}>
            {language === 'spanish' &&
                <h2 className="font-bold sm:text-3xl text-lg duration-300 dark:text-white">Experiencia laboral</h2>
            }
            {language === 'english' &&
                <h2 className="font-bold sm:text-3xl text-lg duration-300 dark:text-white">Work experience</h2>
            }
        </BlurFade>


        <div className="flex flex-col gap-4 ">
            {language === 'english' &&
            <>
                {
                    dataEnglish.work.map((item)=>{
                        return(
                        <BlurFade delay={0.5} inView key={crypto.randomUUID()}>
                            <article  className="flex items-start justify-center gap-4">
                                <div className={`relative flex shrink-0 overflow-hidden rounded-full border size-16   border-zinc-500`} style={{background: item.background}}>
                                    <img src={item.logoUrl} alt={item.alt} className='aspect-square h-full w-full object-contain'/>
                                </div>
                                <main>
                                    <div>
                                        <div className='flex w-full justify-between items-start'>
                                            <div >
                                                <h3 className="font-bold items-center justify-center leading-none text-sm sm:text-base duration-300">{item.company}</h3>
                                                <h3 className=" items-center justify-center font-semibold leading-none text-sm sm:text-base text-yellow-500">{item.title}</h3>
                                            </div>
                                            <span className=' text-xs sm:text-sm tabular-nums text-muted-foreground text-right duration-300'>
                                                <p>{item.start} - {item.end}</p>
                                            </span>
                                        </div>
                                    </div>
                                    <p className='mt-2 text-xs sm:text-sm dark:text-zinc-200 duration-300  text-zinc-900'>
                                        {item.description}
                                    </p>
                                </main>
                            </article>
                        </BlurFade>
                        )
                    })
                }
            </>
            }

            {language === 'spanish' &&
            <>
                {
                    dataSpanish.work.map((item)=>{
                        return(
                        <BlurFade delay={0.5} inView key={crypto.randomUUID()}>
                            <article  className="flex items-start justify-center gap-4">
                                <div className={`relative flex shrink-0 overflow-hidden rounded-full border size-16   border-zinc-500`} style={{background: item.background}}>
                                    <img src={item.logoUrl} alt={item.alt} className='aspect-square h-full w-full object-contain'/>
                                </div>
                                <main>
                                    <div>
                                        <div className='flex w-full justify-between items-start'>
                                            <div >
                                                <h3 className="font-bold items-center justify-center leading-none text-sm sm:text-base duration-300">{item.company}</h3>
                                                <h3 className=" items-center justify-center font-semibold leading-none text-sm sm:text-base text-yellow-500">{item.title}</h3>
                                            </div>
                                            <span className=' text-xs sm:text-sm tabular-nums text-muted-foreground text-right duration-300'>
                                                <p>{item.start} - {item.end}</p>
                                            </span>
                                        </div>
                                    </div>
                                    <p className='mt-2 text-xs sm:text-sm dark:text-zinc-200 duration-300  text-zinc-900'>
                                        {item.description}
                                    </p>
                                </main>
                            </article>
                        </BlurFade>
                        )
                    })
                }
            </>
            }
        </div>
    </section>
  )
}

export default Experience