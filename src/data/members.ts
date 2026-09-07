import dimaAImage from "../assets/team/dimaA.jpg"
import dimaGImage from "../assets/team/dimaG.jpg"
import levImage from "../assets/team/lev.jpg"
import radmirImage from "../assets/team/radmir.jpg"
import yanaImage from "../assets/team/yana.jpg"

export type Member = {
  id: string
  number: string
  name: string
  role: string
  joinedYear: number
  description: string
  story: string
  image: string
  imageAlt: string
}

export const members: Member[] = [
  {
    id: "dima-arefiev",
    number: "01",
    name: "Дмитрий Арефьев",
    role: "Капитан команды",
    joinedYear: 2023,
    description:
      "Не даёт Льву слова.",
    story:
      "Создал команду и сразу взял в неё самого себя.",
    image: dimaAImage,
    imageAlt:
      "Дмитрий Арефьев — капитан команды КВН «Мифы»",
  },
  {
    id: "lev-kupershmidt",
    number: "02",
    name: "Лев Купершмидт",
    role: "Не капитан команды",
    joinedYear: 2023,
    description:
      "Вместо писанины сидит на дейликах.",
    story:
      "Спросил у Димы «А почему ты меня не позвал в команду?» и его взяли.",
    image: levImage,
    imageAlt:
      "Лев Купершмидт — участник команды КВН «Мифы»",
  },
  {
    id: "dima-gorbatov",
    number: "03",
    name: "Дмитрий Горбатов",
    role: "Не капитан команды",
    joinedYear: 2025,
    description:
      "Абсолютный победитель Merge Tactics среди «Мифов».",
    story:
      "Победил мифов в финале «Панчлайна» и пришёл в команду как победитель.",
    image: dimaGImage,
    imageAlt:
      "Дмитрий Горбатов — участник команды КВН «Мифы»",
  },
  {
    id: "radmir-faizulin",
    number: "04",
    name: "Радмир Файзулин",
    role: "Не капитан команды",
    joinedYear: 2023,
    description:
      "Всё ещё ищет фишку команды.",
    story:
      "Стал MVP в импровизаии в ИТМО, полсе этого его сразу в команду взяли.",
    image: radmirImage,
    imageAlt:
      "Радмир Файзулин — участник команды КВН «Мифы»",
  },
  {
    id: "yana",
    number: "05",
    name: "Яна Стрелец",
    role: "Не капитан команды",
    joinedYear: 2026,
    description:
      "Главный бандит ИТМО",
    story:
      "Поехала с ребятами на сочинский фестиваль и сразу попала в премьерку",
    image: yanaImage,
    imageAlt:
      "Яна — участница команды КВН «Мифы»",
  },
]