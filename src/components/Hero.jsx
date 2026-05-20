import { motion } from "framer-motion"

function Hero() {

  return (

    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-32 relative overflow-hidden"
    >

      <div className="absolute top-10 left-10 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        <motion.h1
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="text-6xl md:text-8xl font-black leading-tight mb-8"
        >

        AI-Powered
          <span className="text-violet-400">
            {" "}ATS Resume Analyzer
          </span>

        </motion.h1>

        <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed mb-10">

          Upload your resume and receive AI-powered ATS analysis,
          keyword matching, formatting insights and optimization tips.

        </p>

      </div>

    </section>
  )
}

export default Hero
