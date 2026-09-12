import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { fadeUpContainer, fadeUpItem } from "@/lib/animations"
import { gallery } from "@/data/gallery"
import { organisers } from "@/data/organisers"
import { event } from "@/data/event"
import { pastEvents } from "@/data/pastEvents"

interface LightboxProps {
  photos: { src: string; thumb: string; alt: string; caption?: string }[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function Lightbox({ photos, index, onClose, onPrev, onNext }: LightboxProps) {
  const photo = photos[index]

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft" && index > 0) onPrev()
      if (e.key === "ArrowRight" && index < photos.length - 1) onNext()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [index, photos.length, onClose, onPrev, onNext])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
      >
        <X className="size-5" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 text-sm text-muted-foreground font-mono">
        {index + 1} / {photos.length}
      </div>

      {/* Image */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative max-w-5xl max-h-[80vh] w-full px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-contain max-h-[75vh] rounded-xl"
        />
        {photo.caption && (
          <p className="text-center text-sm text-muted-foreground mt-3">
            {photo.caption}
          </p>
        )}
      </motion.div>

      {/* Prev */}
      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-4 h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="size-5" />
        </button>
      )}

      {/* Next */}
      {index < photos.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-4 h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronRight className="size-5" />
        </button>
      )}
    </motion.div>
  )
}

interface GalleryGridProps {
  photos: { src: string; thumb: string; alt: string; caption?: string }[]
  onPhotoClick: (index: number) => void
  variant?: "hero" | "compact"
}

function GalleryGrid({ photos, onPhotoClick, variant = "hero" }: GalleryGridProps) {
  if (variant === "hero" && photos.length >= 3) {
    const [hero, ...rest] = photos
    return (
      <div className="flex flex-col gap-2">
        <motion.div
          whileHover={{ opacity: 0.9 }}
          className="relative aspect-video overflow-hidden rounded-xl cursor-pointer group"
          onClick={() => onPhotoClick(0)}
        >
          <img
            src={hero.thumb}
            alt={hero.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {rest.map((photo, i) => (
            <motion.div
              key={i}
              whileHover={{ opacity: 0.9 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => onPhotoClick(i + 1)}
            >
              <img
                src={photo.thumb}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {photos.map((photo, i) => (
        <motion.div
          key={i}
          whileHover={{ opacity: 0.9 }}
          className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
          onClick={() => onPhotoClick(i)}
        >
          <img
            src={photo.thumb}
            alt={photo.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        </motion.div>
      ))}
    </div>
  )
}

function ClubStrip({ clubIds }: { clubIds: string[] }) {
  const clubs = clubIds
    .map((id) => organisers.find((o) => o.id === id))
    .filter(Boolean)

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-muted-foreground uppercase tracking-widest">
        {clubs.length} Organising Clubs
      </p>
      <div className="flex flex-wrap gap-3">
        {clubs.map((club) => (
          <div
            key={club!.id}
            className="h-10 w-10 rounded-lg overflow-hidden bg-white border border-border flex items-center justify-center p-1.5 shrink-0"
            title={club!.name}
          >
            <img
              src={club!.logo}
              alt={club!.name}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const yearBlurbs: Record<number, { title: string; description: string; stats?: string }> =
  Object.fromEntries(
    pastEvents.map((pe) => [
      pe.year,
      {
        title: pe.tagline,
        description: pe.galleryBlurb ?? pe.highlights.join(" "),
        stats: `${pe.attendees}+ attendees · ${pe.venue} · ${pe.clubs} clubs`,
      },
    ])
  )

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{ yearIndex: number; photoIndex: number } | null>(null)

  const sortedGallery = [...gallery]
    .filter((y) => event.hasPhotos || y.year !== event.year)
    .sort((a, b) => b.year - a.year)

  const currentLightboxPhotos = lightbox !== null
    ? sortedGallery[lightbox.yearIndex].photos
    : []

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        variants={fadeUpContainer}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-20"
      >
        {/* Header */}
        <motion.div variants={fadeUpItem} className="text-center flex flex-col gap-3">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Event Highlights
          </p>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl">
            Past <span className="text-brand-gradient">Events</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A look back at the moments, connections, and memories made at
            previous Tech Industry Nights.
          </p>
        </motion.div>

        {/* Current year — coming soon or photos */}
        {!event.hasPhotos && (
          <motion.div variants={fadeUpItem} className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <h2 className="font-heading font-bold text-2xl">{event.year}</h2>
                <Badge className="bg-brand-gradient text-white border-0">
                  {event.postEvent ? "Coming Soon" : "Upcoming"}
                </Badge>
              </div>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="flex flex-col items-center justify-center py-20 gap-4 rounded-2xl border border-dashed border-border bg-muted/20 text-center">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                <Images className="size-8 text-muted-foreground" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-heading font-bold text-lg">Photos Coming Soon</p>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Photos from Tech Industry Night {event.year} will appear here after the event.
                </p>
              </div>
              {!event.postEvent && (
                <Button className="bg-brand-gradient text-white border-0 mt-2">
                  <a href={event.ticketingUrl} target="_blank" rel="noreferrer">
                    Get Your Ticket
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        )}

        {/* Past years */}
        {sortedGallery.map((yearData, yearIndex) => {
          const blurb = yearBlurbs[yearData.year]
          const isHero = yearData.year === Math.max(...sortedGallery.map((y) => y.year))

          return (
            <motion.div
              key={yearData.year}
              variants={fadeUpItem}
              className="flex flex-col gap-6"
            >
              {/* Year header */}
              <div className="flex items-center gap-4">
                <h2 className="font-heading font-bold text-2xl">{yearData.year}</h2>
				<div className="h-px bg-border w-2" />
                {blurb?.title && (
                  <span className="text-muted-foreground text-sm font-heading">
                    {blurb.title}
                  </span>
                )}
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground shrink-0">
                  {yearData.photos.length} photos
                </span>
              </div>

              {/* Blurb */}
              {blurb && (
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-muted-foreground max-w-2xl">
                    {blurb.description}
                  </p>
                  {blurb.stats && (
                    <p className="text-xs text-muted-foreground font-mono">
                      {blurb.stats}
                    </p>
                  )}
                </div>
              )}

              {/* Club strip */}
              {yearData.clubs && yearData.clubs.length > 0 && (
                <ClubStrip clubIds={yearData.clubs} />
              )}

              {/* Photos */}
              {yearData.photos.length > 0 ? (
                <GalleryGrid
                  photos={yearData.photos}
                  onPhotoClick={(photoIndex) => setLightbox({ yearIndex, photoIndex })}
                  variant={isHero ? "hero" : "compact"}
                />
              ) : (
                <div className="flex items-center justify-center py-12 rounded-xl border border-dashed border-border text-sm text-muted-foreground">
                  Photos coming soon
                </div>
              )}
            </motion.div>
          )
        })}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            photos={currentLightboxPhotos}
            index={lightbox.photoIndex}
            onClose={() => setLightbox(null)}
            onPrev={() => setLightbox((prev) => prev ? { ...prev, photoIndex: prev.photoIndex - 1 } : null)}
            onNext={() => setLightbox((prev) => prev ? { ...prev, photoIndex: prev.photoIndex + 1 } : null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
