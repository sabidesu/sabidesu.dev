import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = () => {
  return (
    <Layout pageTitle="blog posts">
      <p>blog post contents'll go here eventually</p>
    </Layout>
  )
}

export const Head = () => <Seo title="blog posts" />

export default BlogPost
