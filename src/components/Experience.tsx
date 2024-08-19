import { data } from '@/data'
import BlurFade from '@/components/magicui/blur-fade'

const Experience = () => {
  return (
    <section className='flex flex-col gap-2 dark:text-white py-8'>
        <BlurFade  delay={0.05}>
            <h2 className="font-bold text-dark  dark:text-white mb-2 sm:text-2xl duration-300">Work experience</h2>
        </BlurFade>


        <div className="flex flex-col gap-4 ">
            {
                data.work.map((item,index)=>{
                    return(
                    <BlurFade delay={0.5} inView key={index}>
                        <article  className="flex items-start justify-center gap-4">
                            <div className={`relative flex shrink-0 overflow-hidden rounded-full border size-16   border-zinc-500`} style={{background: item.background}}>
                                <img src={item.logoUrl} alt={item.alt} className='aspect-square h-full w-full object-contain'/>
                            </div>
                            <main>
                                <div>
                                    <div className='flex w-full justify-between items-start'>
                                        <div >
                                            <h3 className="font-bold items-center justify-center leading-none text-xs sm:text-sm duration-300">{item.company}</h3>
                                            <h3 className=" items-center justify-center font-semibold leading-none text-xs sm:text-sm text-yellow-500">{item.title}</h3>
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
        </div>
    </section>
  )
}

export default Experience