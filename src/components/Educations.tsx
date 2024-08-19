import BlurFade from "@/components/magicui/blur-fade"
import { data } from "@/data"
const Education = () => {
  return (
    <>
    <div className=" absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    <section id='education' className="flex flex-col w-full mt-2 py-8 gap-4">
        <BlurFade delay={0}>
            <h2 className="font-bold sm:text-2xl dark:text-white duration-300">Education</h2>
        </BlurFade>
            {
                data.education.map((item,index)=>{
                    return(
                    <BlurFade delay={0.05}>
                    <div className="flex w-full items-center justify-between gap-4" key={index}>
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
                    </BlurFade>
                    )
                })
            }
    </section>
    </>
  )
}

export default Education