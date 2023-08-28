import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ProtogensPage = () => {
  return (
    <Layout pageTitle="protogens!">
      <p>this page should automatically redirect you to the place where you can download the zip with the shit, but in case it didn't you can download it <a href="https://drive.google.com/file/d/1H6fxnCpdE888NsizKBDOyg6XrsUbc-TC/view?usp=drive_link">here</a></p>
    </Layout>
  )
}

export const Head = () => (
  <Seo pageTitle="protogens!">
    <meta http-equiv="Refresh" content="0; URL=https://drive.google.com/file/d/1H6fxnCpdE888NsizKBDOyg6XrsUbc-TC/view?usp=drive_link" />
  </Seo>
)

export default ProtogensPage
