import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="Oh noo!" />

      <h1>This page doesn't exist</h1>
    </Layout>
  )
}

export default NotFoundPage
