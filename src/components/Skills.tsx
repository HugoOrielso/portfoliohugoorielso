import BlurFade from "./magicui/blur-fade"
import { UseLanguageStore } from "@/store/language"
import Iconst from "./Iconst"
import { skillsEnglish, skillsSpanish } from "@/skills"

const Skills = () => {

    const language = UseLanguageStore(state => state.language)

    const skills =
        language === "spanish"
            ? skillsSpanish
            : skillsEnglish

    return (
        <BlurFade delay={0.05}>
            <section
                id="skills"
                className="pt-14 pb-24"
            >

                <h2 className="font-bold text-lg sm:text-3xl dark:text-white mb-6">
                    {language === "spanish"
                        ? "Tecnologias"
                        : "Technologies"}
                </h2>

                <div className="grid gap-5">

                    {skills.map(category => (

                        <div
                            key={category.title}
                            className="rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-gradient-to-tr from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-[#0B0B0B] dark:to-slate-900 p-5"
                        >

                            <h3 className="text-yellow-500 font-bold mb-4 text-lg">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {category.items.map(skill => (

                                    <div
                                        key={skill}
                                        className="flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-3 py-2 bg-white dark:bg-zinc-900 hover:scale-105 duration-300"
                                    >

                                        <Iconst
                                            icon={skill.toLowerCase()}
                                            weight="22"
                                        />

                                        <span className="text-sm dark:text-zinc-300">
                                            {skill}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </section>
        </BlurFade>
    )
}

export default Skills
