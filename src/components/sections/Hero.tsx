import heroImage from "../../assets/hero.png"
import { team } from "../../data/team"
import ScrollIndicator from "../ui/ScrollIndicator"

function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden bg-black text-white md:items-start">
      <div className="absolute inset-0 -z-30" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="hero-image-enter h-full w-full object-cover object-[52%_center] saturate-[1.05] contrast-[1.03] md:object-center"
        />
      </div>

      <div
        className="absolute inset-0 -z-20 bg-black/25 md:bg-black/10"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/30 to-black/5 md:bg-gradient-to-r md:from-black/85 md:via-black/25 md:to-transparent"
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/70 to-transparent"
        aria-hidden="true"
      />

      <div
        className="hero-glow absolute -left-28 top-20 -z-10 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl md:h-[28rem] md:w-[28rem]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-36 sm:px-8 md:pb-0 md:pt-20 lg:px-12 lg:pt-24">
        <div className="max-w-3xl">
          <div className="hero-reveal hero-delay-1 flex items-center gap-4">
            <span
              className="h-px w-10 bg-gradient-to-r from-amber-300 to-amber-300/20 sm:w-14"
              aria-hidden="true"
            />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300 sm:text-sm">
              {team.university}
            </p>
          </div>

          <h1 className="hero-reveal hero-delay-2 mt-4 bg-gradient-to-br from-white via-amber-50 to-amber-300 bg-clip-text text-6xl font-black uppercase leading-[0.82] tracking-[-0.075em] text-transparent drop-shadow-[0_8px_30px_rgba(0,0,0,0.75)] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            {team.name}
          </h1>

          <p className="hero-reveal hero-delay-3 mt-5 max-w-xl text-lg font-medium leading-relaxed text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] sm:text-xl">
            {team.slogan}
          </p>

          <div className="hero-reveal hero-delay-4 mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={team.hero.primaryAction.href}
              className="group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 px-8 py-4 font-bold text-neutral-950 shadow-[0_12px_40px_-10px_rgba(251,191,36,0.65)] ring-1 ring-amber-100/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-10px_rgba(251,191,36,0.8)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
            >
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden="true"
              />

              <span className="relative">
                {team.hero.primaryAction.label}
              </span>

              <span
                className="relative text-lg transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            <a
              href={team.hero.secondaryAction.href}
              className="group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-full border border-white/35 bg-white/[0.07] px-8 py-4 font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_35px_-15px_rgba(0,0,0,0.9)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/70 hover:bg-amber-200/10 hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
            >
              <span>{team.hero.secondaryAction.label}</span>

              <span
                className="text-lg text-amber-300 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}

export default Hero