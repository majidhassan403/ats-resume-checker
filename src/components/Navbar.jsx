import { useEffect, useState } from "react"

import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa"

import { motion } from "framer-motion"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  const [darkMode, setDarkMode] = useState(true)

  // Scroll Effect

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  // Theme Load

  useEffect(() => {

    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "light") {

      setDarkMode(false)

      document.body.classList.add("light")

    }

  }, [])

  // Toggle Theme

  const toggleTheme = () => {

    if (darkMode) {

      document.body.classList.add("light")

      localStorage.setItem("theme", "light")

    } else {

      document.body.classList.remove("light")

      localStorage.setItem("theme", "dark")

    }

    setDarkMode(!darkMode)

  }

  return (

    <motion.nav
      initial={{ y:-80 }}
      animate={{ y:0 }}
      transition={{ duration:0.6 }}
      className={
        `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 py-4"
            : "bg-transparent py-6"
        }`
      }
    >

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}

        <h1 className="text-3xl font-black text-violet-540">

          ATS Analyzer

        </h1>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex items-center gap-10 text-slate-300">

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
            href="#about"
            className="hover:text-violet-400 transition-all duration-300"
          >
            About
          </a>

          {/* THEME BUTTON */}

          <button
            onClick={toggleTheme}
            className="text-xl hover:text-violet-400 transition-all duration-300"
          >

            {darkMode ? <FaSun /> : <FaMoon />}

          </button>

          {/* GET STARTED */}

          <a href="#upload">

            <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">

              Get Started

            </button>

          </a>

        </div>

        {/* MOBILE ACTIONS */}

        <div className="md:hidden flex items-center gap-5">

          {/* THEME */}

          <button
            onClick={toggleTheme}
            className="text-xl"
          >

            {darkMode ? <FaSun /> : <FaMoon />}

          </button>

          {/* MENU */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white"
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <motion.div
          initial={{ opacity:0, y:-20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.3 }}
          className="md:hidden mt-6 mx-6 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-[32px] p-8"
        >

          <div className="flex flex-col gap-6 text-slate-300">

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
              href="#about"
              className="hover:text-violet-400 transition-all duration-300"
            >
              About
            </a>

            <a href="#upload">

              <button className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-2xl font-semibold transition-all duration-300">

                Get Started

              </button>

            </a>

          </div>

        </motion.div>

      )}

    </motion.nav>
  )
}

export default Navbar
