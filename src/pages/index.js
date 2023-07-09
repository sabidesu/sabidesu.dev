import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="home">
      <p>i'm making this by following the gatsby tutorial</p>
    </Layout>
  )
}

export const Head = () => <title>home page</title>

export default IndexPage
