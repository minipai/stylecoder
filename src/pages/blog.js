import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Article } from "../components/Article"

const Post = styled.article`
  display: flex;
  margin: 0 0 2rem;
  header {
    width: 9rem;
    flex-shrink: 0;
  }
  section {
    h3 {
      margin-top: 0;
    }
  }
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title="Blog">
        <SEO title="All posts" />
        <Article className="markdown-body">
          <h1>Blog</h1>

          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Post key={node.fields.slug}>
                <header>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <h3>
                    <Link
                      style={{ boxShadow: `none` }}
                      to={`/blog` + node.fields.slug}
                    >
                      {title}
                    </Link>
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
                <hr />
              </Post>
            )
          })}
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
