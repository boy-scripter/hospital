import React from "react"
import GlobalStyle from "./GlobalStyle"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import Services from "./Services"
import Innovative from "./Innovative"
import Specialist from "./Specialist"
import Newsletter from "./Newsletter"
import Footer from "./Footer"
import Reviews from "./Reviews"
import { ReviewContext } from "./ReviewContext"

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

export default App