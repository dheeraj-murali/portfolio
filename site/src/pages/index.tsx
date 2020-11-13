import React from "react"
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Portfolio,
  Service,
} from "../containers"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
