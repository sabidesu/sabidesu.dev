import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = () => {
  return (
    <Layout pageTitle="blog">
      <p>my posts'll go here</p>
    </Layout>
  )
}

export const Head = () => <Seo title="blog" />

export default BlogPage
