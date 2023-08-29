import * as React from "react"
import Layout from '../components/layout'
import { Link } from "gatsby"
import Seo from '../components/seo'

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <Layout pageTitle="not found :(">
      <p>hey uh, that page doesn't exist... wanna use the menu at the top to go somewhere else?</p>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <Seo pageTitle="not found" />
