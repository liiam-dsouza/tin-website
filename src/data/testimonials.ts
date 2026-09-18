export interface Testimonial {
    id: string
    name: string
    role: string
    quote: string
    year: number
}

export const testimonials: Testimonial[] = [
    {
        id: "william-qu",
        name: "William Qu",
        role: "Computer Science Student",
        quote: "Tech industry night allowed me to form valuable connections with industry, expanding my professional network and setting me up for success.",
        year: 2025,
    },
    {
        id: "vinesh-nangia",
        quote: "Tech Industry Night is your one-stop shop to find your future in IT. I loved it last year and will be going again - cannot recommend this event enough!",
        name: "Vinesh Nangia",
        role: "Law & Computer Science Student",
        year: 2025,
    },
    {
        id: "angus-wong",
        quote: "The variety of companies present meant that there was something for everyone, and I had the opportunity to network with many industry professionals.",
        name: "Angus Wong",
        role: "Master's of IT Student",
        year: 2025,
    },
	{
		id: "jett-andrews",
		quote: "An incredible night where you're able to meet many experienced professionals, as well as likeminded students. Plenty of opportunities were available, would highly recommend attending!",
		name: "Jett Andrews",
		role: "Software Engineering Student",
		year: 2026,
	},
	{
		id: "lucas-godoy",
		quote: "Tech industry night was really informative even as a student outside of the typical tech major. The panelists gave a wide variety of perspective on the industry as whole. Definitely recommend!",
		name: "Lucas Godoy",
		role: "Mechanical Engineering Student",
		year: 2026,
	}
] as const
