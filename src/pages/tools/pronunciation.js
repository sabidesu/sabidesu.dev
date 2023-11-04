import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { customButtons, btnOutlineDangerEmphasis } from '../../styles/button_styles.module.css'

const PronunciationPage = () => {
  return (
    <Layout pageTitle="how do you pronounce 'sabi'?">
      <h3 className="h3">it's pronounced:</h3>
      <PronunciationGenerator />
    </Layout>
  )
}

const PronunciationGenerator = () => {
  const [pronunciation, setPronunciation] = React.useState(' ')

  const headsOrTails = () => {
    // q: why is this coin weighted?
    // a: the longer the pronunciation the better
    return Math.random() < 0.9 ? true : false
  }

  const generatePronunciation = () => {
    let result = 's'
    const syllables = ['bi', 'ba', 'bba', 'bbi', 'sb', 'sba', 'sbi', 'sbbi', 'sbba']

    result += headsOrTails() ? 'a' : ''

    while (headsOrTails()) {
      result += syllables[Math.floor(Math.random() * syllables.length)]
    }
    result += 'bi'

    setPronunciation(result)
  }

  return (
    <div id={customButtons} className="text-wrap">
      <p className="lead">{pronunciation}</p>
      <button className={`btn ${btnOutlineDangerEmphasis} rounded-pill`} onClick={generatePronunciation}>like this</button>
    </div>
  )
}

export const Head = () => <Seo pageTitle="how do you pronounce 'sabi'? | tools" />

export default PronunciationPage
