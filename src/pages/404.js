import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <Container>
          <div>
            <h1>Not Found :(</h1>
          </div>
        </Container>
      </Layout>
    )
  }
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  margin: -2rem;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    color: #fff;
    background: #990000;
    margin: 0 0 2rem;
    padding: 2rem;
  }
`

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
