import { useEffect, useState } from "react"

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      })

    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }

  }, [])

  return (

    <div
      className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-0 blur-[140px] opacity-30 bg-violet-500 transition-all duration-200"
      style={{
        transform: `translate(${position.x - 180}px, ${position.y - 180}px)`,
      }}
    ></div>

  )
}

export default CursorGlow
