import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"

function Footer() {

  return (

    <footer className="relative overflow-hidden border-t border-slate-800 mt-20">

      {/* BACKGROUND GLOW */}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-violet-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        {/* TOP SECTION */}

        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* BRAND */}

          <div>

            <h2 className="text-4xl font-black text-violet-400 mb-6">

              ATS Analyzer

            </h2>

            <p className="text-slate-400 leading-relaxed text-lg">

              AI-powered resume analyzer focused on improving ATS score,
              keyword optimization and recruiter-friendly resumes.

            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-2xl font-bold mb-6">

              Quick Links

            </h3>

            <div className="flex flex-col gap-4 text-slate-400">

              <a
                href="#home"
                className="hover:text-violet-400 transition-all duration-300"
              >
                Home
              </a>

              <a
                href="#features"
                className="hover:text-violet-400 transition-all duration-300"
              >
                Features
              </a>

              <a
                href="#upload"
                className="hover:text-violet-400 transition-all duration-300"
              >
                Upload Resume
              </a>

              <a
                href="#about"
                className="hover:text-violet-400 transition-all duration-300"
              >
                About
              </a>

            </div>

          </div>

          {/* SOCIAL LINKS */}

          <div>

            <h3 className="text-2xl font-bold mb-6">

              Connect

            </h3>

            <div className="flex items-center gap-5">

              {/* GITHUB */}

              <a
                href="https://github.com/majidhassan403"
                target="_blank"
                className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl hover:border-violet-500 hover:text-violet-400 transition-all duration-300"
              >

                <FaGithub />

              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/majid-hassan-0844a33bb?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl hover:border-violet-500 hover:text-violet-400 transition-all duration-300"
              >

                <FaLinkedin />

              </a>

              {/* INSTAGRAM */}

              <a
                href="https://www.instagram.com/majidhassan41?igsh=MTY2NWhla2dtdTk3Yg=="
                target="_blank"
                className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl hover:border-violet-500 hover:text-violet-400 transition-all duration-300"
              >

                <FaInstagram />

              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-slate-400 text-center md:text-left">

            © 2026 ATS Analyzer. All rights reserved.

          </p>

          <p className="text-slate-500 text-center md:text-right">

            Designed & Developed by Majid Hassan

          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer
