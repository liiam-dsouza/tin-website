const images2026 = import.meta.glob(
	"/src/assets/gallery/2026/*.{jpg,jpeg,png}",
	{
		eager: true,
		query: { format: "webp", width: "1200", quality: "80" },
		import: "default",
	}
)

const thumbs2026 = import.meta.glob(
	"/src/assets/gallery/2026/*.{jpg,jpeg,png}",
	{
		eager: true,
		query: { format: "webp", width: "600", quality: "70" },
		import: "default",
	}
)

const images2025 = import.meta.glob(
	"/src/assets/gallery/2025/*.{jpg,jpeg,png}",
	{
		eager: true,
		query: { format: "webp", width: "1200", quality: "80" },
		import: "default",
	}
)

const thumbs2025 = import.meta.glob(
	"/src/assets/gallery/2025/*.{jpg,jpeg,png}",
	{
		eager: true,
		query: { format: "webp", width: "600", quality: "70" },
		import: "default",
	}
)

const images2024 = import.meta.glob(
	"/src/assets/gallery/2024/*.{jpg,jpeg,png}",
	{
		eager: true,
		query: { format: "webp", width: "1200", quality: "80" },
		import: "default",
	}
)

const thumbs2024 = import.meta.glob(
	"/src/assets/gallery/2024/*.{jpg,jpeg,png}",
	{
		eager: true,
		query: { format: "webp", width: "600", quality: "70" },
		import: "default",
	}
)

const images2023 = import.meta.glob(
	"/src/assets/gallery/2023/*.{jpg,jpeg,png}",
	{
		eager: true,
		query: { format: "webp", width: "1200", quality: "80" },
		import: "default",
	}
)

const thumbs2023 = import.meta.glob(
	"/src/assets/gallery/2023/*.{jpg,jpeg,png}",
	{
		eager: true,
		query: { format: "webp", width: "600", quality: "70" },
		import: "default",
	}
)

function buildPhotos(
	images: Record<string, unknown>,
	thumbs: Record<string, unknown>,
	year: number
): GalleryPhoto[] {
	const thumbValues = Object.values(thumbs)

	return Object.values(images).map((src, index) => ({
		id: `${year}-${index + 1}`,
		src: src as string,
		thumb: (thumbValues[index] as string) ?? (src as string),
		alt: `Tech Industry Night ${year} — photo ${index + 1}`,
		year,
	}))
}

const photos2026 = buildPhotos(images2026, thumbs2026, 2026)
const photos2025 = buildPhotos(images2025, thumbs2025, 2025)
const photos2024 = buildPhotos(images2024, thumbs2024, 2024)
const photos2023 = buildPhotos(images2023, thumbs2023, 2023)

export interface GalleryPhoto {
	id: string
	src: string           // full size for lightbox
	thumb: string         // smaller for grid
	alt: string
	year: number
	caption?: string
}

export interface GalleryYear {
	year: number
	coverImage: string            // shown as the year's hero/thumbnail
	photoCount: number            // derived, but useful to pre-declare for skeletons
	photos: GalleryPhoto[]
	clubs?: string[]              // organiser ids from organisers.ts
	attendees?: number            // for the stats line
}

export const gallery: GalleryYear[] = [
	{
		year: 2026,
		coverImage: photos2026[0]?.src ?? "",
		photoCount: photos2026.length,
		photos: photos2026,
		clubs: ["bands", "cn", "aero", "csc", "eess", "gdc", "lits", "wit", "rl", "tech", "qutrc"],
		attendees: 150,
  },
  {
    year: 2025,
    coverImage: photos2025[0]?.src ?? "",
    photoCount: photos2025.length,
    photos: photos2025,
	clubs: ["bands", "cn", "aero", "csc", "eess", "gdc", "lits", "wit", "rl", "tech"],
	attendees: 300,
  },
  {
    year: 2024,
	coverImage: photos2024[0]?.src ?? "",
    photoCount: photos2024.length,
    photos: photos2024,
	clubs: ["bands", "cn", "csc", "gdc", "wit", "rl"],
	attendees: 130,
  },
  {
	year: 2023,
	coverImage: photos2023[0]?.src ?? "",
    photoCount: photos2023.length,
    photos: photos2023,
	attendees: 100,
	clubs: ["cn", "csc", "gdc", "wit", "rl"],
  }
]
