import { useMemo, useState } from "react"
import EventFeature from "../events/EventFeature"
import EventRail from "../events/EventRail"
import {
    getEventsByPeriod,
    type EventsPeriod,
} from "../../services/events"
import Container from "../ui/Container"
import SectionHeading from "../ui/SectionHeading"

const periodLabels: Record<EventsPeriod, string> = {
    upcoming: "Предстоящие",
    past: "Прошедшие",
}

function Events() {
    const [period, setPeriod] =
        useState<EventsPeriod>("upcoming")

    const filteredEvents = useMemo(
        () => getEventsByPeriod(period),
        [period],
    )

    const [selectedByPeriod, setSelectedByPeriod] =
        useState<Partial<Record<EventsPeriod, string>>>({})

    const requestedEventId = selectedByPeriod[period]

    const activeEvent =
        filteredEvents.find(
            (event) => event.id === requestedEventId,
        ) ?? filteredEvents[0]

    return (
        <section
            id="events"
            className="relative overflow-hidden bg-[#0c0908] py-24 text-white sm:py-28 lg:py-36"
        >
            <div
                className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 text-[19vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.018]"
                aria-hidden="true"
            >
                Афиша
            </div>

            <div
                className="pointer-events-none absolute -right-56 top-1/4 h-[34rem] w-[34rem] rounded-full bg-amber-400/[0.07] blur-3xl"
                aria-hidden="true"
            />

            <Container className="relative">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                    <SectionHeading
                        eyebrow="Мероприятия"
                        title="Где увидеть «Мифы»"
                        description="Следите за ближайшими выступлениями команды и выбирайте встречу, которую нельзя пропустить."
                    />

                    <div
                        className="flex w-fit rounded-full border border-white/10 bg-white/[0.035] p-1"
                        role="tablist"
                        aria-label="Период мероприятий"
                    >
                        {(Object.keys(periodLabels) as EventsPeriod[]).map(
                            (item) => {
                                const isActive = item === period

                                return (
                                    <button
                                        key={item}
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        onClick={() => setPeriod(item)}
                                        className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 sm:px-6 ${isActive
                                                ? "bg-amber-300 text-black"
                                                : "text-white/45 hover:text-white"
                                            }`}
                                    >
                                        {periodLabels[item]}
                                    </button>
                                )
                            },
                        )}
                    </div>
                </div>

                {activeEvent ? (
                    <>
                        <EventFeature
                            event={activeEvent}
                            isPast={period === "past"}
                        />

                        <EventRail
                            events={filteredEvents}
                            activeEventId={activeEvent.id}
                            onSelect={(eventId) =>
                                setSelectedByPeriod((current) => ({
                                    ...current,
                                    [period]: eventId,
                                }))
                            }
                        />
                    </>
                ) : (
                    <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 px-6 py-16 text-center sm:px-10 sm:py-20">
                        <div
                            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent"
                            aria-hidden="true"
                        />

                        <p className="text-xs font-bold uppercase tracking-[0.26em] text-amber-300">
                            {period === "upcoming"
                                ? "Анонсы готовятся"
                                : "Архив пуст"}
                        </p>

                        <h3 className="mx-auto mt-5 max-w-2xl text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl">
                            {period === "upcoming"
                                ? "Новые даты скоро появятся"
                                : "Прошедшие выступления появятся здесь"}
                        </h3>

                        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/50">
                            {period === "upcoming"
                                ? "Мы уже готовим следующие выходы на сцену. Следите за обновлениями и нашими контактами."
                                : "После добавления истории выступлений здесь можно будет пересмотреть путь команды."}
                        </p>

                        <span
                            className="mt-8 inline-block text-6xl font-black text-white/[0.04]"
                            aria-hidden="true"
                        >
                            МИФЫ
                        </span>
                    </div>
                )}
            </Container>
        </section>
    )
}

export default Events