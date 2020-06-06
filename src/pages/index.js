import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="customBorder">
      <br /><br /><br /><br /><br />
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <h1>{data.markdownRemark.frontmatter.note}</h1>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexPageQuery {
    markdownRemark(fileAbsolutePath: {regex: "/maintenance-page.md/"}) {
      frontmatter {
        title
        note
      }
    }
  }
`

export default IndexPage
