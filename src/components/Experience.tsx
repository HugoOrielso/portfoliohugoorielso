import BlurFade from '@/components/magicui/blur-fade'
import { dataEnglish, dataSpanish } from '@/data'
import { UseLanguageStore } from '@/store/language'
import { flushSync } from 'react-dom'
import { useNavigate } from 'react-router-dom'

const Experience = () => {
  const language = UseLanguageStore(state => state.language)
  const navigate = useNavigate()

  const data = language === 'spanish' ? dataSpanish : dataEnglish

  const handleExperienceClick = (projectId: number | null) => {
    if (!projectId) return

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => {
          navigate(`/project/${projectId}`)
        })
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      })
    } else {
      navigate(`/project/${projectId}`)
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }

  return (
    <section className="flex flex-col gap-4 dark:text-white pt-14" id="experience">
      <BlurFade delay={0.05}>
        <h2 className="font-bold sm:text-3xl text-lg duration-300 dark:text-white">
          {language === 'spanish' ? 'Experiencia laboral' : 'Work experience'}
        </h2>
      </BlurFade>

      <div className="flex flex-col gap-6">
        {data.work.map((item, index) => (
          <BlurFade delay={0.15 + index * 0.05} inView key={`${item.company}-${item.start}`}>
            <article
              role={item.projectId ? 'button' : undefined}
              tabIndex={item.projectId ? 0 : undefined}
              onClick={() => handleExperienceClick(item.projectId)}
              onKeyDown={event => {
                if (!item.projectId) return
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  handleExperienceClick(item.projectId)
                }
              }}
              className="group flex items-start gap-4 rounded-2xl border border-zinc-200/70 bg-white/40 p-4 shadow-sm outline-none duration-300 hover:-translate-y-0.5 hover:border-zinc-950 hover:shadow-md focus-visible:ring-2 focus-visible:ring-yellow-500 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-200 flex-col lg:flex-row"
              aria-label={
                item.projectId
                  ? language === 'spanish'
                    ? `Ver detalle de ${item.company}`
                    : `View details for ${item.company}`
                  : undefined
              }
            >
              <div
                className="relative hidden lg:flex shrink-0 overflow-hidden rounded-full border size-16 border-zinc-500 bg-white"
                style={{ background: item.background }}
              >
                <img
                  src={item.logoUrl}
                  alt={item.alt}
                  className="aspect-square h-full w-full object-contain"
                />



              </div>

              <div className='flex lg:hidden  gap-3 w-full'>
                <div
                  className=" shrink-0 overflow-hidden rounded-full border size-16 border-zinc-500 bg-white"
                  style={{ background: item.background }}
                >
                  <img
                    src={item.logoUrl}
                    alt={item.alt}
                    className="aspect-square h-full w-full object-contain"
                  />
                </div>


                <div className=''>
                  <h3 className="font-bold leading-none text-sm sm:text-base duration-300">
                    {item.company}
                  </h3>

                  <h4 className="mt-1 font-semibold leading-none text-sm sm:text-base text-yellow-500">
                    {item.title}
                  </h4>

                  {item.location && (
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {item.location}
                    </p>
                  )}
                  <span className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right duration-300 shrink-0">
                    {item.start} - {item.end}
                  </span>
                </div>

              </div>




              <main className="w-full">
                <div className=" w-full justify-between gap-4 items-start hidden lg:flex">
                  <div>
                    <h3 className="font-bold leading-none text-sm sm:text-base duration-300">
                      {item.company}
                    </h3>

                    <h4 className="mt-1 font-semibold leading-none text-sm sm:text-base text-yellow-500">
                      {item.title}
                    </h4>

                    {item.location && (
                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                        {item.location}
                      </p>
                    )}
                  </div>

                  <span className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right duration-300 shrink-0">
                    {item.start} - {item.end}
                  </span>
                </div>

                {item.badges?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.badges.map(badge => (
                      <span
                        key={badge}
                        className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2 py-0.5 text-[10px] font-medium text-yellow-600 dark:text-yellow-400"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                <p className="mt-3 text-xs sm:text-sm dark:text-zinc-200 duration-300 text-zinc-900">
                  {item.description}
                </p>

                {item.summary && (
                  <p className="mt-2 text-xs font-medium leading-5 text-zinc-500 dark:text-zinc-400">
                    {item.summary}
                  </p>
                )}

                {item.highlights?.length > 0 && (
                  <ul className="mt-3 grid gap-1.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    {item.highlights.slice(0, 4).map(highlight => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.technologies?.length > 0 && (
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.slice(0, 9).map(tech => (
                        <span
                          key={tech}
                          className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-1 text-[10px] font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {item.projectId && (
                      <span className="text-xs font-semibold text-zinc-500 underline-offset-4 duration-300 group-hover:text-yellow-500 group-hover:underline dark:text-zinc-400">
                        {language === 'spanish' ? 'Ver detalle' : 'View details'}
                      </span>
                    )}
                  </div>
                )}
              </main>
            </article>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}

export default Experience
