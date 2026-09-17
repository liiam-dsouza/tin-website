export const event = {
    name: "Tech Industry Night",
    year: 2026,
    tagline: "Bridge the Gap. Own the Future.",
    date: new Date("2026-08-14T15:00:00+10:00"), // August 14, 2026, 3:00 PM AEST
	nextYear: new Date().getFullYear() + 1,
	postEvent: true,
	hasPhotos: true,
    venue: "Gardens Theatre, QUT Gardens Point",
    email: {
        team: "team@techindustrynight.com",
        industry: "industry@techindustrynight.com",
    },
    socials: {
        instagram: "https://www.instagram.com/techindustrynight/",
        linkedin: "https://www.linkedin.com/company/techindustrynight/",
        tiktok: "https://www.tiktok.com/@techindustrynight",
    },
    ticketingUrl: "https://events.humanitix.com/tech-industry-night-2027",
} as const
