import React from "react"
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Portfolio,
  SEO,
  Service,
} from "../containers"

import data from "../content/data.json"

export default function Home() {
  const { header, about, contact, hero, portfolio, seo, service } = data

  return (
    <>
      <SEO {...seo} />
      <Header {...header} />
      <Hero {...hero} />
      {/* <Service /> */}
      {/* <Portfolio /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  )
}
