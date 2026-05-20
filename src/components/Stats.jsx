import { motion } from "framer-motion"

function Stats() {

  const stats = [

    {
      number: "10K+",
      title: "Resumes Analyzed",
    },

    {
      number: "95%",
      title: "ATS Accuracy",
    },

    {
      number: "4.9",
      title: "User Rating",
    },

    {
      number: "500+",
      title: "Companies Supported",
    },

  ]

  return (

    <section className="py-24 px-6 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:index * 0.1 }}
              viewport={{ once:true }}
              className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-[32px] p-10 text-center hover:border-violet-500 transition-all duration-300 hover:-translate-y-2"
            >

              <h2 className="text-5xl font-black text-violet-400 mb-4">

                {item.number}

              </h2>

              <p className="text-slate-400 text-lg">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Stats
