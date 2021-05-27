import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello Gatsby.</h1>
      <Link to="/about">Go to about</Link> <br />
    </Layout>
  )
}
