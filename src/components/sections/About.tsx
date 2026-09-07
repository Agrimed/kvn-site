import teamAboutImage from "../../assets/about/team-about.jpg"
import { about } from "../../data/about"
import Container from "../ui/Container"
import SectionHeading from "../ui/SectionHeading"

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-neutral-950 py-24 text-white sm:py-28 lg:py-36"
    >
      <div
        className="pointer-events-none absolute Outdoors -left-48 top-32 h-96 w-96 rounded-full bg-amber-400/[0.06] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-0 top-0 h-px w-2/3 bg-gradient-to-l from-amber-300/30 to-transparent"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
            />

            <p className="mt-8 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              {about.summary}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-neutral-950/90 px-5 py-6 sm:px-7"
                >
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                    {fact.label}
                  </dt>

                  <dd className="mt-2 text-lg font-bold text-white sm:text-xl">
                    {fact.href ? (
                      <a
                        href={fact.href}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors duration-300 hover:text-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
                      >
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] bg-amber-300/10 blur-2xl"
              aria-hidden="true"
            />

            <figure className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={teamAboutImage}
                  alt={about.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                aria-hidden="true"
              />

              <figcaption className="absolute bottom-0 left-0 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                  Санкт-Петербург
                </p>

                <p className="mt-2 text-xl font-bold text-white">
                  Мифы Древней Греции
                </p>
              </figcaption>
            </figure>

            <div
              className="absolute -bottom-4 -right-4 h-20 w-20 border-b border-r border-amber-300/40"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-12 sm:mt-24 sm:pt-16 lg:mt-28">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
                Подробнее
              </p>

              <h3 className="mt-4 max-w-sm text-3xl font-black uppercase leading-tight tracking-[-0.03em] text-white sm:text-4xl">
                Как создавалась команда
              </h3>

              <p className="mt-5 max-w-md leading-7 text-white/50">
                История выступлений, финалов и выхода команды на новую сцену.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {about.details.map((item) => (
                <details key={item.id} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-bold text-white transition-colors duration-300 hover:text-amber-200 sm:text-xl">
                    <span>{item.title}</span>

                    <span
                      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-open:rotate-45 group-open:border-amber-300/50 group-open:bg-amber-300/10"
                      aria-hidden="true"
                    >
                      <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-amber-300" />

                      <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-amber-300" />
                    </span>
                  </summary>

                  <div className="max-w-2xl space-y-5 pb-8 pr-4 text-base leading-8 text-white/65 sm:pr-16">
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About