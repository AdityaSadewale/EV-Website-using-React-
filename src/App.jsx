import { useEffect, useState } from "react"
import Background from "./Components/Background/Background"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"

const App = () => {

  const heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "passions" },
    { text1: "Give in to", text2: "your passions" },
  ]

  const [heroCount, setHeroCount] = useState(0)
  const [playStatus, setPlayStatus] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => count === 2 ? 0 : count + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
    </div>
  )
}

export default App