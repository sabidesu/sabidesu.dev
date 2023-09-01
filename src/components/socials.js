import * as React from 'react'
import { socialButtons, btnOutlineDangerEmphasis } from './socials.module.css'

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
    <a href={href} className={`btn ${btnOutlineDangerEmphasis} rounded-pill w-100 ${!last && "mb-2"}`}>{name}</a>
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
      <div className="d-sm-none mt-3" id={socialButtons}>
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

export default Socials
