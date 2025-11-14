import { useParams } from "react-router-dom"
import { DockDemo } from "./DockDemo"

import { dataEnglish, dataSpanish } from "@/data"
import NavBarDetails from "./NavBarDetails"
import Iconst from "./Iconst"

const DetailsProjects = () => {
    const {id} =  useParams()


    const data = dataEnglish.projects.find(item=> item.id === Number(id))
    console.log(dataSpanish);
    
    return (
    <div className="min-h-screen">
      <NavBarDetails/>
    <div className='dark:bg-zinc-black flex min-h-full items-center justify-center grow flex-col'>
      <main className='z-10 flex grow flex-1 h-full items-center justify-center'>
        <div className='flex flex-col grow '>
          <div>
          <div className="flex items-center z-20 relative justify-center w-full pt-[50px] md:px-0 pt-[50 px] mb-4"  >
            <video autoPlay loop muted className="rounded-sm z-20 aspect-auto object-cover   w-full max-w-[800px] " 
            style={{viewTransitionName: `video-${id}`}}>
                <source src={data?.video}/>
                El video no carga en tu dispositivo
            </video>
            <video autoPlay loop muted className="rounded-sm absolute aspect-auto w-full contrast-125 blur-3xl inset-0  z-10 max-w-[800px] object-cover transition bg-transparent opacity-40"
            style={{viewTransitionName: `video-reflection-${id}`}}>
                <source src={data?.video}/>
                El video no carga en tu dispositivo
            </video>
          </div>
          <div className="max-w-[800px] z-40 px-2 ">
            <h1 className="sm:text-xl dark:text-yellow-500  font-bold" style={{viewTransitionName: `title-${id}`}}> {data?.title} </h1>
            <h1 className="text-black dark:text-white overflow-hidden text-xs sm:text-base line-clamp-6" style={{viewTransitionName: `description-${id}`}}> {data?.description} </h1>
          </div>
          <div className="max-w-[800px] px-2 flex-col items-start w-full flex my-2">
            <h1 className="dark:text-white text-xl font-bold">Tecnologías</h1>
            <div className="flex">
            {data?.technologies.map(tec=>{
              return(
                <div key={crypto.randomUUID()} style={{viewTransitionName: `icon-${tec}-${data.title}`}} className="flex items-center rounded-md border border-zinc-200 hover:border-zinc-900 bg-secondary px-1  dark:text-zinc-300 boder dark:border-zinc-700 dark:hover:border-zinc-100 duration-300 bg-zinc-900 dark:bg-zinc-100">
                  <Iconst icon={tec} weight={null} />
                </div>
              )
            })}
            </div>
          </div>
          </div>
          </div>
        </main>
      <footer className="fixed bottom-0 z-[9999999] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <DockDemo/>
      </footer>
    </div>
    </div>
  )
}

export default DetailsProjects