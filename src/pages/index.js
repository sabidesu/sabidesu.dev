import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const profileClasses = "rounded-circle img-fluid"

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

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center gy-4">
            <div className="col-sm-4">
              {profileImages[Math.floor(Math.random() * profileImages.length)]}
            </div>
            <div className="col-sm-8">
              <h4 className="text-info-emphasis">hi, i'm sabi!</h4>
              <p className="mb-1">i'm just a demon kerret (cat/ferret) that likes to program things. you can find me at the places below</p>
              <ul className="navbar-nav flex-row d-none d-sm-flex">
                <SocialLink href="https://twitter.com/sabidesu1" name="twitter" />
                <SocialLink href="https://tumblr.com/sabidesu" name="tumblr" />
                <SocialLink href="https://bsky.app/profile/sabidesu.dev" name="bluesky" last />
              </ul>
              <div className="d-sm-none mt-3">
                <a href="https://twitter.com/sabidesu1" className="btn btn-outline-danger rounded-pill w-100 mb-2">twitter</a>
                <a href="https://tumblr.com/sabidesu" className="btn btn-outline-danger rounded-pill w-100 mb-2">tumblr</a>
                <a href="https://bsky.app/profile/sabidesu.dev" className="btn btn-outline-danger rounded-pill w-100">bluesky</a>
              </div>
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

export const Head = () => (
  <Seo pageTitle="home">
    <body style={protoBG} />
  </Seo>
)

const protoBG = {
  backgroundImage: "url('protogens_tile.png')",
  backgroundSize: "50%"
}

export default IndexPage
