import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { btnOutlineDangerEmphasis } from './index.module.css'
import { protoBg } from '../styles/proto_bg.module.css'

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
  }
]

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center gy-4">
            <div className="col-sm-4 d-flex justify-content-end">
              {profileImages[Math.floor(Math.random() * profileImages.length)]}
            </div>
            <div className="col-sm-8">
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

const SocialLink = ({ href, name, last }) => {
  return (
    <>
      <li className="nav-item me-2 text-danger-emphasis"><a href={href} className="nav-link">{name}</a></li>
      {!last && <li className="nav-item nav-link me-2">・</li>}
    </>
  )
}

const SocialButton = ({ href, name, last }) => {
  return (
    <a href={href} className={`btn rounded-pill w-100 ${btnOutlineDangerEmphasis} ${!last && "mb-2"}`}>{name}</a>
  )
}

const Socials = ({ links }) => {
  return (
    <>
      <ul className="navbar-nav flex-row d-none d-sm-flex">
        {
          links.map(({ href, name }, index) => {
            if (index === links.length - 1) return <SocialLink href={href} name={name} key={name} last />
            return <SocialLink href={href} name={name} key={name} />
          })
        }
      </ul>
      <div className="d-sm-none mt-3">
        {
          links.map(({ href, name }, index) => {
            if (index === links.length - 1) return <SocialButton href={href} name={name} key={name} last />
            return <SocialButton href={href} name={name} key={name} />
          })
        }
      </div>
    </>
  )
}

export const Head = () => (
  <Seo pageTitle="home">
    <body className={protoBg} />
  </Seo>
)

export default IndexPage
