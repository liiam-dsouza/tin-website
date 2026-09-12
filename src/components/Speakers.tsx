import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { speakers } from "@/data/speakers"
import { fadeUpContainer, fadeUpItem } from "@/lib/animations"
import { event } from "@/data/event"

function Speakers() {
  const isPostEvent = event.postEvent

  return (
    <section id="speakers" className="py-24 px-6 bg-muted/30">
      <motion.div
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto flex flex-col gap-16"
      >
        {/* Heading */}
        <motion.div variants={fadeUpItem} className="text-center flex flex-col gap-3">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            {isPostEvent ? `TIN ${event.year}` : "Industry Leaders"}
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            {isPostEvent ? "This Year's Speakers" : "Event Speakers"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {isPostEvent
              ? `The industry leaders who took the stage at Tech Industry Night ${event.year}.`
              : "Learn from the industry leaders speaking at this year's event."}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={fadeUpContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {speakers.sort((a, b) => a.name.localeCompare(b.name)).map((speaker) => (
            <motion.div key={speaker.id} variants={fadeUpItem}>
				<motion.div
					whileHover={{ y: -4, transition: { duration: 0.2 } }}
					className="group"
				>
              <Card className="group overflow-hidden flex flex-col h-full">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="relative z-20 aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <CardContent className="flex flex-col flex-1 gap-3 pt-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading font-bold text-lg leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{speaker.title}</p>
                    <p className="text-sm text-muted-foreground">{speaker.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
                    {speaker.bio.map((paragraph, idx) => (
                      <span key={idx}>
                        {paragraph}
                        <br />
                      </span>
                    ))}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to={`/speaker/${speaker.id}`} className="w-full">
                    <Button className="w-full" variant="outline">
                      View Profile <ArrowRight className="size-3.5 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
			  </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Speakers
