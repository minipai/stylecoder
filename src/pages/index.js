import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Home extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout>
        <SEO title="Home" />
        <Container>
          <h1>{siteTitle}</h1>
          <p>I am a style coder</p>

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
        </Container>
      </Layout>
    )
  }
}

const Container = styled.div`
  text-align: center;
  animation: fadein 1s ease-in forwards;
  padding: 1px 0;

  h1 {
    border-bottom: 0;
    font-size: 3.6rem;
    margin: 3rem 0 1rem;
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
  ul {
    padding: 3rem 0;
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
    border: 1px solid #eee;
    width: 30%;
    box-sizing: border-box;
    background: #fcfcfc;
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
`

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
