import { useEffect, useRef, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Images } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { fadeUpContainer, fadeUpItem } from "@/lib/animations"
import { pastEvents } from "@/data/pastEvents"
import { speakers } from "@/data/speakers"

// ── Count-up hook (same pattern as Stats.tsx) ────────────────────────────────

function useCountUp(target: number, duration: number = 1500, start: boolean) {
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!start) return
		let startTime: number | null = null
		const step = (timestamp: number) => {
			if (!startTime) startTime = timestamp
			const progress = Math.min((timestamp - startTime) / duration, 1)
			const eased = 1 - Math.pow(1 - progress, 3)
			setCount(Math.floor(eased * target))
			if (progress < 1) requestAnimationFrame(step)
		}
		requestAnimationFrame(step)
	}, [start, target, duration])

	return count
}

interface StatItemProps {
	value: number
	suffix: string
	label: string
	start: boolean
}

function StatItem({ value, suffix, label, start }: StatItemProps) {
	const count = useCountUp(value, 1500, start)
	return (
		<motion.div
			variants={fadeUpItem}
			className="flex flex-col items-center justify-center gap-2 text-center"
		>
			<span className="font-heading font-extrabold text-3xl md:text-6xl flex items-baseline gap-1 text-brand-gradient">
				<span>{count}</span>
				<span>{suffix}</span>
			</span>
			<span className="text-sm text-muted-foreground uppercase tracking-widest">
				{label}
			</span>
		</motion.div>
	)
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PastEvent() {
	const { year } = useParams<{ year: string }>()
	const navigate = useNavigate()

	const pastEvent = pastEvents.find((pe) => pe.year === Number(year))

	useEffect(() => {
		if (!pastEvent) navigate("/", { replace: true })
	}, [pastEvent, navigate])

	// Stats animation trigger
	const [statsStarted, setStatsStarted] = useState(false)
	const statsRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setStatsStarted(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.3 }
		)
		if (statsRef.current) observer.observe(statsRef.current)
		return () => observer.disconnect()
	}, [])

	if (!pastEvent) return null

	const pageSpeakers = pastEvent.speakers
		.map((id) => speakers.find((s) => s.id === id))
		.filter((s): s is (typeof speakers)[number] => s !== undefined)

	return (
		<div className="min-h-screen bg-background">
			<motion.div
				variants={fadeUpContainer}
				initial="hidden"
				animate="show"
				className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-20"
			>
				{/* Back */}
				<motion.div variants={fadeUpItem}>
					<Link to="/events">
						<Button variant="ghost" size="sm" className="-ml-2 text-muted-foreground hover:text-foreground">
							<ArrowLeft className="size-3.5 mr-1" /> All Events
						</Button>
					</Link>
				</motion.div>

				{/* Header */}
				<motion.div variants={fadeUpItem} className="flex flex-col gap-4">
					<p className="text-sm uppercase tracking-widest text-muted-foreground">
						Tech Industry Night
					</p>
					<h1 className="font-heading font-extrabold text-5xl md:text-7xl leading-tight">
						TIN{" "}
						<span className="text-brand-gradient">{pastEvent.year}</span>
					</h1>
					<p className="text-xl md:text-2xl text-muted-foreground font-heading">
						{pastEvent.tagline}
					</p>
					<div className="flex flex-col gap-1 text-sm text-muted-foreground mt-2">
						<span>{pastEvent.date}</span>
						<span>{pastEvent.venue}</span>
					</div>
				</motion.div>

				{/* Stats strip */}
				<section
					ref={statsRef}
					className="py-16 px-6 rounded-2xl border border-border bg-muted/20"
				>
					<motion.div
						variants={fadeUpContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.3 }}
						className="grid grid-cols-3 gap-6 divide-x divide-border"
					>
						<StatItem
							value={pastEvent.attendees}
							suffix="+"
							label="Attendees"
							start={statsStarted}
						/>
						<StatItem
							value={pastEvent.companies}
							suffix="+"
							label="Companies"
							start={statsStarted}
						/>
						<StatItem
							value={pastEvent.clubs}
							suffix=""
							label="Student Clubs"
							start={statsStarted}
						/>
					</motion.div>
				</section>

				{/* Highlights */}
				<motion.div variants={fadeUpItem} className="flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						<p className="text-sm uppercase tracking-widest text-muted-foreground">
							Highlights
						</p>
						<h2 className="font-heading font-bold text-3xl md:text-4xl">
							The Night in{" "}
							<span className="text-brand-gradient">Brief</span>
						</h2>
					</div>
					<ul className="flex flex-col gap-4">
						{pastEvent.highlights.map((point, i) => (
							<li key={i} className="flex items-start gap-3">
								<span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
								<p className="text-muted-foreground">{point}</p>
							</li>
						))}
					</ul>
				</motion.div>

				{/* Speakers */}
				{pageSpeakers.length > 0 && (
					<>
						<Separator />
						<motion.div
							variants={fadeUpContainer}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, amount: 0.2 }}
							className="flex flex-col gap-10"
						>
							<motion.div variants={fadeUpItem} className="flex flex-col gap-2">
								<p className="text-sm uppercase tracking-widest text-muted-foreground">
									Industry Leaders
								</p>
								<h2 className="font-heading font-bold text-3xl md:text-4xl">
									{pastEvent.year}{" "}
									<span className="text-brand-gradient">Speakers</span>
								</h2>
							</motion.div>

							<motion.div
								variants={fadeUpContainer}
								className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
							>
								{pageSpeakers.map((speaker) => (
									<motion.div key={speaker.id} variants={fadeUpItem}>
										<motion.div
											whileHover={{ y: -4, transition: { duration: 0.2 } }}
											className="group"
										>
											<Card className="group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5 overflow-hidden flex flex-col h-full transition-all duration-300">
												<img
													src={speaker.photo}
													alt={speaker.name}
													className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
												/>
												<CardContent className="flex flex-col flex-1 gap-3 pt-4">
													<div className="flex flex-col gap-1">
														<h3 className="font-heading font-bold text-lg leading-tight">
															{speaker.name}
														</h3>
														<p className="text-sm text-muted-foreground">
															{speaker.title}
														</p>
														<p className="text-sm text-muted-foreground">
															{speaker.company}
														</p>
													</div>
												</CardContent>
												<CardFooter>
													<Link
														to={`/speaker/${speaker.id}`}
														className="w-full"
													>
														<Button className="w-full" variant="outline">
															View Profile{" "}
															<ArrowRight className="size-3.5 ml-1" />
														</Button>
													</Link>
												</CardFooter>
											</Card>
										</motion.div>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					</>
				)}

				{/* Gallery CTA */}
				<motion.div
					variants={fadeUpItem}
					className="flex flex-col items-center gap-4 py-16 rounded-2xl border border-dashed border-border bg-muted/20 text-center"
				>
					<div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
						<Images className="size-8 text-muted-foreground" />
					</div>
					<div className="flex flex-col gap-1">
						<p className="font-heading font-bold text-lg">
							View the {pastEvent.year} Gallery
						</p>
						<p className="text-sm text-muted-foreground max-w-sm mx-auto">
							Browse photos from the night — the moments, the connections, and
							the memories.
						</p>
					</div>
					<Link to="/gallery">
						<Button className="bg-brand-gradient text-white border-0 hover:opacity-90 transition-opacity mt-2">
							View Gallery <ArrowRight className="size-3.5 ml-1" />
						</Button>
					</Link>
				</motion.div>
			</motion.div>
		</div>
	)
}
