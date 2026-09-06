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
          className="hero-image-enter h-full w-full object-cover object-[52%_center] saturate-[1.08] contrast-[1.03] md:object-center"
        />
      </div>

      <div
        className="absolute inset-0 -z-20 bg-black/20 md:bg-black/[0.06]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/25 to-transparent md:hidden"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 -z-10 hidden bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.68)_30%,rgba(0,0,0,0.3)_52%,rgba(0,0,0,0.1)_68%,transparent_86%)] md:block"
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-black/65 to-transparent md:h-28"
        aria-hidden="true"
      />

      <div
        className="hero-glow absolute -left-36 top-8 -z-10 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl md:h-[26rem] md:w-[26rem]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-36 sm:px-8 md:pb-0 md:pt-12 lg:px-12 lg:pt-14">
        <div className="max-w-3xl">
          <div className="hero-reveal hero-delay-1 flex items-center gap-4">
            <span
              className="h-px w-10 bg-gradient-to-r from-amber-300 to-amber-300/20 sm:w-14"
              aria-hidden="true"
            />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-sm">
              {team.university}
            </p>
          </div>

          <h1 className="hero-reveal hero-delay-2 mt-3 bg-gradient-to-br from-white via-amber-50 to-amber-300 bg-clip-text text-6xl font-black uppercase leading-[0.82] tracking-[-0.075em] text-transparent [-webkit-text-stroke:1px_rgba(253,230,138,0.16)] drop-shadow-[0_10px_32px_rgba(0,0,0,0.85)] sm:text-7xl md:text-8xl lg:text-[7.25rem]">
            {team.name}
          </h1>

          <div className="hero-reveal hero-delay-3 mt-4 flex items-center">
            <p className="border-l-2 border-amber-300/80 pl-4 text-base font-medium leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] sm:text-lg">
              {team.slogan}
            </p>
          </div>

          <div className="hero-reveal hero-delay-4 mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={team.hero.primaryAction.href}
              className="group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 px-7 py-3 text-sm font-bold text-neutral-950 shadow-[0_10px_35px_-10px_rgba(251,191,36,0.7)] ring-1 ring-amber-100/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_-10px_rgba(251,191,36,0.85)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 sm:text-base"
            >
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden="true"
              />

              <span className="relative">
                {team.hero.primaryAction.label}
              </span>

              <span
                className="relative transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            <a
              href={team.hero.secondaryAction.href}
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/30 bg-black/10 px-6 py-3 text-sm font-semibold text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/60 hover:bg-amber-200/10 hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 sm:text-base"
            >
              <span>{team.hero.secondaryAction.label}</span>

              <span
                className="text-amber-300 transition-transform duration-300 group-hover:translate-x-1"
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