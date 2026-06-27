import { UseLanguageStore } from '@/store/language'
import imageCV from '../assets/cv.webp'
import Meteors from "../components/magicui/meteors"
import Iconst from './Iconst'
import BlurFade from './magicui/blur-fade'
import BlurIn from './magicui/blur-in'
import LetterPullup from './magicui/letter-pullup'

const About = () => {
  const language = UseLanguageStore(state => state.language)

  const isSpanish = language === 'spanish'


  return (
    <section
      className="flex pt-8 sm:pt-10 relative w-full items-center justify-center gap-10 overflow-hidden"
      id="about"
    >
      <div className="relative flex w-full flex-col items-start justify-start overflow-hidden rounded-lg bg-background">
        <Meteors number={30} />

        <div className="flex flex-col w-full items-center justify-center z-10 gap-4 mt-4">
          <div className="flex w-full items-center justify-between z-10 gap-6">
            <div className="flex flex-col">
              <BlurIn word={isSpanish ? "Hola, soy Hugo Cañas" : "Hi, I'm Hugo Cañas"} />

              <span className="text-yellow-500">
                <LetterPullup
                  words={
                    isSpanish
                      ? "Full Stack Engineer."
                      : "Full Stack Engineer."
                  }
                  delay={0.05}
                />
              </span>
            </div>

            <div className="max-w-36 shrink-0">
              <BlurFade delay={0.05}>
                <img
                  src={imageCV}
                  width="100%"
                  height="100%"
                  alt="Hugo Orielso Cañas Lozano"
                  className="object-cover aspect-square rounded-full w-24 h-24 border border-zinc-300 dark:border-zinc-700"
                />
              </BlurFade>
            </div>
          </div>

          <div className="w-full flex flex-col text-black dark:text-white">
            <BlurFade delay={0.05}>
              <h2 className="font-bold sm:text-3xl text-lg duration-300 dark:text-white">
                {isSpanish ? 'Acerca de mí' : 'About'}
              </h2>
            </BlurFade>

            <BlurFade delay={0.25} inView>
              {isSpanish ? (
                <p className="dark:text-zinc-200 text-zinc-900 text-xs block w-full sm:text-base my-2 duration-300 text-balance leading-6">
                  <span className="text-yellow-500 font-bold">Full Stack Engineer</span> con más de{' '}
                  <span className="text-yellow-500 font-bold">3 años de experiencia</span> desarrollando
                  plataformas web, APIs y soluciones analíticas de alto impacto. Me especializo en construir
                  sistemas end-to-end que integran{' '}
                  <span className="text-black font-bold dark:text-yellow-300">frontend</span>,{' '}
                  <span className="text-black font-bold dark:text-yellow-300">backend</span>, bases de datos,
                  infraestructura y servicios externos. He trabajado en plataformas de analítica de movilidad,
                  visualización geoespacial, gestión documental, firma digital, e-commerce y software de ingeniería,
                  procesando grandes volúmenes de datos con{' '}
                  <span className="text-black font-bold dark:text-yellow-300">BigQuery</span> y creando mapas
                  interactivos con{' '}
                  <span className="text-black font-bold dark:text-yellow-300">Mapbox GL</span>.
                </p>
              ) : (
                <p className="dark:text-zinc-200 text-zinc-900 text-xs block w-full sm:text-base my-2 duration-300 text-balance leading-6">
                  <span className="text-yellow-500 font-bold">Full Stack Engineer</span> with more than{' '}
                  <span className="text-yellow-500 font-bold">3 years of experience</span> building web platforms,
                  APIs and high-impact analytics solutions. I specialize in developing end-to-end systems that
                  combine{' '}
                  <span className="text-black font-bold dark:text-yellow-300">frontend</span>,{' '}
                  <span className="text-black font-bold dark:text-yellow-300">backend</span>, databases,
                  infrastructure and external service integrations. I have worked on mobility analytics platforms,
                  geospatial visualization, document management, digital signatures, e-commerce and engineering
                  software, processing large-scale datasets with{' '}
                  <span className="text-black font-bold dark:text-yellow-300">BigQuery</span> and building
                  interactive maps with{' '}
                  <span className="text-black font-bold dark:text-yellow-300">Mapbox GL</span>.
                </p>
              )}
            </BlurFade>

            {/* <BlurFade delay={0.35} inView>
              <div className="mt-3 flex flex-wrap gap-2">
                {highlights.map(item => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-300 bg-white/70 px-3 py-1 text-[11px] font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </BlurFade> */}
          </div>

          <div className="flex flex-wrap items-center w-full gap-2 py-1">
            <BlurFade delay={0.05} inView>
              <article className="flex flex-wrap items-center text-xs dark:text-white gap-1 border border-zinc-800 hover:border-zinc-900 dark:border-zinc-700 dark:hover:border-zinc-200 p-1.5 rounded duration-300">
                <Iconst icon="gmail" weight="30" />
                <p>orielso.lozano15@gmail.com</p>
              </article>
            </BlurFade>

            <BlurFade delay={0.1} inView>
              <a
                href="https://github.com/HugoOrielso"
                target="_blank"
                rel="noreferrer"
                className="flex flex-wrap items-center text-xs dark:text-white gap-1 border border-zinc-800 hover:border-zinc-900 dark:border-zinc-700 dark:hover:border-zinc-200 p-1.5 rounded duration-300"
              >
                <Iconst icon="github" weight="30" />
                <p>GitHub</p>
              </a>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About