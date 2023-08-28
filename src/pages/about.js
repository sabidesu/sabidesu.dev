import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="about me">
      <p>hello, i'm sabi</p>
    </Layout>
  )
}

export const Head = () => <Seo pageTitle="about me" />

export default AboutPage
