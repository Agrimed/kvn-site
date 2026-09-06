import { useState } from "react"
import { members } from "../../data/members"
import Container from "../ui/Container"
import SectionHeading from "../ui/SectionHeading"

function Team() {
  const [activeMemberId, setActiveMemberId] = useState(members[0].id)

  const activeMember =
    members.find((member) => member.id === activeMemberId) ?? members[0]

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-black py-24 text-white sm:py-28 lg:py-36"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 text-[20vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.02]"
        aria-hidden="true"
      >
        Состав
      </div>

      <div
        className="pointer-events-none absolute -right-52 top-1/3 h-[30rem] w-[30rem] rounded-full bg-amber-400/[0.06] blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Участники"
          title="Люди, которые создают «Мифы»"
          description="У каждого участника свой путь в команду, своя роль и своя версия того, почему всё до сих пор работает."
        />

        <div
          className="mt-14 flex snap-x gap-4 overflow-x-auto pb-4 sm:mt-16 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0"
          role="tablist"
          aria-label="Участники команды"
        >
          {members.map((member) => {
            const isActive = member.id === activeMember.id

            return (
              <button
                key={member.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="active-member-profile"
                onClick={() => setActiveMemberId(member.id)}
                className={`group relative min-w-36 snap-start overflow-hidden rounded-2xl border text-left transition-all duration-300 sm:min-w-44 lg:min-w-0 ${
                  isActive
                    ? "border-amber-300/80 shadow-[0_16px_50px_-20px_rgba(251,191,36,0.65)]"
                    : "border-white/10 opacity-55 hover:border-white/25 hover:opacity-90"
                }`}
              >
                <div className="aspect-[3/4] overflow-hidden bg-neutral-900">
                  <img
                    src={member.image}
                    alt=""
                    className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                      isActive
                        ? "scale-100 saturate-100"
                        : "scale-[1.02] saturate-50"
                    }`}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <span className="absolute left-4 top-4 text-xs font-bold tracking-[0.2em] text-amber-300">
                  {member.number}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-bold leading-tight text-white sm:text-base">
                    {member.name}
                  </p>

                  <p className="mt-1 text-xs text-white/55">
                    {member.role}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        <article
          id="active-member-profile"
          role="tabpanel"
          className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-[0_35px_100px_-45px_rgba(0,0,0,1)] sm:mt-12"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[28rem] overflow-hidden bg-neutral-900 sm:min-h-[36rem] lg:min-h-[42rem]">
              <img
                key={activeMember.image}
                src={activeMember.image}
                alt={activeMember.imageAlt}
                className="h-full w-full object-cover"
              />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-950/40"
                aria-hidden="true"
              />

              <span className="absolute bottom-6 left-6 text-7xl font-black tracking-[-0.08em] text-white/10 sm:bottom-8 sm:left-8 sm:text-8xl">
                {activeMember.number}
              </span>
            </div>

            <div className="relative flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
              <div
                className="absolute right-0 top-0 h-px w-2/3 bg-gradient-to-l from-amber-300/50 to-transparent"
                aria-hidden="true"
              />

              <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
                {activeMember.role}
              </p>

              <h3 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                {activeMember.name}
              </h3>

              <div className="mt-8 flex items-center gap-4 border-y border-white/10 py-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                  В команде с
                </span>

                <span className="text-2xl font-black text-amber-300">
                  {activeMember.joinedYear}
                </span>
              </div>

              <p className="mt-8 text-xl font-semibold leading-relaxed text-white sm:text-2xl">
                {activeMember.description}
              </p>

              <div className="mt-8 border-l-2 border-amber-300/60 pl-5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
                  Как появился в команде
                </p>

                <p className="mt-4 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                  {activeMember.story}
                </p>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  )
}

export default Team