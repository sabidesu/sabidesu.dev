import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const ProtogensPage = () => {
  return (
    <Layout pageTitle="protogens!">
      <p>this page should've automatically redirected you to the place where you can download the zip with the shit, but in case it didn't you can download it <a href="https://drive.google.com/file/d/1H6fxnCpdE888NsizKBDOyg6XrsUbc-TC/view?usp=drive_link">here</a></p>
      <StaticImage
        alt="a bunch of neon protogens over a dark green background, including an excited green one, sad purple one, angry orange one, and a happy blue one. there's binary reading 01010000, a computer with a P on the screen, RAM, and a tablet with 404 on the screen in the background"
        src="../images/protogen_wallpaper.png"
      />
    </Layout>
  )
}

export const Head = () => (
  <Seo pageTitle="protogens!">
    {/* <meta http-equiv="Refresh" content="0; URL=https://drive.google.com/file/d/1H6fxnCpdE888NsizKBDOyg6XrsUbc-TC/view?usp=drive_link" /> */}
  </Seo>
)

export default ProtogensPage
