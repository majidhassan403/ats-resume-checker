import { motion } from "framer-motion"
import {
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa"

function ResumePreview() {

  const skills = [

    {
      name:"React",
      status:true,
    },

    {
      name:"Tailwind CSS",
      status:true,
    },

    {
      name:"Next.js",
      status:false,
    },

    {
      name:"API Integration",
      status:true,
    },

    {
      name:"TypeScript",
      status:false,
    },

  ]

  return (

    <section className="py-32 px-6 relative overflow-hidden">

      {/* Glow */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

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

            Smart Resume Scanner

          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto">

            Experience AI-powered resume scanning with keyword analysis,
            ATS optimization and formatting detection.

          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CARD */}

          <motion.div
            initial={{ opacity:0, x:-60 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.7 }}
            viewport={{ once:true }}
            className="relative bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-[32px] p-10 overflow-hidden"
          >

            {/* Animated Scan Line */}

            <motion.div
              initial={{ top:"-20%" }}
              animate={{ top:"100%" }}
              transition={{
                repeat:Infinity,
                duration:2,
                ease:"linear",
              }}
              className="absolute left-0 w-full h-20 bg-violet-500/10 blur-2xl"
            ></motion.div>

            {/* Resume UI */}

            <div className="relative z-10">

              <div className="flex items-center justify-between mb-10">

                <div>

                  <h3 className="text-3xl font-black">

                    Majid Hassan

                  </h3>

                  <p className="text-violet-400 mt-2">

                    Frontend Developer

                  </p>

                </div>

                <div className="bg-violet-500/20 text-violet-400 px-5 py-2 rounded-2xl">

                  ATS Ready

                </div>

              </div>

              {/* Sections */}

              <div className="space-y-6">

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">

                  <h4 className="font-bold mb-3">

                    Skills

                  </h4>

                  <div className="flex flex-wrap gap-3">

                    <span className="bg-violet-500/20 px-4 py-2 rounded-xl">
                      React
                    </span>

                    <span className="bg-violet-500/20 px-4 py-2 rounded-xl">
                      Tailwind
                    </span>

                    <span className="bg-violet-500/20 px-4 py-2 rounded-xl">
                      JavaScript
                    </span>

                  </div>

                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">

                  <h4 className="font-bold mb-3">

                    Experience

                  </h4>

                  <p className="text-slate-400 leading-relaxed">

                    Frontend developer focused on building
                    modern responsive interfaces using React
                    and Tailwind CSS.

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT ANALYSIS */}

          <motion.div
            initial={{ opacity:0, x:60 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.7 }}
            viewport={{ once:true }}
            className="space-y-6"
          >

            {/* Score Card */}

            <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-[32px] p-10">

              <h3 className="text-3xl font-black mb-8">

                ATS Match Score

              </h3>

              <div className="flex items-center gap-6">

                <div className="w-32 h-32 rounded-full border-[10px] border-violet-500 flex items-center justify-center">

                  <h2 className="text-4xl font-black text-violet-400">

                    92%

                  </h2>

                </div>

                <div>

                  <p className="text-green-400 text-xl font-semibold mb-3">

                    Excellent Resume Score

                  </p>

                  <p className="text-slate-400 leading-relaxed">

                    Your resume is highly optimized for ATS
                    systems and recruiter visibility.

                  </p>

                </div>

              </div>

            </div>

            {/* Keyword Analysis */}

            <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-[32px] p-10">

              <h3 className="text-3xl font-black mb-8">

                Keyword Analysis

              </h3>

              <div className="space-y-5">

                {skills.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-2xl p-5"
                  >

                    <span className="text-lg">

                      {item.name}

                    </span>

                    <span>

                      {item.status ? (

                        <FaCheckCircle className="text-green-400 text-2xl" />

                      ) : (

                        <FaTimesCircle className="text-red-400 text-2xl" />

                      )}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default ResumePreview
