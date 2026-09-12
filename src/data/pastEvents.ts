export interface PastEvent {
	year: number
	tagline: string
	venue: string
	date: string
	attendees: number
	companies: number
	clubs: number
	speakers: string[]
	highlights: string[]
	coverImage: string
	galleryBlurb?: string
}

export const pastEvents: PastEvent[] = [
	{
		year: 2026,
		tagline: "Raising the Bar",
		venue: "Gardens Theatre, QUT Gardens Point",
		date: "14 August 2026",
		attendees: 150,
		companies: 30,
		clubs: 10,
		speakers: [],
		highlights: [
			"Tech Industry Night returned to Gardens Theatre for its fifth year.",
			"Another night of keynotes, real conversations, and connections that last well beyond the room.",
			"Over 200 students connected with 30+ industry professionals across every major tech discipline.",
			"12 student clubs united to produce a night of keynotes, panels, and meaningful networking.",
		],
		coverImage: "",
		galleryBlurb:
			"Tech Industry Night returned to Gardens Theatre for its fifth year, bringing together students, industry professionals, and the clubs that make it all happen. Another night of keynotes, real conversations, and connections that last well beyond the room.",
	},
	{
		year: 2025,
		tagline: "The Big Leap",
		venue: "Gardens Theatre, QUT Gardens Point",
		date: "2025",
		attendees: 200,
		companies: 30,
		clubs: 11,
		speakers: [],
		highlights: [
			"Moved to the iconic Gardens Theatre for TIN's biggest event yet",
			"Over 300 students connected with 30+ industry professionals across every major tech discipline",
			"12 student clubs united to produce a night of keynotes, panels, and meaningful networking",
			"Set the benchmark for scale and quality for all future Tech Industry Nights",
		],
		coverImage: "",
		galleryBlurb:
			"Tech Industry Night moved to Gardens Theatre and welcomed over 200 students and industry professionals for our biggest event yet. A night of keynotes, panels, and connections that set the benchmark for years to come.",
	},
	{
		year: 2024,
		tagline: "Building Momentum",
		venue: "QUT Gardens Point",
		date: "2024",
		attendees: 130,
		companies: 20,
		clubs: 6,
		speakers: [],
		highlights: [
			"130 students met industry professionals from 20 companies across Brisbane's tech scene",
			"Six student clubs collaborated to deliver TIN's most polished production to date",
			"Laid the groundwork for the record-breaking year that followed",
		],
		coverImage: "",
		galleryBlurb:
			"Another year of bringing students and industry together. TIN continued to grow its reputation as one of QUT's premier networking events, laying the groundwork for the record-breaking year that followed.",
	},
	{
		year: 2023,
		tagline: "Early Days",
		venue: "QUT Gardens Point",
		date: "2023",
		attendees: 100,
		companies: 15,
		clubs: 5,
		speakers: [],
		highlights: [
			"One of TIN's earliest events, bringing students and industry together in an intimate setting",
			"Five student clubs collaborated to kick off what would become QUT's premier tech networking night",
			"The connections made here laid the groundwork for the rapid growth that followed",
		],
		coverImage: "",
		galleryBlurb:
			"One of TIN's earlier events, bringing together students and industry in an intimate setting. The connections made here laid the groundwork for the rapid growth that followed in the years ahead.",
	},
]
