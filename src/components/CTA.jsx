import { motion } from "framer-motion"

function CTA() {

  return (

    <section className="py-32 px-6 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-500/20 blur-[160px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:true }}
          className="bg-gradient-to-br from-violet-600/20 to-cyan-500/10 border border-slate-800 rounded-[40px] p-14 md:p-20 text-center backdrop-blur-xl"
        >

          {/* Badge */}

          <div className="inline-block bg-violet-500/20 text-violet-400 px-6 py-3 rounded-full mb-8">

            AI Powered Resume Optimization

          </div>

          {/* Heading */}

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">

            Build A Resume
            <br />

            Recruiters Actually Notice

          </h2>

          {/* Description */}

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">

            Improve ATS score, optimize keywords,
            detect resume mistakes and create recruiter-friendly resumes using smart AI analysis.

          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

            <button className="bg-violet-600 hover:bg-violet-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-violet-500/30">

              Analyze Resume

            </button>

            <button className="border border-slate-700 hover:border-violet-500 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-violet-500/10">

              View Demo

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default CTA
