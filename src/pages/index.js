import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Box } from "rebass"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Home extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location}>
        <SEO title="All posts" />
        <Container>
          <h1>{siteTitle}</h1>
          <p>I am a style coder</p>

          <Box p={5}>
            <ul>
              <li>
                <i className="fa fa-heart-broken" />
                &nbsp;AngularJS
              </li>
              <li>
                <i className="fa fa-check-circle" />
                &nbsp;Babel
              </li>
              <li>
                <i className="fa fa-check-circle" />
                &nbsp;Express
              </li>
              <li>
                <i className="fa fa-heart" />
                &nbsp;GraphQL
              </li>
              <li>
                <i className="fa fa-check-circle" />
                &nbsp;MobX
              </li>
              <li>
                <i className="fa fa-question-circle" />
                &nbsp;Monad
              </li>
              <li>
                <i className="fa fa-star" />
                &nbsp;React
              </li>
              <li>
                <i className="fa fa-check-circle" />
                &nbsp;Redux
              </li>
              <li>
                <i className="fa fa-check-circle" />
                &nbsp;RxJS
              </li>
              <li>
                <i className="fa fa-heart-broken" />
                &nbsp;Rails
              </li>
              <li>
                <i className="fa fa-check-circle" />
                &nbsp;TypeScript
              </li>

              <li>
                <i className="fa fa-check-circle" />
                &nbsp;Webpack
              </li>
            </ul>
          </Box>
        </Container>
      </Layout>
    )
  }
}

const Container = styled.div`
  text-align: center;
  h1 {
    border-bottom: 0;
    font-size: 3.6rem;
    margin: 5rem 0 1rem;
    color: #2a3a4a;
    animation: fadein 2s;
  }
  p {
    font-size: 2.4rem;
    font-family: quasimoda-2, sans-serif;
    animation: fadein 3s;
    color: #000;
  }

  h2 {
    font-family: demos-next, serif;

  }
  li {
    font-family: quasimoda, sans-serif;
    display: inline-block;
    text-align: left;
    padding: 0.7rem 1.2rem 0.9rem;
    margin: 0.5rem;
    color: #2b3a4a;
    font-size: 1.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 30%;
    box-sizing: border-box;
    background: #fcfcfc;
  }
  li:nth-child(3n+1)  {
    ${"" /* border-color: #555; */}
  }
  li:nth-child(3n+2)  {
    ${"" /* border-color: #5b6d84; */}
  }
  li:nth-child(3n)  {
    ${"" /* border-color: #2b3a4a; */}
  }
  ul {
    max-width: 800px;
    margin: 0 auto;
  }


  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  animation: fadein 1s ease-in forwards;
  padding: 1px;
  }
`

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
