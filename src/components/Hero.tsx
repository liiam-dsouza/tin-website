// src/components/sections/Hero.tsx
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { event } from "@/data/event"
import { fadeUpContainer, fadeUpItem } from "@/lib/animations"
import type { Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}

// Post event stats to show in the recap hero
const recapStats = [
  { value: "150+", label: "Attendees" },
  { value: "30+",  label: "Industry Reps" },
  { value: "12",   label: "Student Clubs" },
  { value: "5k+",  label: "Impressions" },
]

export default function Hero() {
  const isPostEvent = event.postEvent

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ background: "var(--brand-gradient)" }}
      />

      <AnimatePresence mode="wait">
        {isPostEvent ? (
          <PostEventHero key="post" />
        ) : (
          <PreEventHero key="pre" />
        )}
      </AnimatePresence>

      {/* Scroll chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function PreEventHero() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8"
    >
      <motion.div variants={itemVariants}>
        <img src="/logo.svg" alt="Tech Industry Night" className="h-16 w-auto" />
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col gap-3">
        <h1 className="font-heading font-extrabold text-5xl md:text-7xl leading-tight">
          Tech Industry Night{" "}
          <span className="text-brand-gradient">{event.year}</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-heading">
          {event.tagline}
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center gap-1 text-sm text-muted-foreground"
      >
        <span>{event.date.toLocaleDateString("en-AU", {
          weekday: "long", day: "numeric", month: "long", year: "numeric"
        })}</span>
        <span>{event.venue}</span>
      </motion.div>

      <CountdownSection />

      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        <Button
          size="lg"
          className="bg-brand-gradient text-white border-0 hover:opacity-90 transition-opacity"
        >
          <a href={event.ticketingUrl} target="_blank" rel="noreferrer">
            Get Your Ticket
          </a>
        </Button>
        <Button size="lg" variant="outline">
          <a href={`mailto:${event.email.industry}`}>
            Industry Partnerships
          </a>
        </Button>
      </motion.div>
    </motion.div>
  )
}

function PostEventHero() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-10"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          That's a wrap
        </p>
        <h1 className="font-heading font-extrabold text-5xl md:text-7xl leading-tight">
          Tech Industry Night{" "}
          <span className="text-brand-gradient">{event.year}</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-heading">
          Thank you to everyone who made it happen.
        </p>
      </motion.div>

      {/* Recap stats */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-2xl"
      >
        {recapStats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="font-heading font-extrabold text-4xl md:text-5xl text-brand-gradient">
              {stat.value}
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        <Button
          size="lg"
          className="bg-brand-gradient text-white border-0 hover:opacity-90 transition-opacity"
        >
          <a href="/gallery">
            View the Gallery
          </a>
        </Button>
        <Button size="lg" variant="outline">
          <a href={`/events/${event.year}`}>
            View Recap
          </a>
        </Button>
        <Button size="lg" variant="outline">
          <a href={`mailto:${event.email.industry}`}>
            Partner for {event.nextYear}
          </a>
        </Button>
      </motion.div>

      {/* Next year teaser */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center gap-2"
      >
        <p className="text-sm text-muted-foreground">
          TIN {event.nextYear} is coming. Stay tuned.
        </p>
        <div className="flex items-center gap-3">
		  <a
            href={event.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Follow on Instagram
          </a>
          <span className="text-muted-foreground">·</span>
		<a
            href={event.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Follow on LinkedIn
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Extracted countdown so PreEventHero stays clean
interface TimeLeft {
  days: number
  hours: number
  mins: number
  secs: number
}

function useCountdown(target: Date): TimeLeft {
  const calc = (): TimeLeft => {
    const diff = Math.max(0, target.getTime() - Date.now())
    return {
      days:  Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins:  Math.floor((diff % 3600000) / 60000),
      secs:  Math.floor((diff % 60000) / 1000),
    }
  }
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calc)
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return timeLeft
}

function AnimatedDigits({ value }: { value: number }) {
  const padded = String(value).padStart(2, "0")
  return (
    <div className="flex text-3xl sm:text-4xl md:text-5xl">
      {padded.split("").map((digit, i) => (
        <div
          key={i}
          className="relative overflow-hidden"
          style={{ width: "0.6em", height: "1.4em" }}
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={digit}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" as const }}
              className="absolute inset-0 flex items-center justify-center font-heading font-bold tabular-nums"
            >
              {digit}
            </motion.span>
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <AnimatedDigits value={value} />
      <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">
        {label}
      </span>
    </div>
  )
}

function CountdownSection() {
  const timeLeft = useCountdown(event.date)
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center gap-3 sm:gap-6 md:gap-10"
    >
      <CountdownUnit value={timeLeft.days} label="Days" />
      <span className="countdown-delimiter text-lg sm:text-2xl text-muted-foreground font-heading mb-4">:</span>
      <CountdownUnit value={timeLeft.hours} label="Hours" />
      <span className="countdown-delimiter text-lg sm:text-2xl text-muted-foreground font-heading mb-4">:</span>
      <CountdownUnit value={timeLeft.mins} label="Mins" />
      <span className="countdown-delimiter text-lg sm:text-2xl text-muted-foreground font-heading mb-4">:</span>
      <CountdownUnit value={timeLeft.secs} label="Secs" />
    </motion.div>
  )
}
