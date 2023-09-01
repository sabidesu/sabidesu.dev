import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { protoBg } from '../styles/proto_bg.module.css'
import Socials from '../components/socials'

const profileClasses = "rounded-circle img-fluid w-75"

const profileImages = [
  <StaticImage
    alt="a red cat-ferret combination with pink hair and yellow horns turned three-quarters and wearing a blue hoodie, looking at the viewer with red eyes"
    src="../images/fanart_colored_by_rose.png"
    className={profileClasses}
    />,
  <StaticImage
    alt="a red cat-ferret combination with pink hair and yellow horns looking down at something"
    src="../images/fullbody_ivory.png"
    className={profileClasses}
    />,
  <StaticImage
    alt="a red cat-ferret combination with pink hair and yellow horns wearing a blue hoodie with oreos on the design"
    src="../images/gift_from_kokorodove.png"
    className={profileClasses}
    />
]

const socialMedia = [
  {
    href: "https://twitter.com/sabidesu1",
    name: "twitter",
  },
  {
    href: "https://tumblr.com/sabidesu",
    name: "tumblr",
  },
  {
    href: "https://bsky.app/profile/sabidesu.dev",
    name: "bluesky",
  },
  {
    href: "https://github.com/sabidesu",
    name: "github",
  },
]

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center gy-4">
            <div className="col-md-4 d-flex justify-content-end">
              {profileImages[Math.floor(Math.random() * profileImages.length)]}
            </div>
            <div className="col-md me-0 me-md-5">
              <h4 className="text-info-emphasis display-4">hi, i'm sabi!</h4>
              <p className="mb-1">i'm just a demon kerret (cat/ferret) that likes to program things. you can find me at the places below</p>
              <Socials links={socialMedia} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo pageTitle="home">
    <body className={protoBg} />
  </Seo>
)

export default IndexPage
