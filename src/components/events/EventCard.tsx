import type { TeamEvent } from "../../data/events"

type EventCardProps = {
    event: TeamEvent
    isActive: boolean
    onSelect: () => void
}

const eventDateFormatter = new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
})

function EventCard({ event, isActive, onSelect }: EventCardProps) {
    return (
        <button
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls="active-event"
            onClick={onSelect}
            className={`group relative min-w-64 snap-start overflow-hidden rounded-2xl border text-left transition duration-300 sm:min-w-72 lg:min-w-80 ${isActive
                    ? "border-amber-300/70 bg-amber-300/[0.08]"
                    : "border-white/10 bg-white/[0.025] hover:border-white/25 hover:bg-white/[0.05]"
                }`}
        >
            <div className="grid grid-cols-[5.5rem_1fr]">
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                    <img
                        src={event.image}
                        alt=""
                        className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${isActive ? "saturate-100" : "saturate-50"
                            }`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="flex min-w-0 flex-col justify-center px-4 py-4">
                    <time
                        dateTime={event.startAt}
                        className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-amber-300"
                    >
                        {eventDateFormatter.format(new Date(event.startAt))}
                    </time>

                    <p className="mt-2 line-clamp-2 text-base font-black uppercase leading-tight text-white">
                        {event.title}
                    </p>

                    <p className="mt-2 truncate text-xs text-white/45">
                        {event.city} · {event.venue}
                    </p>
                </div>
            </div>
        </button>
    )
}

export default EventCard