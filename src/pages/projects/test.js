import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default function Test() {
  return (
    <Layout>
      <SEO title="Test" />

      <h1>Test Project</h1>

      <Link to="/projects">Go back to projects</Link>
    </Layout>
  )
}
