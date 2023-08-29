import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const profileImages = [
  <StaticImage
    alt="a red cat-ferret combination with pink hair and yellow horns turned three-quarters and wearing a blue hoodie, looking at the viewer with red eyes"
    src="../images/fanart_colored_by_rose.png"
    />,
  <StaticImage
    alt="a red cat-ferret combination with pink hair and yellow horns looking down at something"
    src="../images/fullbody_ivory.png"
    />,
  <StaticImage
    alt="a red cat-ferret combination with pink hair and yellow horns wearing a blue hoodie with oreos on the design"
    src="../images/gift_from_kokorodove.png"
    />
]

const IndexPage = () => {
  return (
    <Layout pageTitle="home">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              {profileImages[Math.floor(Math.random() * profileImages.length)]}
            </div>
            <div className="col-8">
              <h4>hi, i'm sabi! i'm just a demon kerret (cat/ferret) that likes to program things</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo pageTitle="home" />

export default IndexPage
