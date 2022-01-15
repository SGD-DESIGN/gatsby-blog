import React from "react"
import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer"

import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}
