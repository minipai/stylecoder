import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import Helmet from "react-helmet"
import { Box } from "rebass"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <AppLayout>
        <Helmet>
          <script src="https://kit.fontawesome.com/35acc2bd14.js"></script>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css"
          />
          <link rel="stylesheet" href="https://use.typekit.net/zrf5dge.css" />
        </Helmet>
        <nav>
          <Link to="/" activeClassName="active">
            <i className="fal fa-home"></i>
          </Link>
          <Link to="/blog" activeClassName="active" partiallyActive>
            <i className="fal fa-pencil"></i>
          </Link>
          <Link to="/about" activeClassName="active">
            <i className="fal fa-smile"></i>
          </Link>
        </nav>
        <main>
          <Box px={4} py={4} maxWidth={875} mx="auto">
            {children}
          </Box>
        </main>
      </AppLayout>
    )
  }
}

const AppLayout = styled.div`
  > nav {
    display: flex;
    color: #fff;
    width: 3.5rem;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: fixed;
    font-size: 1.5rem;
    font-weight: bold;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    bottom: 0;
    @media (max-width: 440px) {
      height: 3.5rem;
      width: 100vw;
      left: 0;
      top: auto;
      right: 0;
      bottom: 0;
      flex-direction: row;
      background: #000;
      z-index: 1;
    }

    a {
      color: #fff;
      opacity: 0.5;
      display: block;
      margin: 0.7rem;
    }
    a.active {
      color: #fff;
      opacity: 1;
    }
  }
  > main {
    background: #fff;
    margin: 0 0 0 3.5rem;
    overflow: hidden;
    min-height: 100vh;
    position: relative;

    @media (max-width: 440px) {
      margin: 0 0 3.5rem 0;
    }
  }
`

export default Layout
