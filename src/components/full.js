import React from "react"
import Header from "./header"
import Footer from "./footer"
export default function Full({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
