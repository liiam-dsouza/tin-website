import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"

import { MainLayout } from "@/layouts/MainLayout"

import Home from "@/pages/index"
import SpeakerProfile from "@/pages/speakerProfile"
import Sponsors from "@/pages/sponsorsPage"
import Team from "@/pages/team"
import Tickets from "@/pages/tickets"
import Terms from "@/pages/terms"
import Privacy from "@/pages/privacy"
import QRGenerator from "@/pages/qrCodeGenerator"
import ElevatorPitch from "./pages/elevatorPitch"
import Gallery from "./pages/gallery"
import About from "./pages/about"
import SocialCard from "./pages/socialCard"
import PastEvents from "./pages/PastEvents"
import PastEvent from "./pages/PastEvent"


function App() {
	return (
		<BrowserRouter>
			<HelmetProvider>
				<Routes>
					<Route element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path="/speaker/:id" element={<SpeakerProfile />} />
						<Route path="/about" element={<About />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/qr-generator" element={<QRGenerator />} />
						<Route path="/elevator-pitch" element={<ElevatorPitch />} />
						<Route path="/social-card" element={<SocialCard />} />
						<Route path="/tickets" element={<Tickets />} />
						<Route path="/terms" element={<Terms />} />
						<Route path="/privacy" element={<Privacy />} />
						<Route path="/events" element={<PastEvents />} />
						<Route path="/events/:year" element={<PastEvent />} />
					</Route>
				</Routes>
			</HelmetProvider>
		</BrowserRouter>
	)
}

export default App
