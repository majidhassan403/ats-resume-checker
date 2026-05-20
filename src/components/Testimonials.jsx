import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa"

function Testimonials() {

  const testimonials = [

    {
      name: "Ali Khan",
      role: "Frontend Developer",
      review:
        "This ATS analyzer helped me improve my resume score and optimize keywords for recruiters.",
    },

    {
      name: "Sara Ahmed",
      role: "UI/UX Designer",
      review:
        "The resume formatting insights were incredibly useful and easy to understand.",
    },

    {
      name: "Hamza Malik",
      role: "Software Engineer",
      review:
        "The ATS suggestions and keyword matching made my resume much stronger.",
    },

  ]

  return (

    <section className="py-32 px-6 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-black mb-6">

            Trusted By Professionals

          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto">

            Thousands of users improve their resumes using our AI ATS analyzer.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:50 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{
                duration:0.6,
                delay:index * 0.1,
              }}
              viewport={{ once:true }}
              className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-[32px] p-10 hover:border-violet-500 transition-all duration-300 hover:-translate-y-2"
            >

              {/* Stars */}

              <div className="flex gap-2 text-yellow-400 text-xl mb-6">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              {/* Review */}

              <p className="text-slate-300 leading-relaxed text-lg mb-8">

                "{item.review}"

              </p>

              {/* User */}

              <div>

                <h3 className="text-2xl font-bold mb-2">

                  {item.name}

                </h3>

                <p className="text-slate-400">

                  {item.role}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Testimonials
