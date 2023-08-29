import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout pageTitle="not found :(">
      <p>hey uh, that page doesn't exist... wanna use the menu at the top to go somewhere else?</p>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <Seo pageTitle="not found" />
