export type ContactItem = {
  id: string
  number: string
  label: string
  value: string
  href: string
  external: boolean
}

type ContactsSection = {
  eyebrow: string
  title: string
  description: string
  imageAlt: string
  imageCaption: string
  contacts: ContactItem[]
}

export const contactsSection: ContactsSection = {
  eyebrow: "Контакты",

  title: "Позовите «Мифы» на сцену",

  description:
    "Хотите пригласить команду на мероприятие, предложить сотрудничество или просто передать что-то важное? Напишите нам в Telegram.",

  imageAlt:
    "Представитель команды КВН «Мифы» в сценическом костюме",

  imageCaption: "Великий вайбкодер",

  contacts: [
    {
      id: "telegram",
      number: "01",
      label: "Telegram",
      value: "@agrimed",
      href: "https://t.me/agrimed",
      external: true,
    },
  ],
}