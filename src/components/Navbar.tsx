// src/components/Navbar.tsx
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, Moon, Sun, Search } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { event } from "@/data/event"

const navLinks = [
	// { label: "Schedule", href: "/#schedule" },
	// { label: "Speakers", href: "/#speakers" },
	// { label: "FAQ",      href: "/#faq"      },
	// { label: "Tickets",  href: "/#tickets"  },
	{ label: "About",    href: "/about"     },
	{ label: "Gallery",  href: "/gallery"   },
	{ label: "Past Events", href: "/events"    },
]

interface NavbarProps {
	theme: "light" | "dark"
	onToggleTheme: () => void
	onOpenPalette: () => void
}

export function Navbar({ theme, onToggleTheme, onOpenPalette }: NavbarProps) {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 20)
		window.addEventListener("scroll", handler)
		return () => window.removeEventListener("scroll", handler)
	}, [])

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
				? "bg-background/80 backdrop-blur-md border-b border-border"
				: "bg-transparent"
			}`}
			>
			<nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-2">
				<img
					src={theme === "light" ? "/logo-dark.svg" : "/logo-light.svg"}
					alt="TIN Logo"
					className="size-12 w-auto"
				/>
				<span className="font-heading font-bold text-lg hidden sm:block">
					Tech Industry Night
				</span>
				</Link>

				{/* Desktop links */}
				<div className="hidden md:flex items-center gap-6">
				{navLinks.map((link) => (
					<a
					key={link.href}
					href={link.href}
					className="text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
					{link.label}
					</a>
				))}
				</div>

				{/* Right side */}
				<div className="flex items-center gap-2">
				{/* Theme toggle */}
				<button
					onClick={onToggleTheme}
					aria-label="Toggle theme"
					className="inline-flex items-center justify-center h-9 w-9 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
				>
					{theme === "dark" ? (
					<Sun className="h-4 w-4" />
					) : (
					<Moon className="h-4 w-4" />
					)}
				</button>

				{/* Command palette trigger */}
				{/* <button
					onClick={onOpenPalette}
					className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-muted/30 text-xs text-muted-foreground hover:border-primary/40 hover:bg-muted/50 transition-colors"
				>
					<Search className="size-3" />
					<span>Search</span>
					<kbd className="font-mono text-[10px] bg-background border border-border rounded p-1">
					ctrl + K
					</kbd>
				</button> */}

				{/* Get tickets */}
				{/* <a
					href={event.ticketingUrl}
					target="_blank"
					rel="noreferrer"
					className="hidden md:inline-flex items-center justify-center text-sm font-medium h-9 px-4 rounded-md bg-brand-gradient text-white hover:opacity-90 transition-opacity"
				>
					Get Tickets
				</a> */}

				{/* Mobile menu */}
				<Sheet>
					<SheetTrigger className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
					<Menu className="h-4 w-4" />
					</SheetTrigger>
					<SheetContent side="right" className="w-72">
					<div className="flex flex-col gap-6 mt-8">
						{navLinks.map((link) => (
						<SheetClose key={link.href}>
							<a
							href={link.href}
							className="text-lg font-heading font-semibold hover:text-primary transition-colors"
							>
							{link.label}
							</a>
						</SheetClose>
						))}
						<Separator />
						<button
						onClick={onOpenPalette}
						className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-muted/30 text-sm text-muted-foreground hover:border-primary/40 transition-colors"
						>
						<Search className="size-4" />
						<span>Search</span>
						</button>

						<a
						href={event.ticketingUrl}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 rounded-md bg-brand-gradient text-white hover:opacity-90 transition-opacity w-full"
						>
						Get Tickets
						</a>
					</div>
					</SheetContent>
				</Sheet>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
