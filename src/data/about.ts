export type AboutFact = {
  label: string
  value: string
  href?: string
}

export type AboutDetailsItem = {
  id: string
  title: string
  paragraphs: string[]
}

type AboutData = {
  eyebrow: string
  title: string
  summary: string
  imageAlt: string
  facts: AboutFact[]
  details: AboutDetailsItem[]
}

export const about: AboutData = {
  eyebrow: "О команде",

  title: "Мифы, которые стали реальностью",

  summary:
    "Команда КВН «Мифы Древней Греции» — вице-чемпион Центральной лиги Москвы и Подмосковья 2025 года, дважды финалист официальной лиги МС КВН «Санкт-Петербург» в 2024 и 2025 годах и участник Премьер-лиги КВН 2026 года.",

  imageAlt:
    "Команда КВН «Мифы Древней Греции» из Санкт-Петербурга",

  facts: [
    {
      label: "Город",
      value: "Санкт-Петербург",
      href: "https://humorpedia.ru/city/spb.html",
    },
    {
      label: "Год основания",
      value: "2023",
    },
  ],

  details: [
    {
      id: "history",
      title: "История и достижения",
      paragraphs: [
        "Команда КВН «Мифы Древней Греции» появилась в 2023 году в Санкт-Петербурге.",

        "Два сезона подряд, в 2024 и 2025 годах, «Мифы» выходили в финал официальной лиги МС КВН «Санкт-Петербург».",

        "В 2025 году команда отправилась в Москву для участия в Центральной лиге Москвы и Подмосковья «Лампа», где также добралась до финала и стала вице-чемпионом.",

        "По итогам Сочинского фестиваля 2026 года команда стала участником Премьер-лиги КВН.",
      ],
    },
  ],
}