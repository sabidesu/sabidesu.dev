import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="home">
      <p>i'm making this by following the gatsby tutorial</p>
      <StaticImage
        alt="it's sabi playing beat saber!"
        src="../images/gift_from_kokorodove.png"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="home page" />

export default IndexPage
