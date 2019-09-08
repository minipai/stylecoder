import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO title="Blog" />
        <div className="markdown-body">
          <header>
            <h1>Blog</h1>
          </header>
          {posts.map(({ node }, index) => {
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
                  {index < 5 && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  )}
                </section>
                <hr />
              </Post>
            )
          })}
        </div>
      </Layout>
    )
  }
}

const Post = styled.article`
  display: flex;
  header {
    width: 9rem;
    flex-shrink: 0;
  }
  section {
    h3 {
      margin-top: 0;
    }
    a {
      color: #587594;
    }
    p {
      margin: 0 0 2rem;
    }
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
