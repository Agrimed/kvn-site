import { useState } from "react"
import GalleryGrid from "../gallery/GalleryGrid"
import GalleryLightbox from "../gallery/GalleryLightbox"
import { galleryPhotos } from "../../data/gallery"
import Container from "../ui/Container"
import SectionHeading from "../ui/SectionHeading"

function Gallery() {
    const [activeIndex, setActiveIndex] =
        useState<number | null>(null)

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
                    photos={galleryPhotos}
                    onOpen={setActiveIndex}
                />
            </Container>

            {activeIndex !== null && (
                <GalleryLightbox
                    photos={galleryPhotos}
                    activeIndex={activeIndex}
                    onChange={setActiveIndex}
                    onClose={() => setActiveIndex(null)}
                />
            )}
        </section>
    )
}

export default Gallery