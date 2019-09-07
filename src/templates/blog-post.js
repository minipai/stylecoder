import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Article } from "../components/Article"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Article>
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
            <hr />
          </article>

          <BlogNav>
            <ul>
              <li>
                {previous ? (
                  <Link to={"/blog" + previous.fields.slug} rel="prev">
                    <i class="fal fa-arrow-alt-left"></i>
                  </Link>
                ) : (
                  <i>
                    <i class="fal fa-arrow-alt-left"></i>
                  </i>
                )}
              </li>
              <li>
                {next ? (
                  <Link to={"/blog" + next.fields.slug} rel="next">
                    <i class="fal fa-arrow-alt-right"></i>
                  </Link>
                ) : (
                  <i>
                    <i class="fal fa-arrow-alt-right"></i>
                  </i>
                )}
              </li>
            </ul>
          </BlogNav>
        </Article>
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
  i {
    text-decoration: none;
    padding: 0.25rem;
    display: inline-block;
    font-style: normal;
  }
  i {
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
