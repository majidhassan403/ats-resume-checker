import {
  FaRobot,
  FaFileAlt,
  FaChartLine,
  FaSearch,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa"

import { motion } from "framer-motion"

function Features() {

  const features = [

    {
      icon: <FaRobot />,
      title: "AI Resume Analysis",
      desc:
        "Get instant ATS insights powered by smart AI-based resume scanning.",
    },

    {
      icon: <FaFileAlt />,
      title: "Resume Formatting Check",
      desc:
        "Detect formatting issues that can reduce ATS readability and ranking.",
    },

    {
      icon: <FaChartLine />,
      title: "ATS Score Tracking",
      desc:
        "Analyze your resume score and monitor optimization improvements.",
    },

    {
      icon: <FaSearch />,
      title: "Keyword Optimization",
      desc:
        "Find missing job-related keywords recruiters and ATS systems search for.",
    },

    {
      icon: <FaBolt />,
      title: "Instant Suggestions",
      desc:
        "Receive smart recommendations to improve resume quality instantly.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Recruiter Friendly",
      desc:
        "Build resumes optimized for both recruiters and ATS software systems.",
    },

  ]

  return (

    <section
      id="features"
      className="py-32 px-6 relative overflow-hidden"
    >

      <div className="absolute top-0 left-0 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-black mb-6">

            Powerful AI Features

          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto">

            Everything you need to optimize your resume,
            improve ATS ranking and increase hiring chances.

          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:50 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{
                duration:0.6,
                delay:index * 0.1,
              }}
              viewport={{ once:true }}
              className="group bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-[32px] p-10 hover:border-violet-500 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-violet-500/10 to-cyan-500/10"></div>

              <div className="relative z-10 w-20 h-20 rounded-3xl bg-violet-500/20 flex items-center justify-center text-violet-400 text-3xl mb-8">

                {feature.icon}

              </div>

              <h3 className="relative z-10 text-3xl font-bold mb-5">

                {feature.title}

              </h3>

              <p className="relative z-10 text-slate-400 leading-relaxed text-lg">

                {feature.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Features
