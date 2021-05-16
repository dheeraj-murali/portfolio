import * as React from "react"
import data from "../../content/data.json"
import { Footer } from "../Footer"
import { Header } from "../Header"

const { header } = data

export const Layout = ({ location, title, children }) => {
  return (
    <>
      <Header {...header} fromBlog />
      <main>{children}</main>
      <Footer />
    </>
  )
}
