import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="home">
      <p>i'm making this by following the gatsby tutorial</p>
      <StaticImage
        alt="it's sabi playing beat saber!"
        src="https://i.imgur.com/JH1aEQ2.png"
      />
    </Layout>
  )
}

export const Head = () => <title>home page</title>

export default IndexPage
