import { useState } from "react"
import { navigation } from "../../data/navigation"
import { team } from "../../data/team"
import Container from "../ui/Container"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-black/10 text-white backdrop-blur-sm">
      <Container className="relative flex min-h-20 items-center justify-between">
        <a
          href="#"
          className="relative z-10 text-xl font-black uppercase tracking-[-0.04em] text-white transition-colors duration-300 hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
          aria-label="Мифы — в начало страницы"
          onClick={closeMenu}
        >
          Мифы
          <span className="ml-1 text-amber-300">.</span>
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Основная навигация"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-2 text-sm font-semibold text-white/75 transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-amber-300 after:transition-transform after:duration-300 hover:text-white hover:after:origin-left hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={team.hero.primaryAction.href}
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-amber-300/50 bg-amber-300/10 px-5 py-2 text-sm font-bold text-amber-200 backdrop-blur-md transition-all duration-300 hover:border-amber-300 hover:bg-amber-300 hover:text-black hover:shadow-[0_10px_35px_-12px_rgba(251,191,36,0.75)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
          >
            <span>{team.hero.primaryAction.label}</span>

            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-colors duration-300 hover:border-amber-300/60 hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 lg:hidden"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          {isMenuOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        <div
          id="mobile-navigation"
          className={`absolute inset-x-5 top-[calc(100%+0.75rem)] overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/95 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 sm:inset-x-8 lg:hidden ${
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0"
          }`}
        >
          <nav
            className="flex flex-col p-3"
            aria-label="Мобильная навигация"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-white/75 transition-colors duration-200 hover:bg-white/[0.06] hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-amber-300"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}

            <a
              href={team.hero.primaryAction.href}
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-300 to-yellow-400 px-5 py-3 font-bold text-black shadow-[0_12px_35px_-12px_rgba(251,191,36,0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
              onClick={closeMenu}
            >
              <span>{team.hero.primaryAction.label}</span>
              <span aria-hidden="true">→</span>
            </a>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header