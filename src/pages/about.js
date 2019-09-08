import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Article } from "../components/Article"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const instas = data.allInstaNode.edges.map(edge => edge.node)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <Article className="markdown-body">
          <h1>About Me</h1>

          <p>
            從寫 CSS，寫 jQuery，寫 AngularJS，到寫
            React，最後不小心跑到澳洲打工。
          </p>
          <h2>My Instagram</h2>
          <Gallery>
            {instas.reverse().map(insta => (
              <a
                href={`https://www.instagram.com/p/${insta.id}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta.preview} alt="" />
              </a>
            ))}
          </Gallery>
        </Article>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allInstaNode {
      edges {
        node {
          id
          likes
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          # Only available with the public api scraper
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`

const Gallery = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  a {
    display: block;
    float: left;
    border-radius: 4px;
    overflow: hidden;
  }
  img {
    display: block;
    margin: 0;
  }
`
