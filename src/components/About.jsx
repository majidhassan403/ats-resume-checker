import { motion } from "framer-motion"

import {
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaGithub,
} from "react-icons/fa"

function About() {

  const skills = [

    "React",
    "Tailwind CSS",
    "JavaScript",
    "Responsive Design",
    "Modern UI",
    "Frontend Development",

  ]

  return (

    <section
      id="about"
      className="py-32 px-6 relative overflow-hidden"
    >

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADING */}

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:true }}
          className="text-center mb-20"
        >

          <div className="inline-block bg-violet-500/20 text-violet-400 px-6 py-3 rounded-full mb-8">

            About Developer

          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">

            Passionate About
            <br />

            Modern Frontend Experiences

          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">

            I build modern, responsive and AI-inspired web interfaces
            focused on user experience, clean UI design and real-world frontend development.

          </p>

        </motion.div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CARD */}

          <motion.div
            initial={{ opacity:0, x:-50 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.7 }}
            viewport={{ once:true }}
            className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-[40px] p-10 md:p-14"
          >

            {/* NAME */}

            <div className="mb-10">

              <h3 className="text-4xl md:text-5xl font-black mb-4">

                Majid Hassan

              </h3>

              <p className="text-violet-400 text-xl">

                Frontend Developer

              </p>

            </div>

            {/* DESCRIPTION */}

            <p className="text-slate-400 leading-relaxed text-lg mb-10">

              I enjoy creating premium UI experiences using React,
              Tailwind CSS and modern frontend technologies.
              My focus is building responsive,
              visually polished and user-friendly interfaces inspired by modern SaaS products.

            </p>

            {/* SKILLS */}

            <div className="flex flex-wrap gap-4">

              {skills.map((skill, index) => (

                <div
                  key={index}
                  className="bg-violet-500/10 border border-violet-500/20 text-violet-400 px-5 py-3 rounded-2xl"
                >

                  {skill}

                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity:0, x:50 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.7 }}
            viewport={{ once:true }}
            className="grid sm:grid-cols-2 gap-6"
          >

            {/* CARD 1 */}

            <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-[32px] p-8 hover:border-violet-500 transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center text-violet-400 text-3xl mb-6">

                <FaCode />

              </div>

              <h3 className="text-2xl font-bold mb-4">

                Clean Code

              </h3>

              <p className="text-slate-400 leading-relaxed">

                Writing structured and maintainable frontend code using modern React practices.

              </p>

            </div>

            {/* CARD 2 */}

            <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-[32px] p-8 hover:border-violet-500 transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center text-violet-400 text-3xl mb-6">

                <FaLaptopCode />

              </div>

              <h3 className="text-2xl font-bold mb-4">

                Responsive UI

              </h3>

              <p className="text-slate-400 leading-relaxed">

                Designing responsive layouts optimized for desktop, tablet and mobile devices.

              </p>

            </div>

            {/* CARD 3 */}

            <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-[32px] p-8 hover:border-violet-500 transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center text-violet-400 text-3xl mb-6">

                <FaPalette />

              </div>

              <h3 className="text-2xl font-bold mb-4">

                Modern Design

              </h3>

              <p className="text-slate-400 leading-relaxed">

                Building premium UI inspired by AI tools, startups and modern SaaS products.

              </p>

            </div>

            {/* CARD 4 */}

            <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-[32px] p-8 hover:border-violet-500 transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center text-violet-400 text-3xl mb-6">

                <FaGithub />

              </div>

              <h3 className="text-2xl font-bold mb-4">

                Projects

              </h3>

              <p className="text-slate-400 leading-relaxed">

                Creating real-world frontend projects focused on practical UI and user interaction.

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About
