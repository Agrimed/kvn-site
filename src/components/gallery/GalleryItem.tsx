import type { CSSProperties } from "react"
import type { GalleryPhoto } from "../../data/gallery"

type GalleryItemProps = {
    photo: GalleryPhoto
    index: number
    onOpen: () => void
}

const layoutClasses = {
    large: "lg:col-span-2 lg:row-span-2",
    wide: "lg:col-span-2",
    standard: "",
    tall: "lg:row-span-2",
}

function GalleryItem({
    photo,
    index,
    onOpen,
}: GalleryItemProps) {
    return (
        <button
            type="button"
            onClick={onOpen}
            aria-label={`Открыть фотографию: ${photo.caption}`}
            className={`group relative min-w-[82vw] snap-center overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 text-left transition duration-500 hover:border-amber-300/45 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 sm:min-w-[65vw] lg:min-w-0 ${layoutClasses[photo.layout]}`}
        >
            <img
                src={photo.src}
                alt={photo.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                style={
                    {
                        objectPosition: photo.position,
                    } as CSSProperties
                }
                className="absolute inset-0 h-full w-full object-cover saturate-[0.8] transition duration-700 group-hover:scale-[1.035] group-hover:saturate-100"
            />

            <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/10 transition group-hover:from-black/70"
                aria-hidden="true"
            />

            <span className="absolute left-5 top-5 text-xs font-bold tracking-[0.2em] text-amber-300">
                {String(index + 1).padStart(2, "0")}
            </span>

            <span className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-lg text-white opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span aria-hidden="true">↗</span>
            </span>

            <span className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-amber-300/80">
                    {photo.meta}
                </span>

                <span className="mt-2 block text-xl font-black uppercase tracking-[-0.03em] text-white">
                    {photo.caption}
                </span>
            </span>
        </button>
    )
}

export default GalleryItem