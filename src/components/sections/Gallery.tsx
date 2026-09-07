import { useMemo, useState } from "react"
import GalleryGrid from "../gallery/GalleryGrid"
import GalleryLightbox from "../gallery/GalleryLightbox"
import {
    galleryPhotos,
    type GalleryPhoto,
} from "../../data/gallery"
import Container from "../ui/Container"
import SectionHeading from "../ui/SectionHeading"

const PHOTOS_PER_PAGE = 10

function shufflePhotos(
    photos: GalleryPhoto[],
): GalleryPhoto[] {
    const shuffledPhotos = [...photos]

    for (
        let index = shuffledPhotos.length - 1;
        index > 0;
        index -= 1
    ) {
        const randomIndex = Math.floor(
            Math.random() * (index + 1),
        )

        const currentPhoto = shuffledPhotos[index]

        shuffledPhotos[index] =
            shuffledPhotos[randomIndex]

        shuffledPhotos[randomIndex] =
            currentPhoto
    }

    return shuffledPhotos
}

function Gallery() {
    const [activeIndex, setActiveIndex] =
        useState<number | null>(null)

    const [visibleCount, setVisibleCount] =
        useState(PHOTOS_PER_PAGE)

    const shuffledPhotos = useMemo(
        () => shufflePhotos(galleryPhotos),
        [],
    )

    const visiblePhotos = shuffledPhotos.slice(
        0,
        visibleCount,
    )

    const remainingPhotos =
        shuffledPhotos.length - visiblePhotos.length

    const hasMorePhotos = remainingPhotos > 0

    const showMorePhotos = () => {
        setVisibleCount((currentCount) =>
            Math.min(
                currentCount + PHOTOS_PER_PAGE,
                shuffledPhotos.length,
            ),
        )
    }

    return (
        <section
            id="gallery"
            className="relative overflow-hidden bg-black py-24 text-white sm:py-28 lg:py-36"
        >
            <div
                className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 text-[19vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.018]"
                aria-hidden="true"
            >
                Кадры
            </div>

            <div
                className="pointer-events-none absolute -left-52 top-1/3 h-[32rem] w-[32rem] rounded-full bg-amber-400/[0.06] blur-3xl"
                aria-hidden="true"
            />

            <Container className="relative">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <SectionHeading
                        eyebrow="Галерея"
                        title="Мифы вне сценария"
                        description="Сцена, репетиции и моменты, которые происходят между выступлениями."
                    />

                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/30">
                        Мифы · Архив
                    </p>
                </div>

                <GalleryGrid
                    photos={visiblePhotos}
                    onOpen={setActiveIndex}
                />

                {hasMorePhotos && (
                    <div className="mt-10 flex flex-col items-center">
                        <button
                            type="button"
                            onClick={showMorePhotos}
                            className="group inline-flex items-center gap-4 rounded-full border border-amber-300/50 bg-amber-300/[0.08] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-amber-200 transition duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-300 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
                        >
                            Показать ещё

                            <span
                                className="transition-transform duration-300 group-hover:translate-y-0.5"
                                aria-hidden="true"
                            >
                                ↓
                            </span>
                        </button>

                        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/30">
                            Осталось фотографий:{" "}
                            {remainingPhotos}
                        </p>
                    </div>
                )}
            </Container>

            {activeIndex !== null && (
                <GalleryLightbox
                    photos={visiblePhotos}
                    activeIndex={activeIndex}
                    onChange={setActiveIndex}
                    onClose={() => setActiveIndex(null)}
                />
            )}
        </section>
    )
}

export default Gallery