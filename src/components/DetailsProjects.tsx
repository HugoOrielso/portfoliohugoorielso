import { useParams } from "react-router-dom"
import { DockDemo } from "./DockDemo"
import { dataEnglish, dataSpanish } from "@/data"
import NavBarDetails from "./NavBarDetails"
import Iconst from "./Iconst"
import { UseLanguageStore } from "@/store/language"
import { useLayoutEffect } from "react"

const DetailsProjects = () => {
  const { id } = useParams()
  const language = UseLanguageStore(state => state.language)

  const data = language === "spanish" ? dataSpanish : dataEnglish
  const project = data.projects.find(item => item.id === Number(id))

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-zinc-black dark:text-white">
        {language === "spanish" ? "Proyecto no encontrado" : "Project not found"}
      </div>
    )
  }

  const labels = [
    project.company,
    project.category,
    ...project.technologies.slice(0, 6),
  ]

  const imageSlots = [0, 1].map(index => project.images[index] ?? null)
  const relatedProducts =
    "relatedProducts" in project ? project.relatedProducts : []

  return (
    <div className="min-h-screen dark:bg-zinc-black">
      <NavBarDetails />

      <main className="z-10 mx-auto flex w-full max-w-[900px] flex-col px-3 pb-28 pt-16">
        <section className="relative mb-6 flex w-full items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="relative z-20 aspect-video w-full object-cover"
            style={{ viewTransitionName: `video-${id}` }}
          >
            <source src={project.video} />
            El video no carga en tu dispositivo
          </video>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 z-10 h-full w-full scale-110 object-cover opacity-40 blur-3xl"
            style={{ viewTransitionName: `video-reflection-${id}` }}
          >
            <source src={project.video} />
            El video no carga en tu dispositivo
          </video>
        </section>

        <section>
          <div className="mb-3 flex flex-wrap gap-2">
            {labels.map(label => (
              <span
                key={label}
                className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-[11px] font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {label}
              </span>
            ))}
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-500">
            {project.role}
          </p>

          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <h1
              className="text-2xl font-bold text-zinc-950 dark:text-yellow-500 sm:text-4xl"
              style={{ viewTransitionName: `title-${id}` }}
            >
              {project.title}
            </h1>

            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {project.dates}
            </span>
          </div>

          <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {project.category}
          </p>

          <p
            className="mt-5 text-sm leading-7 text-zinc-800 dark:text-zinc-100 sm:text-base"
            style={{ viewTransitionName: `description-${id}` }}
          >
            {project.description}
          </p>

          {project.summary && (
            <div className="mt-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-200">
              {project.summary}
            </div>
          )}

          {project.impact && (
            <div className="mt-4 rounded-2xl border border-zinc-200 bg-white/70 p-4 text-sm leading-6 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
                {language === "spanish" ? "Impacto" : "Impact"}
              </p>
              {project.impact}
            </div>
          )}
        </section>

        {project.details?.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
              {language === "spanish" ? "Contexto del proyecto" : "Project context"}
            </h2>

            <div className="mt-4 grid gap-4">
              {project.details.map(paragraph => (
                <p
                  key={paragraph}
                  className="rounded-2xl border border-zinc-200 bg-white/70 p-4 text-sm leading-7 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        )}

        {relatedProducts.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
              {language === "spanish" ? "Productos dentro de IkiDev" : "Products inside IkiDev"}
            </h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {relatedProducts.map(product => (
                <div
                  key={product.title}
                  className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4"
                >
                  <h3 className="text-base font-bold text-zinc-950 dark:text-yellow-500">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-800 dark:text-zinc-200">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
            {language === "spanish" ? "Capturas del producto" : "Product snapshots"}
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {imageSlots.map((image, index) => (
              <div
                key={`${project.id}-image-${index}`}
                className="flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
              >
                {image ? (
                  <img
                    src={image}
                    alt={`${project.title} snapshot ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(135deg,#f4f4f5,#ffffff)] p-5 text-center dark:bg-[linear-gradient(135deg,#18181b,#09090b)]">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
                      {language === "spanish" ? "Espacio de imagen" : "Image slot"}
                    </span>
                    <span className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {project.features?.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
              {language === "spanish" ? "Funcionalidades principales" : "Main features"}
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map(feature => (
                <div
                  key={feature}
                  className="rounded-2xl border border-zinc-200 bg-white/70 p-4 text-sm leading-6 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200"
                >
                  <div className="mb-2 h-1.5 w-8 rounded-full bg-yellow-500" />
                  {feature}
                </div>
              ))}
            </div>
          </section>
        )}

        {project.responsibilities?.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
              {language === "spanish" ? "Responsabilidades técnicas" : "Technical responsibilities"}
            </h2>

            <ul className="mt-4 grid gap-2">
              {project.responsibilities.map(responsibility => (
                <li
                  key={responsibility}
                  className="flex gap-3 rounded-xl border border-zinc-200 bg-white/60 p-3 text-sm text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
            {language === "spanish" ? "Stack utilizado" : "Tech stack"}
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map(tec => (
              <div
                key={tec}
                style={{ viewTransitionName: `icon-${tec}-${project.title}` }}
                className="flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 duration-300 hover:border-yellow-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
              >
                <Iconst icon={tec} weight={null} />
                <span>{tec}</span>
              </div>
            ))}
          </div>
        </section>

        {project.links?.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
              {language === "spanish" ? "Enlaces" : "Links"}
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {project.links.map(link => (
                <a
                  key={`${link.type}-${link.href}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-zinc-950 px-4 py-2 text-xs font-semibold text-white duration-300 hover:bg-yellow-500 dark:bg-white dark:text-zinc-950 dark:hover:bg-yellow-500"
                >
                  {link.type}
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="fixed bottom-0 z-[9999999] left-1/2 flex -translate-x-1/2 transform items-center justify-center">
        <DockDemo />
      </footer>
    </div>
  )
}

export default DetailsProjects
