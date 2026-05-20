import { useState } from "react"
import { FaCloudUploadAlt } from "react-icons/fa"

function UploadSection({ setResumeData }) {

  const [fileName, setFileName] = useState("")
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleFile = (e) => {

    const file = e.target.files[0]

    if (!file) return

    setFileName(file.name)

    setLoading(true)

    setProgress(0)

    let count = 0

    const interval = setInterval(() => {

      count += 10

      setProgress(count)

      if (count >= 100) {

        clearInterval(interval)

        setLoading(false)

        const scores = [52, 61, 67, 72, 78, 84, 91, 96]

        const healthStatus = [
          "Poor",
          "Average",
          "Good",
          "Excellent",
        ]

        const strengthsPool = [
          "Clean Resume Layout",
          "ATS Friendly Structure",
          "Strong Technical Skills",
          "Readable Design",
          "Good Project Section",
          "Professional Formatting",
        ]

        const weaknessPool = [
          "Missing Next.js Keyword",
          "Weak Summary",
          "No measurable achievements",
          "Projects section is weak",
          "Low keyword density",
          "Skills section needs improvement",
        ]

        const formattingPool = [
          "Good font consistency",
          "Headings are aligned",
          "Spacing can improve",
          "Margins look professional",
        ]

        const suggestionsPool = [
          "Add React projects",
          "Mention Tailwind CSS",
          "Add GitHub link",
          "Improve summary",
          "Add measurable achievements",
          "Improve keyword optimization",
        ]

        const keywordPool = [

          {
            word:"React",
            status:"Found",
          },

          {
            word:"Next.js",
            status:"Missing",
          },

          {
            word:"API",
            status:"Partial",
          },

          {
            word:"Tailwind",
            status:"Found",
          },

          {
            word:"JavaScript",
            status:"Found",
          },

          {
            word:"TypeScript",
            status:"Missing",
          },

        ]

        const randomItems = (array, count) => {

          return [...array]
            .sort(() => 0.5 - Math.random())
            .slice(0, count)

        }

        const fakeData = {

          score:
            scores[
              Math.floor(Math.random() * scores.length)
            ],

          health:
            healthStatus[
              Math.floor(Math.random() * healthStatus.length)
            ],

          strengths: randomItems(strengthsPool, 4),

          weaknesses: randomItems(weaknessPool, 4),

          formatting: randomItems(formattingPool, 3),

          suggestions: randomItems(suggestionsPool, 4),

          keywords: randomItems(keywordPool, 6),

        }

        setResumeData(fakeData)

        // AUTO SCROLL TO DASHBOARD

        setTimeout(() => {

          const dashboard = document.getElementById("dashboard")

          if (dashboard) {

            dashboard.scrollIntoView({
              behavior:"smooth",
            })

          }

        }, 400)

      }

    }, 200)

  }

  return (

    <section
      id="upload"
      className="py-32 px-6 relative overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-[40px] p-12 md:p-16 text-center">

          {/* ICON */}

          <div className="w-28 h-28 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-6xl mx-auto mb-10 shadow-2xl shadow-violet-500/20">

            <FaCloudUploadAlt />

          </div>

          {/* HEADING */}

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">

            Upload Your Resume

          </h2>

          {/* TEXT */}

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">

            Upload your CV and get AI-powered ATS analysis,
            keyword optimization and resume improvement suggestions instantly.

          </p>

          {/* BUTTON */}

          <label>

            <input
              type="file"
              className="hidden"
              onChange={handleFile}
            />

            <div className="inline-block bg-violet-600 hover:bg-violet-700 px-10 py-5 rounded-2xl cursor-pointer font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-violet-500/30">

              Choose Resume

            </div>

          </label>

          {/* FILE AREA */}

          {fileName && (

            <div className="mt-14">

              {/* FILE NAME */}

              <p className="text-violet-400 text-lg mb-6 break-all">

                {fileName}

              </p>

              {/* PROGRESS BAR */}

              <div className="h-5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">

                <div
                  className="bg-gradient-to-r from-violet-500 to-cyan-500 h-full transition-all duration-300"
                  style={{ width:`${progress}%` }}
                ></div>

              </div>

              {/* STATUS */}

              <p className="mt-5 text-slate-400 text-lg">

                {loading
                  ? `AI Analyzing Resume... ${progress}%`
                  : "Analysis Complete"}

              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  )
}

export default UploadSection
