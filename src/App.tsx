import './App.css'
import About from './components/About'
import { DockDemo } from './components/DockDemo'
import Education from './components/Educations'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
    <Navbar/>
    <div className='dark:bg-zinc-black flex h-screen grow flex-1 flex-col'>
      <main className='z-10 grow flex-1'>
        <div className='duration-300 h-full p-4 gap-4 flex flex-1 items-center justify-center flex-col mx-auto dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]'>
          <div className='flex flex-col grow  max-w-[850px]'>
            <About/>
            <Experience/>
            <Projects/>
            <Education/>
            <Skills/>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 z-[9999999] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <DockDemo/>
      </footer>
      </div>


    </>
  )
}

export default App
