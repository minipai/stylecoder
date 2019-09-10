import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <div>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <article className="markdown-body">
            <header>
              <h1>{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date}</p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>

          <BlogNav>
            <ul>
              <li>
                {previous ? (
                  <Link to={"/blog" + previous.fields.slug} rel="prev">
                    <i className="fal fa-arrow-alt-left"></i>
                  </Link>
                ) : (
                  <span>
                    <i className="fal fa-arrow-alt-left"></i>
                  </span>
                )}
              </li>
              <li>
                {next ? (
                  <Link to={"/blog" + next.fields.slug} rel="next">
                    <i className="fal fa-arrow-alt-right"></i>
                  </Link>
                ) : (
                  <span>
                    <i className="fal fa-arrow-alt-right"></i>
                  </span>
                )}
              </li>
            </ul>
          </BlogNav>
        </div>
      </Layout>
    )
  }
}

const BlogNav = styled.nav`
  position: fixed;
  right: 0.5rem;
  bottom: 2rem;
  transform: rotate(-90deg);
  font-size: 1.5rem;
  @media (max-width: 440px) {
    flex-direction: column;
    right: -0.5rem;
    bottom: 5rem;
  }
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 0;
  }
  a,
  span {
    text-decoration: none;
    padding: 0.25rem;
    display: inline-block;
    font-style: normal;
  }
  span {
    opacity: 0.3;
  }
`

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
