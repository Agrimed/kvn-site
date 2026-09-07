import lampaSemifinalImage from "../assets/events/lampa-semifinal.png"

export type EventStatus = "draft" | "published" | "cancelled"

export type TeamEvent = {
    id: string
    slug: string
    title: string
    summary: string
    startAt: string
    endAt?: string
    city: string
    venue: string
    address?: string
    image: string
    imageAlt: string
    ticketUrl?: string
    supportUrl?: string
    detailsUrl?: string
    status: EventStatus
    featured?: boolean
    createdAt: string
    updatedAt: string
}

// До подключения API опубликованные мероприятия добавляются в этот массив.
export const events: TeamEvent[] = [
    {
        id: "lampa-semifinal-2026",
        slug: "lampa-semifinal-2026",
        title: "1/2 финала Центральной лиги КВН «Лампа Синергии»",
        summary:
            "Будет полуфинал, будет КВН, будут «Мифы». Нам очень нужна ваша поддержка — приходите увидеть, пройдём ли мы дальше напрямую, без доборов.",
        startAt: "2026-09-19T19:00:00+03:00",
        city: "Москва",
        venue: "ММЦ «Планета КВН»",
        image: lampaSemifinalImage,
        imageAlt:
            "Афиша полуфинала Центральной лиги КВН «Лампа Синергии» 19 сентября",
        ticketUrl:
            "https://moscow.qtickets.events/252172-12-finala-tsentralnoy-ligi-i-podmoskovya-lampa-sinergiya-2026",
        supportUrl: "https://t.me/+o4_M0yVP2h04ZDUy",
        status: "published",
        featured: true,
        createdAt: "2026-09-07T00:00:00+03:00",
        updatedAt: "2026-09-07T00:00:00+03:00",
    },
]