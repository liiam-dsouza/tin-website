import SEO from "@/components/SEO"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import ValueProps from "@/components/ValueProps"
import Speakers from "@/components/Speakers"
import Organisers from "@/components/Organisers"
import Schedule from "@/components/Schedule"
import NetworkingGuide from "@/components/NetworkingGuide"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import Tickets from "@/components/Tickets"
import { event } from "@/data/event"

function Home() {
	console.log("Hello fellow developer! 👋 If you're seeing this, it means you're curious about how our website works. Feel free to take a look around!")
  	return(
		<>
			<SEO url="/" />
			<Hero />
			{/* <Stats /> */}
			{/* <ValueProps /> */}
			{!event.postEvent && <Schedule />}
			<Speakers />
			<Organisers />
			{/* <NetworkingGuide /> */}
			<Testimonials />
			{/* <FAQ /> */}
			{/* <Tickets /> */}
		</>
	)
}

export default Home
