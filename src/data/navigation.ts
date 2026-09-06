export type NavigationItem = {
  label: string
  href: `#${string}`
}

export const navigation: NavigationItem[] = [
  {
    label: "О команде",
    href: "#about",
  },
  {
    label: "Участники",
    href: "#team",
  },
  {
    label: "Мероприятия",
    href: "#events",
  },
  {
    label: "Галерея",
    href: "#gallery",
  },
  {
    label: "Контакты",
    href: "#contacts",
  },
]