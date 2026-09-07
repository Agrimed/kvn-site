import type { TeamEvent } from "../../data/events"

type EventFeatureProps = {
    event: TeamEvent
    isPast: boolean
}

const fullDateFormatter = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
})

function EventFeature({ event, isPast }: EventFeatureProps) {
    const actionUrl = event.ticketUrl ?? event.detailsUrl

    return (
        <article
            id="active-event"
            role="tabpanel"
            className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-[0_35px_100px_-45px_rgba(0,0,0,1)] sm:mt-12"
        >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[25rem] overflow-hidden bg-neutral-950 sm:min-h-[34rem] lg:min-h-[40rem]">
                    <img
                        src={event.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-2xl"
                    />

                    <div
                        className="absolute inset-0 bg-black/25"
                        aria-hidden="true"
                    />

                    <img
                        key={event.image}
                        src={event.image}
                        alt={event.imageAlt}
                        className="absolute inset-0 z-10 h-full w-full object-contain p-3 sm:p-5"
                    />

                    <div
                        className="absolute inset-0 z-20 bg-gradient-to-t from-black/75 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-950/35"
                        aria-hidden="true"
                    />

                    <div className="absolute bottom-6 left-6 z-30 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur sm:bottom-8 sm:left-8">
                        {isPast ? "Событие завершено" : "Ближайшее выступление"}
                    </div>
                </div>

                <div className="relative flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                    <time
                        dateTime={event.startAt}
                        className="text-sm font-bold uppercase tracking-[0.24em] text-amber-300"
                    >
                        {fullDateFormatter.format(new Date(event.startAt))}
                    </time>

                    <h3 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                        {event.title}
                    </h3>

                    <div className="mt-7 border-y border-white/10 py-5 text-sm uppercase tracking-[0.14em] text-white/55">
                        <p>
                            {event.city} · {event.venue}
                        </p>

                        {event.address && (
                            <p className="mt-2 text-white/35">{event.address}</p>
                        )}
                    </div>

                    <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                        {event.summary}
                    </p>

                    {(actionUrl || event.supportUrl) && (
                        <div className="mt-9 flex flex-wrap gap-3">
                            {actionUrl && (
                                <a
                                    href={actionUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-3 rounded-full bg-amber-300 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:-translate-y-0.5 hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
                                >
                                    {event.ticketUrl
                                        ? "Билеты · промокод Мифы"
                                        : "Подробнее"}

                                    <span aria-hidden="true">↗</span>
                                </a>
                            )}

                            {event.supportUrl && (
                                <a
                                    href={event.supportUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:border-amber-300/50 hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
                                >
                                    Чат поддержки
                                    <span aria-hidden="true">↗</span>
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </article>
    )
}

export default EventFeature