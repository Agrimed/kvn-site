import contactsImage from "../../assets/contacts/team-contacts.png"
import { contactsSection } from "../../data/contacts"
import Container from "../ui/Container"
import SectionHeading from "../ui/SectionHeading"

function Contacts() {
  return (
    <section
      id="contacts"
      className="relative overflow-hidden bg-neutral-950 py-24 text-white sm:py-28 lg:py-36"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 text-[21vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.018]"
        aria-hidden="true"
      >
        Связь
      </div>

      <div
        className="pointer-events-none absolute -left-56 top-1/4 h-[34rem] w-[34rem] rounded-full bg-amber-400/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-0 top-0 h-px w-2/3 bg-gradient-to-l from-amber-300/30 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -inset-5 rounded-[2.5rem] bg-amber-300/[0.08] blur-3xl"
              aria-hidden="true"
            />

            <figure className="group relative mx-auto max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 shadow-[0_35px_100px_-35px_rgba(0,0,0,1)]">
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={contactsImage}
                  alt={contactsSection.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/5"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-amber-200/10"
                aria-hidden="true"
              />

              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
                      Представитель команды
                    </p>

                    <p className="mt-2 text-2xl font-black uppercase tracking-[-0.03em] text-white">
                      {contactsSection.imageCaption}
                    </p>
                  </div>

                  <span
                    className="text-5xl font-black text-white/10"
                    aria-hidden="true"
                  >
                    01
                  </span>
                </div>
              </figcaption>
            </figure>

            <div
              className="absolute -bottom-4 -left-4 h-24 w-24 border-b border-l border-amber-300/40"
              aria-hidden="true"
            />
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow={contactsSection.eyebrow}
              title={contactsSection.title}
              description={contactsSection.description}
            />

            <div className="mt-12 border-y border-white/10">
              {contactsSection.contacts.map((contact) => (
                <a
                  key={contact.id}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noreferrer" : undefined}
                  className="group flex items-center gap-5 py-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 sm:gap-7 sm:py-8"
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-amber-300/70">
                    {contact.number}
                  </span>

                  <span className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">
                      {contact.label}
                    </span>

                    <span className="break-all text-3xl font-black tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-amber-200 sm:text-4xl lg:text-5xl">
                      {contact.value}
                    </span>
                  </span>

                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xl text-amber-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-amber-300/60 group-hover:bg-amber-300/10 sm:h-14 sm:w-14"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span
                className="h-px w-10 bg-amber-300/50"
                aria-hidden="true"
              />

              <p className="text-sm leading-6 text-white/45">
                Обычно отвечаем быстрее, чем собираемся на репетицию.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contacts