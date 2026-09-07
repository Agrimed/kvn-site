import { useEffect, useRef } from "react"
import type { GalleryPhoto } from "../../data/gallery"

type GalleryLightboxProps = {
    photos: GalleryPhoto[]
    activeIndex: number
    onChange: (index: number) => void
    onClose: () => void
}

function GalleryLightbox({
    photos,
    activeIndex,
    onChange,
    onClose,
}: GalleryLightboxProps) {
    const closeButtonRef =
        useRef<HTMLButtonElement>(null)

    const activePhoto = photos[activeIndex]

    const showPrevious = () => {
        onChange(
            (activeIndex - 1 + photos.length) %
            photos.length,
        )
    }

    const showNext = () => {
        onChange((activeIndex + 1) % photos.length)
    }

    useEffect(() => {
        const previousOverflow =
            document.body.style.overflow

        document.body.style.overflow = "hidden"
        closeButtonRef.current?.focus()

        const handleKeyDown = (
            event: KeyboardEvent,
        ) => {
            if (event.key === "Escape") {
                onClose()
            }

            if (event.key === "ArrowLeft") {
                showPrevious()
            }

            if (event.key === "ArrowRight") {
                showNext()
            }
        }

        window.addEventListener(
            "keydown",
            handleKeyDown,
        )

        return () => {
            document.body.style.overflow =
                previousOverflow

            window.removeEventListener(
                "keydown",
                handleKeyDown,
            )
        }
    })

    if (!activePhoto) {
        return null
    }

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={`Фотография ${activeIndex + 1} из ${photos.length}`}
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose()
                }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-20 backdrop-blur-md sm:px-8"
        >
            <div className="absolute inset-x-5 top-5 flex items-center justify-between sm:inset-x-8 sm:top-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                    {String(activeIndex + 1).padStart(
                        2,
                        "0",
                    )}{" "}
                    /{" "}
                    {String(photos.length).padStart(
                        2,
                        "0",
                    )}
                </p>

                <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={onClose}
                    aria-label="Закрыть галерею"
                    className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] transition hover:border-amber-300/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
                >
                    <span
                        className="absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white transition-colors group-hover:bg-amber-300"
                        aria-hidden="true"
                    />

                    <span
                        className="absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white transition-colors group-hover:bg-amber-300"
                        aria-hidden="true"
                    />
                </button>
            </div>

            <figure className="flex h-full w-full max-w-6xl flex-col items-center justify-center">
                <div className="relative min-h-0 w-full flex-1">
                    <img
                        src={activePhoto.src}
                        alt={activePhoto.alt}
                        className="h-full w-full object-contain"
                    />
                </div>

                <figcaption className="mt-5 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                        {activePhoto.meta}
                    </p>

                    <p className="mt-2 text-lg font-bold text-white sm:text-xl">
                        {activePhoto.caption}
                    </p>
                </figcaption>
            </figure>

            {photos.length > 1 && (
                <>
                    <button
                        type="button"
                        onClick={showPrevious}
                        aria-label="Предыдущая фотография"
                        className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/50 text-xl text-amber-300 transition hover:border-amber-300/60 hover:bg-amber-300/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 sm:bottom-auto sm:left-8 sm:top-1/2 sm:-translate-y-1/2"
                    >
                        <span aria-hidden="true">←</span>
                    </button>

                    <button
                        type="button"
                        onClick={showNext}
                        aria-label="Следующая фотография"
                        className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/50 text-xl text-amber-300 transition hover:border-amber-300/60 hover:bg-amber-300/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 sm:bottom-auto sm:right-8 sm:top-1/2 sm:-translate-y-1/2"
                    >
                        <span aria-hidden="true">→</span>
                    </button>
                </>
            )}
        </div>
    )
}

export default GalleryLightbox