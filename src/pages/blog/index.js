import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="blog">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2><Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link></h2>
            <h3>{node.frontmatter.date.toLowerCase()}</h3>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo pageTitle="blog" />

export default BlogPage
