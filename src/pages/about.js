import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const instas = data.allInstaNode.edges.map(edge => edge.node)

    return (
      <Layout>
        <SEO title="About" />
        <div className="markdown-body">
          <header>
            <h1>About Me</h1>
          </header>
          <p>
            從寫 CSS，寫 jQuery，寫 AngularJS，到寫
            React，最後不小心跑到澳洲打工。
          </p>
          <h2>My Instagram</h2>
          <Gallery>
            {instas.map(insta => (
              <a
                href={`https://www.instagram.com/p/${insta.id}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta.preview} alt="" />
              </a>
            ))}
          </Gallery>
          <div />
        </div>
      </Layout>
    )
  }
}

const Gallery = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 0 3rem;

  a {
    display: block;
    border-radius: 4px;
    overflow: hidden;
  }
  img {
    display: block;
    margin: 0;
  }
`

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allInstaNode(sort: { fields: timestamp, order: DESC }) {
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
