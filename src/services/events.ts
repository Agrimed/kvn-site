import { events, type TeamEvent } from "../data/events"

export type EventsPeriod = "upcoming" | "past"

const byStartDate = (left: TeamEvent, right: TeamEvent) =>
    new Date(left.startAt).getTime() - new Date(right.startAt).getTime()

export function getPublishedEvents(): TeamEvent[] {
    return events.filter((event) => event.status === "published")
}

export function getEventsByPeriod(
    period: EventsPeriod,
    now = new Date(),
): TeamEvent[] {
    const currentTime = now.getTime()
    const publishedEvents = getPublishedEvents()

    if (period === "past") {
        return publishedEvents
            .filter(
                (event) =>
                    new Date(event.endAt ?? event.startAt).getTime() < currentTime,
            )
            .sort((left, right) => byStartDate(right, left))
    }

    return publishedEvents
        .filter(
            (event) =>
                new Date(event.endAt ?? event.startAt).getTime() >= currentTime,
        )
        .sort((left, right) => {
            if (Boolean(left.featured) !== Boolean(right.featured)) {
                return left.featured ? -1 : 1
            }

            return byStartDate(left, right)
        })
}