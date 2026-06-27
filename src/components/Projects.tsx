import { dataEnglish, dataSpanish } from "@/data"
import BlurFade from "@/components/magicui/blur-fade"
import { UseLanguageStore } from "@/store/language"
import { useNavigate } from "react-router-dom"
import { flushSync } from "react-dom"

const Projects = () => {
  const language = UseLanguageStore(state => state.language)
  const navigate = useNavigate()

  const data = language === "spanish" ? dataSpanish : dataEnglish

  const handleProjectClick = (projectId: number) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => {
          navigate(`/project/${projectId}`)
        })
        window.scrollTo({ top: 0, left: 0, behavior: "auto" })
      })
    } else {
      navigate(`/project/${projectId}`)
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    }
  }

  return (
    <section
      id="projects"
      className="grid grid-cols-1 place-items-start place-content-center pt-14"
    >
      <BlurFade delay={0.01} blur="0px">
        <h2 className="font-bold sm:text-3xl text-lg duration-300 dark:text-white pb-3">
          {language === "spanish" ? "Proyectos" : "Projects"}
        </h2>
      </BlurFade>

      <div className="flex w-full flex-col gap-5">
        {data.projects.map((item, index) => {
          const coverImage = item.images?.[0] ?? item.video
          const tags = [
            item.category,
            ...item.technologies.slice(0, 5),
          ]

          return (
            <BlurFade delay={0.05 + index * 0.05} inView blur="0px" key={item.id}>
              <article
                onClick={() => handleProjectClick(item.id)}
                className="group grid w-full cursor-pointer overflow-hidden rounded-2xl border border-zinc-300 bg-white/80 shadow-sm duration-300 hover:-translate-y-1 hover:border-zinc-950 hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-900/70 dark:hover:border-zinc-200 md:grid-cols-[minmax(220px,38%),1fr]"
              >
                <button
                  type="button"
                  onClick={event => {
                    event.stopPropagation()
                    handleProjectClick(item.id)
                  }}
                  aria-label={
                    language === "spanish"
                      ? `Ver caso de estudio de ${item.title}`
                      : `View case study for ${item.title}`
                  }
                  className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950 md:min-h-[300px]"
                >
                  <img
                    src={coverImage}
                    alt={`${item.title} preview`}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "low"}
                    className="h-full w-full object-cover duration-300 group-hover:scale-[1.03]"
                    style={{ viewTransitionName: `video-${item.id}` }}
                  />
                </button>

                <div className="flex flex-col justify-between p-4 sm:p-5">
                  <button
                    type="button"
                    onClick={event => {
                      event.stopPropagation()
                      handleProjectClick(item.id)
                    }}
                    className="text-left"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-500">
                          {item.role}
                        </p>

                        <h3
                          style={{ viewTransitionName: `title-${item.id}` }}
                          className="mt-1 text-lg font-bold text-zinc-950 dark:text-yellow-500 sm:text-xl"
                        >
                          {item.title}
                        </h3>
                      </div>

                      <span className="shrink-0 text-xs text-zinc-500 dark:text-zinc-400">
                        {item.dates}
                      </span>
                    </div>

                    <p className="mt-3 text-start text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {item.category}
                    </p>

                    <p
                      className="mt-2 line-clamp-3 text-start text-sm text-zinc-800 dark:text-zinc-100"
                      style={{ viewTransitionName: `description-${item.id}` }}
                    >
                      {item.summary}
                    </p>
                  </button>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {tags.slice(0, 6).map(tag => (
                      <span
                        key={`${item.id}-${tag}`}
                        className="rounded-full border border-zinc-300 bg-zinc-100 px-2.5 py-1 text-[10px] font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* {item.features?.length > 0 && (
                    <ul className="mt-4 grid gap-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                      {item.features.slice(0, 3).map(feature => (
                        <li key={`${item.id}-${feature}`} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )} */}

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={event => {
                        event.stopPropagation()
                        handleProjectClick(item.id)
                      }}
                      className="rounded-full bg-zinc-950 px-4 py-2 text-xs font-semibold text-white duration-300 hover:bg-yellow-500 dark:bg-white dark:text-zinc-950 dark:hover:bg-yellow-500"
                    >
                      {language === "spanish"
                        ? "Ver caso"
                        : "View case"}
                    </button>

                    {item.links?.[0]?.href && item.links[0].href !== "#" && (
                      <a
                        href={item.links[0].href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={event => event.stopPropagation()}
                        className="text-xs font-medium text-zinc-500 underline-offset-4 duration-300 hover:text-yellow-500 hover:underline dark:text-zinc-400"
                      >
                        {language === "spanish" ? "Ver sitio" : "Live site"}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </BlurFade>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
