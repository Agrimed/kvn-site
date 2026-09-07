export type GalleryLayout =
    | "large"
    | "wide"
    | "standard"
    | "tall"

export type GalleryPhoto = {
    id: string
    src: string
    alt: string
    caption: string
    meta: string
    position?: string
    layout: GalleryLayout
}

const imageModules = import.meta.glob<string>(
    "../assets/gallery/**/*.{jpg,jpeg,png,webp,avif}",
    {
        eager: true,
        query: "?url",
        import: "default",
    },
)

const layoutOrder: GalleryLayout[] = [
    "large",
    "wide",
    "standard",
    "tall",
    "standard",
    "wide",
    "standard",
    "standard",
]

function getFileName(path: string) {
    return path.split("/").pop() ?? path
}

function getPhotoName(path: string) {
    return getFileName(path)
        .replace(/\.[^.]+$/, "")
        .replace(/^\d+[-_ ]*/, "")
        .replace(/[-_]+/g, " ")
        .trim()
}

export const galleryPhotos: GalleryPhoto[] =
    Object.entries(imageModules)
        .sort(([leftPath], [rightPath]) =>
            leftPath.localeCompare(rightPath, "ru", {
                numeric: true,
            }),
        )
        .map(([path, src], index) => {
            const photoName = getPhotoName(path)
            const number = String(index + 1).padStart(2, "0")

            return {
                id: getFileName(path)
                    .replace(/\.[^.]+$/, "")
                    .replace(/[^a-zA-Z0-9а-яА-ЯёЁ_-]/g, "-"),
                src,
                alt: photoName
                    ? `${photoName} — команда КВН «Мифы»`
                    : `Фотография команды КВН «Мифы» №${number}`,
                caption: photoName || `Фотография ${number}`,
                meta: `Мифы · Архив ${number}`,
                position: "center",
                layout:
                    layoutOrder[index % layoutOrder.length],
            }
        })