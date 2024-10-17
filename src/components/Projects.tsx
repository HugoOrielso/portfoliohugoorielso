import { dataEnglish, dataSpanish } from "@/data"
import Iconst from "./Iconst"
import BlurFade from "@/components/magicui/blur-fade"
import { UseLanguageStore } from "@/store/language"

const Projects = () => {
    const language = UseLanguageStore(state=>state.language)
    return (
    <>
        <section id="projects" className="grid grid-cols-1 place-items-start place-content-center pt-14">
            <BlurFade delay={0.01}>
                {language === 'english' &&
                    <h2 className="font-bold sm:text-3xl text-lg duration-300 dark:text-white pb-3">Projects</h2>
                }
                {language === 'spanish' &&
                    <h2 className="font-bold sm:text-3xl text-lg duration-300 dark:text-white pb-3">Proyectos</h2>
                }
            </BlurFade>
            {language === 'english' && <>
            {dataEnglish.projects.map((item)=>{
                return(
                    <BlurFade delay={0.05} inView key={crypto.randomUUID()}>
                    <div key={crypto.randomUUID()} className="flex mb-4 flex-col sm:grid grid-cols-[35%,1fr] sm:max-h-[300px] h-full rounded-lg border dark:hover:border-zinc-200 hover:border-zinc-950 border-zinc-300 dark:border-zinc-700 overflow-hidden   duration-300">
                        <div className="flex items-center justify-center w-full p-0 sm:p-1 bg-gradient-to-r from-blue-200 to-white dark:from-slate-700 dark:to-[#0B0B0B] flex-col overflow-hidden duration-300 hover:shadow-lg transition-all object-cover ease-out h-full">
                            <video autoPlay loop muted className="rounded-sm aspect-auto overflow-hidden sm:h-full sm:w-full max-h-[300px] w-full h-full">
                                <source src={item.video}/>
                                El video no carga en tu dispositivo
                            </video>
                        </div>
                        <div className="flex flex-col items-start justify-between bg-gradient-to-r from-white to-blue-100 dark:from-[#0B0B0B] dark:to-slate-900">
                            <div className="p-2">
                                <div className="flex  flex-col sm:flex-row w-full justify-between items-start sm:items-start">
                                    <h3 className=" sm:text-xl dark:text-yellow-500  font-bold">{item.title}</h3>
                                    <span className="text-xs items-start flex dark:text-white"> {item.dates} </span>
                                </div>
                                <p className="text-black dark:text-white overflow-hidden text-xs sm:text-base line-clamp-6" style={{display: "-webkit-box", WebkitBoxOrient: "vertical", textOverflow: "ellipsis", WebkitLineClamp: 6, lineClamp: 6}}> {item.description} </p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3  p-2">
                                <div className="flex gap-2 flex-wrap">
                                    {item.technologies.map((tec)=>{
                                        return(
                                            <div key={crypto.randomUUID()} className="flex items-center rounded-md border border-zinc-200 hover:border-zinc-900 bg-secondary px-1  dark:text-zinc-300 boder dark:border-zinc-700 dark:hover:border-zinc-100 duration-300 bg-zinc-900 dark:bg-zinc-100">
                                                <Iconst icon={tec} weight={null}/>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="flex gap-x-3  my-2">
                                {item.links.map(l=>{
                                    return(
                                        <a href={l.href} target="_blank" key={crypto.randomUUID()} className="bg-black rounded p-1 text-white transition-all duration-300 hover:scale-110">
                                            <Iconst icon={`${l.type.toLocaleLowerCase()}`} weight={null}/>
                                        </a>
                                    )
                                })}
                            </div>
                            </div>
                        </div>
                    </div>
                    </BlurFade>
                )
            })}
            </>}
            {language === 'spanish' && <>
            {dataSpanish.projects.map((item)=>{
                return(
                    <BlurFade delay={0.05} inView key={crypto.randomUUID()}>
                    <div key={crypto.randomUUID()} className="flex mb-4 flex-col sm:grid grid-cols-[35%,1fr] sm:max-h-[300px] h-full rounded-lg border dark:hover:border-zinc-200 hover:border-zinc-950 border-zinc-300 dark:border-zinc-700 overflow-hidden   duration-300">
                        <div className="flex items-center justify-center w-full p-0 sm:p-1 bg-gradient-to-r from-blue-200 to-white dark:from-slate-700 dark:to-[#0B0B0B] flex-col overflow-hidden duration-300 hover:shadow-lg transition-all object-cover ease-out h-full">
                            <video autoPlay loop muted className="rounded-sm aspect-auto overflow-hidden sm:h-full sm:w-full max-h-[300px] w-full h-full">
                                <source src={item.video}/>
                                El video no carga en tu dispositivo
                            </video>
                        </div>
                        <div className="flex flex-col items-start justify-between bg-gradient-to-r from-white to-blue-100 dark:from-[#0B0B0B] dark:to-slate-900">
                            <div className="p-2">
                                <div className="flex  flex-col sm:flex-row w-full justify-between items-start sm:items-start">
                                    <h3 className=" sm:text-xl text-yellow-500 font-bold">{item.title}</h3>
                                    <span className="text-xs items-start flex dark:text-white"> {item.dates} </span>
                                </div>
                                <p className="text-black dark:text-white overflow-hidden text-xs sm:text-base" style={{display: "-webkit-box", WebkitBoxOrient: "vertical", textOverflow: "ellipsis", WebkitLineClamp: 6, lineClamp: 6}}> {item.description} </p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3  p-2">
                                <div className="flex gap-2 flex-wrap">
                                    {item.technologies.map((tec)=>{
                                        return(
                                            <div key={crypto.randomUUID()} className="flex items-center rounded-md border border-zinc-200 hover:border-zinc-900 bg-secondary px-1  dark:text-zinc-300 boder dark:border-zinc-700 dark:hover:border-zinc-100 duration-300 bg-zinc-900 dark:bg-zinc-100">
                                                <Iconst icon={tec} weight={null}/>
                                            </div>
                                        )
                                    })}

                                </div>
                                <div className="flex gap-x-3  my-2">
                                {item.links.map(l=>{
                                    return(
                                        <a aria-label={`link del proyecto ${item.title}`} href={l.href} target="_blank" key={crypto.randomUUID()} className="bg-black rounded p-1 text-white transition-all duration-300 hover:scale-110">
                                            <Iconst icon={`${l.type.toLocaleLowerCase()}`} weight={null}/>
                                        </a>
                                    )
                                })}
                            </div>
                            </div>
                        </div>                       
                    </div>
                    </BlurFade>
                )
            })}
            </>}
        </section>
    </>
  )
}

export default Projects