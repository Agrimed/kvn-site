import type { GalleryPhoto } from "../../data/gallery"
import GalleryItem from "./GalleryItem"

type GalleryGridProps = {
    photos: GalleryPhoto[]
    onOpen: (index: number) => void
}

function GalleryGrid({
    photos,
    onOpen,
}: GalleryGridProps) {
    return (
        <div className="mt-12 sm:mt-16">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 lg:grid lg:auto-rows-[13rem] lg:grid-cols-4 lg:overflow-visible lg:pb-0">
                {photos.map((photo, index) => (
                    <GalleryItem
                        key={photo.id}
                        photo={photo}
                        index={index}
                        onOpen={() => onOpen(index)}
                    />
                ))}
            </div>

            <div className="mt-5 flex items-center gap-4 lg:hidden">
                <span
                    className="h-px flex-1 bg-white/10"
                    aria-hidden="true"
                />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                    Листайте фотографии
                </p>

                <span
                    className="text-amber-300"
                    aria-hidden="true"
                >
                    →
                </span>
            </div>
        </div>
    )
}

export default GalleryGrid