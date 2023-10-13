import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { blogPost } from '../../styles/blog_post.module.css'

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title} blogPost>
      <h3>{data.mdx.frontmatter.date.toLowerCase()}</h3>
      <div id={blogPost}>
        {children}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo pageTitle={`${data.mdx.frontmatter.title} | blog`} />

export default BlogPost
