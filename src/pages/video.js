import React from "react"
import { Link } from "gatsby"
import Full from "../components/full"
import Seo from "../components/seo"

export default function Video() {
  return (
    <Full>
      <Seo title="Video" />
      <div className="full">
        <h1>Full-width Video</h1>
        <p>
          Read more <Link to={"/about"}>About me!</Link>
        </p>
      </div>
    </Full>
  )
}
