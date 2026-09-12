import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Users, Building2, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { fadeUpContainer, fadeUpItem } from "@/lib/animations"
import { pastEvents } from "@/data/pastEvents"

const sorted = [...pastEvents].sort((a, b) => b.year - a.year)

export default function PastEvents() {
	return (
		<div className="min-h-screen bg-background">
			<motion.div
				variants={fadeUpContainer}
				initial="hidden"
				animate="show"
				className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-16"
			>
				{/* Header */}
				<motion.div variants={fadeUpItem} className="flex flex-col gap-3">
					<p className="text-sm uppercase tracking-widest text-muted-foreground">
						Archive
					</p>
					<h1 className="font-heading font-extrabold text-4xl md:text-5xl">
						Past <span className="text-brand-gradient">Events</span>
					</h1>
					<p className="text-muted-foreground max-w-xl">
						Every year of Tech Industry Night — the nights, the numbers, and the
						people who made them happen.
					</p>
				</motion.div>

				{/* Event list */}
				<motion.div variants={fadeUpContainer} className="flex flex-col gap-6">
					{sorted.map((pe) => (
						<motion.div
							key={pe.year}
							variants={fadeUpItem}
							whileHover={{ y: -4, transition: { duration: 0.2 } }}
							className="group"
						>
							<Card className="group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
								<CardContent className="p-6 flex flex-col sm:flex-row sm:items-center gap-6">
									{/* Year + tagline */}
									<div className="flex flex-col gap-1 min-w-30">
										<span className="font-heading font-extrabold text-4xl text-brand-gradient">
											{pe.year}
										</span>
										<span className="text-sm text-muted-foreground font-heading">
											{pe.tagline}
										</span>
									</div>

									{/* Divider */}
									<div className="hidden sm:block w-px self-stretch bg-border" />

									{/* Details */}
									<div className="flex flex-col gap-3 flex-1">
										<p className="text-sm text-muted-foreground">{pe.venue}</p>
										<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
											<span className="flex items-center gap-1.5">
												<Users className="size-3.5 shrink-0" />
												{pe.attendees}+ attendees
											</span>
											<span className="flex items-center gap-1.5">
												<Building2 className="size-3.5 shrink-0" />
												{pe.companies}+ companies
											</span>
											<span className="flex items-center gap-1.5">
												<Star className="size-3.5 shrink-0" />
												{pe.clubs} clubs
											</span>
										</div>
									</div>

									{/* CTA */}
									<Link to={`/events/${pe.year}`} className="shrink-0">
										<Button variant="outline" className="group-hover:border-primary/40 transition-colors">
											View Recap <ArrowRight className="size-3.5 ml-1" />
										</Button>
									</Link>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	)
}
