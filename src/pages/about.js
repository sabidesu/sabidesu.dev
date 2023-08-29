import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="about me">
      <p>yo, i'm sabi! a 4th-year uni student studying computer science and japanese. i play a lot of VR and rhythm games, especially ITG/SMX/DDR/PIU and djmax</p>
      <p>this website is meant to be a place for me to throw up pretty much anything and everything i want, as well as a collection of my social links</p>
    </Layout>
  )
}

export const Head = () => <Seo pageTitle="about me" />

export default AboutPage
