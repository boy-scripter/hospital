import React from "react"
import GlobalStyle from "../components/GlobalStyle"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Services from "../components/Services"
import Innovative from "../components/Innovative"
import Specialist from "../components/Specialist"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Reviews from "../components/Reviews"
import { ReviewContext } from "../components/ReviewContext"

const App = () => {
  return (
    <React.StrictMode>
      <ReviewContext>
        <GlobalStyle />
        <Navbar />
        <HeroSection />
        <Services />
        <Innovative />
        <Specialist />
        <Reviews></Reviews>
        <Newsletter />
        <Footer></Footer>
      </ReviewContext>
    </React.StrictMode>
  )
}

export const Head = () => {
  return (
    <>
      <title>
        Hospital Landing Page
      </title>
      <meta name="viewport" content="" />
      <script src="https://kit.fontawesome.com/2faca9bc4c.js" crossOrigin="anonymous"></script>
    </>
  )
}

export default App