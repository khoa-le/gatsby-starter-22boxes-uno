import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="PRECITA" />
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <div style={{margin:"0 auto", textAlign:"center"}}>
        <Img fixed={data.avatar.childImageSharp.fixed} />
        </div>
        
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/precita.jpg/" }) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
