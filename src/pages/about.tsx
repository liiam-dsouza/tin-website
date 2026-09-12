// src/pages/About.tsx
import { motion } from "framer-motion"
import { fadeUpContainer, fadeUpItem } from "@/lib/animations"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { event } from "@/data/event"

const stats = [
	{ value: "200+", label: "Students Attended" },
	{ value: "30+",  label: "Industry Reps" },
	{ value: "12",   label: "Organising Clubs" },
	{ value: "5th",  label: "Year Running" },
]

const disciplines = [
	"Software Development",
	"Cybersecurity",
	"Data & AI",
	"Cloud & Infrastructure",
	"Product & UX",
	"Emerging Technologies",
	"Digital Innovation",
	"Consulting",
	"Engineering",
]

const timeline = [
	{
		year: "2023",
		title: "Finding Its Feet",
		description: "TIN established itself as a genuine fixture in Brisbane's student tech calendar. More clubs came on board, more companies attended, and the format — theatre-based, discussion-led, deliberately not a career fair — started to define what made the event different.",
		isCurrent: false,
	},
	{
		year: "2024",
		title: "Building Momentum",
		description: "Another year of growth. More students, more industry representatives, and a stronger reputation across QUT's STEM community. The foundations were being laid for something much larger.",
		isCurrent: false,
	},
	{
		year: "2025",
		title: "The Big Leap",
		description: "Tech Industry Night moved to the Gardens Theatre at QUT's Gardens Point campus and welcomed over 200 attendees — its biggest year yet. 12 student clubs, 30+ industry reps, and 5,000+ LinkedIn impressions. The event had arrived.",
		isCurrent: false,
	},
	{
		year: "2026",
		title: "Raising the Bar",
		description: "Tech Industry Night returned to Gardens Theatre for its fifth year, bringing together students, industry professionals, and the clubs that make it all happen. Another night of keynotes, real conversations, and connections that last well beyond the room.",
		isCurrent: false,
	},
	{
		year: "2027",
		title: "What's Next?",
		description: "The future of Tech Industry Night is bright. With a strong foundation, a growing community, and a clear vision, the event is poised to continue its trajectory of growth and impact in the years to come.",
		isCurrent: true,
	},
]

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <motion.div
        variants={fadeUpContainer}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto px-6 py-24 flex flex-col gap-20"
      >
        {/* Header */}
        <motion.div variants={fadeUpItem} className="text-center flex flex-col gap-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            About
          </p>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl">
            Built by students,{" "}
            <span className="text-brand-gradient">for students</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Tech Industry Night is Brisbane's flagship student-led technology
			and engineering event. Every year, we bring together students and
			industry in a way that actually matters: real conversations, genuine
			connections, no name-tag shuffling.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUpItem}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-border"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-1">
              <span className="font-heading font-extrabold text-4xl text-brand-gradient">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* What is it */}
        <motion.div variants={fadeUpItem} className="flex flex-col gap-6">
          <h2 className="font-heading font-bold text-2xl">What is Tech Industry Night?</h2>
          <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
            <p>
              TIN is an annual networking and industry engagement event designed
              to connect university students, emerging professionals, and members
              of the technology sector in Queensland. Hosted in the Gardens
              Theatre at QUT's Gardens Point campus, it's an evening of keynote
              presentations, a panel Q&A, and open networking with food and
              drinks.
            </p>
            <p>
              Unlike a traditional careers expo, TIN is intentionally
              theatre-based and discussion-led. The focus is on genuine
              conversation — helping students understand the industry, explore
              different career pathways, and build real professional connections
              before they graduate.
            </p>
            <p>
              The event is organised entirely by students across QUT's STEM
              clubs, which means it reflects what students actually want — not
              what a university careers office thinks they want.
            </p>
          </div>
        </motion.div>

        <Separator />

        {/* Who attends */}
        <motion.div variants={fadeUpItem} className="flex flex-col gap-6">
          <h2 className="font-heading font-bold text-2xl">Who comes?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Anyone with an interest in tech and a willingness to have a real
            conversation. First-year students figuring out what they want to do.
            Final-year students chasing internships and grad roles. Masters and
            PhD students looking for industry connections. Industry professionals
            who want to give back and find great talent early.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Attendees come from across the technology spectrum:
          </p>
          <div className="flex flex-wrap gap-2">
            {disciplines.map((d) => (
              <span
                key={d}
                className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted/30 text-muted-foreground"
              >
                {d}
              </span>
            ))}
          </div>
        </motion.div>

        <Separator />

        {/* Timeline */}
        <motion.div variants={fadeUpItem} className="flex flex-col gap-8">
          <h2 className="font-heading font-bold text-2xl">How we got here</h2>
          <div className="flex flex-col">
            {timeline.map((entry, index) => (
              <div key={entry.year} className="flex gap-6">
                {/* Spine */}
                <div className="flex flex-col items-center">
                  <div className={`mt-1.5 h-3 w-3 rounded-full shrink-0 ring-2 ring-background ${
                    entry.isCurrent ? "bg-brand-pink" : "bg-muted-foreground"
                  }`} />
                  {index < timeline.length - 1 && (
                    <div className="flex-1 w-px bg-border mt-1" />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 pb-8">
                  <div className="flex items-center gap-3">
                    <span className={`font-heading font-bold text-sm ${
                      entry.isCurrent ? "text-brand-gradient" : "text-muted-foreground"
                    }`}>
                      {entry.year}
                    </span>
                    <span className="font-heading font-semibold">
                      {entry.title}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <Separator />

        {/* CTA */}
        <motion.div
          variants={fadeUpItem}
          className="flex flex-col items-center text-center gap-6"
        >
          <h2 className="font-heading font-bold text-2xl">
            Be part of it
          </h2>
          <p className="text-muted-foreground max-w-md">
            Whether you're a student looking to kickstart your career or a
            company wanting to connect with the next generation of tech talent —
            there's a place for you at TIN {event.year}.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-brand-gradient text-white border-0 hover:opacity-90 transition-opacity">
              <a href={event.ticketingUrl} target="_blank" rel="noreferrer">
                Get Your Ticket
              </a>
            </Button>
            <Button variant="outline">
              <a href={`mailto:${event.email.industry}`}>
                Industry Enquiries
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
