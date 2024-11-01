import './App.css'
import Routing from './router/Routing'

function App() {
  return (
    <>
        <div className='duration-300 h-full p-4 gap-4 flex flex-1 items-center justify-center flex-col mx-auto dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]'>
      <Routing/>
          </div>

    </>
  )
}

export default App
