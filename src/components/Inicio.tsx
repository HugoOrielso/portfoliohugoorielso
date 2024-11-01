import Navbar from './Navbar'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Education from './Educations'
import Skills from './Skills'
import { DockDemo } from './DockDemo'

const Inicio = () => {
  return (
    <>
    <Navbar/>
    <div className='dark:bg-zinc-black flex h-screen grow flex-1 flex-col'>
      <main className='z-10 grow flex-1'>
        <div className='flex flex-col grow  max-w-[850px]'>
            <About/>
            <Experience/>
            <Projects/>
            <Education/>
            <Skills/>
        </div>
      </main>
      <footer className="fixed bottom-0 z-[9999999] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <DockDemo/>
      </footer>
      </div>
    </>
  )
}

export default Inicio