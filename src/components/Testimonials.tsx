import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/data/testimonials"
import { fadeUpContainer, fadeUpItem } from "@/lib/animations"

function Testimonials() {
  return (
    <section className="py-24 px-6 bg-muted/30">
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
            Testimonials
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            What Our Community Says
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real stories from attendees who made our events unforgettable.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={fadeUpContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUpItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group"
            >
              <Card className="flex flex-col h-full transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5">
                <CardContent className="flex flex-col flex-1 gap-4">
                  {/* Quote */}
                  <p className="text-md text-muted-foreground leading-relaxed flex-1">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border">
                    <div className="h-8 w-8 rounded-full bg-brand-gradient flex items-center justify-center shrink-0">
                      <span className="text-xs font-heading font-bold text-white">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-heading font-semibold text-sm">
                        {t.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Testimonials
