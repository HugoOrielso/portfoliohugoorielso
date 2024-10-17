import { UseLanguageStore } from '@/store/language';
import imageCV from '../assets/cv.webp'
import Meteors from "../components/magicui/meteors";
import Iconst from './Iconst';
import BlurFade from './magicui/blur-fade';
import BlurIn from './magicui/blur-in';
import LetterPullup from './magicui/letter-pullup';
import { useEffect } from 'react';

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
  const language = UseLanguageStore(state => state.language)

  useEffect(()=>{

  },[language])

  return (
    <section className='flex pt-8 sm:pt-10 relative w-full items-center justify-center gap-10 overflow-hidden' id='about'>
    <div className="absolue flex  w-full flex-col items-start justify-start overflow-hidden rounded-lg bg-background ">
      <Meteors number={30} />
        <div className='flex flex-col w-full items-center justify-center z-10 gap-2 mt-4'>
            <div className='flex w-full items-center justify-between z-10 gap-10'>
                <div className='flex flex-col'>
                    {language === 'english'  &&
                      <BlurIn word="Hi, I'm Hugo Cañas"/>
                    }
                    {language === 'spanish' &&
                      <BlurIn word="Hola, soy Hugo Cañas"/>
                    }
                    
                    <span className='text-yellow-500'>
                      {language === 'english'  &&
                        <LetterPullup words={"Full stack developer."} delay={0.05}/>
                      }
                      {language === 'spanish' &&
                        <LetterPullup words={"Desarrollador full stack."} delay={0.05}/>
                      }
                    </span>
                </div>
                <div className='max-w-36'>
                  <BlurFade delay={0.05}>
                    <img src={imageCV} width={"100%"} height={"100%"} alt="logo Hugo Orielso" className='object-contain aspect-auto  rounded-full w-24 h-'/>
                  </BlurFade>
                </div>  
            </div>
            <div className='w-full flex flex-col text-black dark:text-white'>
              <BlurFade delay={0.05}>
                {language === 'english'  &&
                  <h2 className='font-bold sm:text-3xl text-lg duration-300 dark:text-white'>About</h2>
                }
                {language === 'spanish'  &&
                  <h2 className='font-bold sm:text-3xl text-lg duration-300 dark:text-white'>Acerca de mí</h2>
                }
              </BlurFade>
                  <BlurFade delay={0.25} inView>
                    {language === 'english' && 
                      <p className='dark:text-zinc-200 text-zinc-900 text-xs block w-full sm:text-base my-2 duration-300 text-balance'>
                        <span className='text-yellow-500 font-bold'>Full Stack Developer</span> with <span className='text-yellow-500 font-bold'>+2 years</span> of experience in creating web applications and APIs using <span className='text-black font-bold dark:text-yellow-300'>Node.js</span>  and <span className='text-black font-bold dark:text-yellow-300'>React.js</span>. I have experience in creating REST applications, managing relational databases like <span className='text-black font-bold dark:text-yellow-300'>MySQL</span> and non-relational databases like <span className='text-black font-bold dark:text-yellow-300'>MongoDB</span>. Additionally, i'm learning <span className='text-black font-bold dark:text-yellow-300'>Spring Boot</span>. I seek to contribute to innovative projects and continue learning in the field of web development.
                      </p>
                    }
                    {language === 'spanish' && 
                      <p className='dark:text-zinc-200 text-zinc-900 text-xs block w-full sm:text-base my-2 duration-300 text-balance'>
                        <span className='text-yellow-500 font-bold'>Desarrollador full stack</span> con <span className='text-yellow-500 font-bold'>+2 años</span> de experiencia creando aplicaciones web y APIS usando <span className='text-black font-bold dark:text-yellow-300'>Node.js</span>  y <span className='text-black font-bold dark:text-yellow-300'>React.js</span>. Tengo experiencia creando aplicaciones REST, manejando bases de dátos relacionales como <span className='text-black font-bold dark:text-yellow-300'>MySQL</span> y no relacionales como <span className='text-black font-bold dark:text-yellow-300'>MongoDB</span>. Adicionalmente, estoy aprendiendo <span className='text-black font-bold dark:text-yellow-300'>Spring Boot</span>. Busco contribuir en la inovación de proyectos y continuar creciendo en el mundo del desarrollo web.
                      </p>
                    }
                  </BlurFade>
            </div>
            <div className='flex items-center w-full py-1'>
              <BlurFade  delay={0.05} inView>
              <article className='flex flex-wrap items-center text-xs dark:text-white gap-1 border border-zinc-800 hover:border-zinc-900 dark:border-zinc-700 dark:hover:border-zinc-200 p-1 rounded duration-300'>
                <Iconst icon='gmail' weight="30"/> <p >orielso.lozano15@gmail.com</p> 
              </article>
              </BlurFade>
            </div>

        </div>
    </div>
    </section>
    
  )
}

export default About