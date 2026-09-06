function ScrollIndicator() {
  return (
    <div
      className="hero-reveal hero-delay-5 absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-white/60 md:flex"
      aria-hidden="true"
    >
      <span>Листайте вниз</span>

      <span className="relative h-10 w-px overflow-hidden bg-white/20">
        <span className="hero-scroll-line absolute inset-x-0 top-0 h-1/2 bg-amber-300" />
      </span>
    </div>
  )
}

export default ScrollIndicator