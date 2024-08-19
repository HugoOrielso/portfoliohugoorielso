import { data } from "@/data"
import Iconst from "./Iconst"
import BlurFade from "@/components/magicui/blur-fade"


const Projects = () => {
    const { projects } = data
  return (
    <>
        <section id="projects" className="grid grid-cols-1 place-items-start place-content-center pb-24 gap-8 ">
            <BlurFade delay={0.01}>
                <h2 className="font-bold text-dark  dark:text-white mb-2 sm:text-2xl duration-300">Projects</h2>
            </BlurFade>
            {projects.map((item,index)=>{
                return(
                    <BlurFade delay={0.01} inView key={index}>

                    <div key={index} className="flex flex-col sm:grid grid-cols-[35%,1fr] sm:max-h-[300px] h-full rounded-lg border dark:hover:border-zinc-200 hover:border-zinc-950 border-zinc-300 dark:border-zinc-700 overflow-hidden gap-2 duration-300">
                        <div className="flex items-center justify-center w-full p-1 bg-gradient-to-r from-blue-200 to-white dark:from-slate-700 dark:to-[#0B0B0B] flex-col overflow-hidden duration-300 hover:shadow-lg transition-all  ease-out h-full">
                            <video autoPlay loop muted className="rounded-sm aspect-auto overflow-hidden sm:h-full sm:w-full max-h-[300px] w-full h-full">
                                <source src={item.video}/>
                                El video no
                            </video>
                        </div>
                        <div className="flex flex-col justify-between bg-gradient-to-r from-white to-blue-100 dark:from-[#0B0B0B] dark:to-slate-900">
                            <div className="p-2">
                                <div className="flex  flex-col sm:flex-row w-full justify-between items-start sm:items-start">
                                    <h3 className=" sm:text-xl text-cyan-500 font-bold">{item.title}</h3>
                                    <span className="text-xs items-start flex dark:text-white"> {item.dates} </span>
                                </div>
                                <p className="text-black dark:text-white overflow-hidden text-sm sm:text-base" style={{display: "-webkit-box", WebkitBoxOrient: "vertical", textOverflow: "ellipsis", WebkitLineClamp: 6, lineClamp: 6}}> {item.description} </p>

                            </div>
                            <div className="flex w-full gap-3  p-2">
                                {item.technologies.map((tec,item)=>{
                                    return(
                                        <div key={item + 50} className="flex items-center rounded-md border     border-zinc-200 hover:border-zinc-900 bg-secondary px-1  dark:text-zinc-300 boder dark:border-zinc-700 dark:hover:border-zinc-100 duration-300 bg-zinc-900 dark:bg-zinc-100">
                                           <Iconst icon={tec}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        
                    </div>
                    </BlurFade>
                )
            })}
        </section>
    
    </>
  )
}

export default Projects