type HeroAction = {
  label: string
  href: string
}

type Team = {
  name: string
  university: string
  slogan: string
  hero: {
    primaryAction: HeroAction
    secondaryAction: HeroAction
  }
}

export const team: Team = {
  name: "Мифы",
  university: "Команда КВН Университета ИТМО",
  slogan: "На сайте будут очень пафосные заголовки",
  hero: {
    primaryAction: {
      label: "Ближайшее выступление",
      href: "#events",
    },
    secondaryAction: {
      label: "Познакомиться с командой",
      href: "#about",
    },
  },
}