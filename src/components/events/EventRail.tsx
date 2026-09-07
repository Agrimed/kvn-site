import { useRef } from "react"
import type { TeamEvent } from "../../data/events"
import EventCard from "./EventCard"

type EventRailProps = {
    events: TeamEvent[]
    activeEventId: string
    onSelect: (eventId: string) => void
}

function EventRail({
    events,
    activeEventId,
    onSelect,
}: EventRailProps) {
    const railRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: -1 | 1) => {
        railRef.current?.scrollBy({
            left:
                direction *
                Math.min(360, railRef.current.clientWidth * 0.8),
            behavior: "smooth",
        })
    }

    return (
        <div className="mt-8">
            <div className="mb-4 flex items-center justify-between gap-5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">
                    Выберите мероприятие
                </p>

                {events.length > 1 && (
                    <div className="hidden gap-2 sm:flex">
                        {(["Назад", "Вперёд"] as const).map(
                            (label, index) => (
                                <button
                                    key={label}
                                    type="button"
                                    aria-label={label}
                                    onClick={() =>
                                        scroll(index === 0 ? -1 : 1)
                                    }
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-lg text-amber-300 transition hover:border-amber-300/60 hover:bg-amber-300/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                                >
                                    <span aria-hidden="true">
                                        {index === 0 ? "←" : "→"}
                                    </span>
                                </button>
                            ),
                        )}
                    </div>
                )}
            </div>

            <div
                ref={railRef}
                role="tablist"
                aria-label="Мероприятия команды"
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
            >
                {events.map((event) => (
                    <EventCard
                        key={event.id}
                        event={event}
                        isActive={event.id === activeEventId}
                        onSelect={() => onSelect(event.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default EventRail