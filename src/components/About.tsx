import imageCV from '../assets/cv.webp'
import Meteors from "../components/magicui/meteors";
import BlurFade from './magicui/blur-fade';
import BlurIn from './magicui/blur-in';
import LetterPullup from './magicui/letter-pullup';

export function MeteorDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      </span>
    </div>
  );
}

const About = () => {
  return (
    <section className='flex relative w-full items-center justify-center gap-10 overflow-hidden'>
    <div className="absolue flex  w-full flex-col items-start justify-start overflow-hidden rounded-lg bg-background ">
      <Meteors number={30} />
        <div className='flex flex-col w-full items-center justify-center z-10 gap-2 mt-4'>
            <div className='flex w-full items-center justify-between z-10 gap-10'>
                <div className='flex flex-col'>
                    <BlurIn word="Hi, I'm Hugo Cañas"/>
                    <span className='text-yellow-500'>
                      <LetterPullup words={"Full stack developer."} delay={0.05}/>
                    </span>
                </div>
                <div className='max-w-36'>
                  <BlurFade delay={0.05}>
                    <img src={imageCV} alt="logo Hugo Orielso" className='object-contain aspect-auto  rounded-full w-24 h-'/>
                  </BlurFade>
                </div>  
            </div>
            <div className='w-full flex flex-col text-black dark:text-white'>
              <BlurFade delay={0.05}>
                <h2 className='font-bold sm:text-2xl text-base duration-300'>About</h2>
              </BlurFade>
                  <BlurFade delay={0.25} inView>
                    <p className='dark:text-zinc-200 text-zinc-900 text-xs block w-full sm:text-base my-2 duration-300'>
                      <span className='text-yellow-500'>Full Stack Developer</span> with two years of experience in creating web applications and APIs using Node.js and React.js. I have experience in creating REST applications, managing relational databases like MySQL and non-relational databases like MongoDB. Additionally, i'm learning spring boot. I seek to contribute to innovative projects and continue learning in the field of web development.
                    </p>
                  </BlurFade>
            </div>

        </div>
    </div>
    </section>
    
  )
}

export default About