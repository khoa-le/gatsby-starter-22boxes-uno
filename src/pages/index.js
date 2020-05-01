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
        <Img fluid={data.image.childImageSharp.fluid} />
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
    image: file(absolutePath: { regex: "/precita-maintenance.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
