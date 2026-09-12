// src/components/CommandPalette.tsx
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Calendar,
  Ticket,
  Users,
  Image,
  Building2,
  HelpCircle,
  FileText,
  Shield,
  QrCode,
  Mic,
  Grid,
  ExternalLink,
} from "lucide-react"
import { IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react"
import { speakers } from "@/data/speakers"
import { event } from "@/data/event"
import { pastEvents } from "@/data/pastEvents"

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const navigate = useNavigate()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        onOpenChange(true)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onOpenChange])

  const go = (path: string) => {
    navigate(path)
    onOpenChange(false)
  }

  const scrollTo = (id: string) => {
    onOpenChange(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const openExternal = (url: string) => {
    window.open(url, "_blank", "noreferrer")
    onOpenChange(false)
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search TIN 2026..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigation">
          <CommandItem
            onSelect={() => scrollTo("schedule")}
            keywords={["schedule", "timeline", "sessions", "program"]}
          >
            <Calendar className="size-4 mr-2 text-muted-foreground" />
            <span>Event Schedule</span>
            <span className="ml-auto text-xs text-muted-foreground">Jump to section</span>
          </CommandItem>
          <CommandItem
            onSelect={() => scrollTo("speakers")}
            keywords={["speakers", "keynote", "talks"]}
          >
            <Mic className="size-4 mr-2 text-muted-foreground" />
            <span>Speakers</span>
            <span className="ml-auto text-xs text-muted-foreground">Jump to section</span>
          </CommandItem>
          <CommandItem
            onSelect={() => scrollTo("tickets")}
            keywords={["tickets", "buy", "purchase", "price"]}
          >
            <Ticket className="size-4 mr-2 text-muted-foreground" />
            <span>Tickets</span>
            <span className="ml-auto text-xs text-muted-foreground">Jump to section</span>
          </CommandItem>
          <CommandItem
            onSelect={() => scrollTo("faq")}
            keywords={["faq", "questions", "help"]}
          >
            <HelpCircle className="size-4 mr-2 text-muted-foreground" />
            <span>FAQs</span>
            <span className="ml-auto text-xs text-muted-foreground">Jump to section</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Pages">
          <CommandItem
            onSelect={() => go("/gallery")}
            keywords={["gallery", "photos", "pictures", "previous"]}
          >
            <Image className="size-4 mr-2 text-muted-foreground" />
            <span>Gallery</span>
          </CommandItem>
          <CommandItem
            onSelect={() => go("/events")}
            keywords={["past", "events", "archive", "history", "previous"]}
          >
            <Building2 className="size-4 mr-2 text-muted-foreground" />
            <span>Past Events</span>
          </CommandItem>
          {pastEvents.map((pe) => (
            <CommandItem
              key={pe.year}
              onSelect={() => go(`/events/${pe.year}`)}
              keywords={[String(pe.year), "recap", "past", "events"]}
            >
              <Building2 className="size-4 mr-2 text-muted-foreground" />
              <span>TIN {pe.year} Recap</span>
            </CommandItem>
          ))}
          {/* <CommandItem
            onSelect={() => go("/sponsors")}
            keywords={["sponsors", "partners", "companies"]}
          >
            <Building2 className="size-4 mr-2 text-muted-foreground" />
            <span>Sponsors</span>
          </CommandItem> */}
          {/* <CommandItem
            onSelect={() => go("/team")}
            keywords={["team", "committee", "organisers", "people"]}
          >
            <Users className="size-4 mr-2 text-muted-foreground" />
            <span>Our Team</span>
          </CommandItem> */}
          <CommandItem
            onSelect={() => go("/tickets")}
            keywords={["tickets", "buy", "purchase", "humanitix"]}
          >
            <Ticket className="size-4 mr-2 text-muted-foreground" />
            <span>Get Tickets</span>
          </CommandItem>
          <CommandItem
            onSelect={() => go("/privacy")}
            keywords={["privacy", "policy", "legal"]}
          >
            <Shield className="size-4 mr-2 text-muted-foreground" />
            <span>Privacy Policy</span>
          </CommandItem>
          <CommandItem
            onSelect={() => go("/terms")}
            keywords={["terms", "service", "legal"]}
          >
            <FileText className="size-4 mr-2 text-muted-foreground" />
            <span>Terms of Service</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Networking Tools">
          <CommandItem
            onSelect={() => go("/qr-generator")}
            keywords={["qr", "linkedin", "code", "generator"]}
          >
            <QrCode className="size-4 mr-2 text-muted-foreground" />
            <span>LinkedIn QR Generator</span>
          </CommandItem>
          <CommandItem
            onSelect={() => go("/elevator-pitch")}
            keywords={["pitch", "elevator", "timer", "practise"]}
          >
            <Mic className="size-4 mr-2 text-muted-foreground" />
            <span>Elevator Pitch Timer</span>
          </CommandItem>
          {/* <CommandItem
            onSelect={() => go("/bingo")}
            keywords={["bingo", "game", "networking", "night"]}
          >
            <Grid className="size-4 mr-2 text-muted-foreground" />
            <span>Networking Bingo</span>
          </CommandItem> */}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Speakers">
          {speakers.map((speaker) => (
            <CommandItem
              key={speaker.id}
              onSelect={() => go(`/speaker/${speaker.id}`)}
              keywords={[speaker.name, speaker.company, speaker.title]}
            >
              <img
                src={speaker.photo}
                alt={speaker.name}
                className="size-5 rounded-full object-cover object-top mr-2 shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-sm">{speaker.name}</span>
                <span className="text-xs text-muted-foreground">{speaker.title}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="External">
          <CommandItem
            onSelect={() => openExternal(event.ticketingUrl)}
            keywords={["humanitix", "tickets", "buy"]}
          >
            <ExternalLink className="size-4 mr-2 text-muted-foreground" />
            <span>Buy Tickets on Humanitix</span>
          </CommandItem>
          <CommandItem
            onSelect={() => openExternal(event.socials.instagram)}
            keywords={["instagram", "social", "follow"]}
          >
            <IconBrandInstagram className="size-4 mr-2 text-muted-foreground" />
            <span>Follow on Instagram</span>
          </CommandItem>
          <CommandItem
            onSelect={() => openExternal(event.socials.linkedin)}
            keywords={["linkedin", "social", "follow"]}
          >
            <IconBrandLinkedin className="size-4 mr-2 text-muted-foreground" />
            <span>Follow on LinkedIn</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
