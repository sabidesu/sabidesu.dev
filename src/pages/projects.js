import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage } from 'gatsby-plugin-image'
import { customButtons, btnOutlineDangerEmphasis } from '../styles/button_styles.module.css'

const projects = [
  {
    name: "personal website",
    description: "you're currently on it!",
    viewLink: "https://youtu.be/dQw4w9WgXcQ?si=4LhkPvkMzEPds7m-",
    sourceLink: "https://github.com/sabidesu/sabidesu.dev",
    sourceLinkText: "github",
    image: null,
  },
]

const ProjectsPage = () => {
  return (
    <Layout pageTitle="projects">
      <h3 className="mb-3">here are some projects i've worked on!</h3>
      {
        projects.map((project) => <ProjectCard project={project} key={project.name} />)
      }
    </Layout>
  )
}

const ProjectCard = ({project}) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        { project.image && <div className="col-sm-4">
          <GatsbyImage image={project.image} className="img-fluid rounded-start" />
        </div>
        }
        <div className="col-sm">
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">{project.description}</p>
            <div className="d-flex justify-content-end" id={customButtons}>
              { project.sourceLink && <a href={project.sourceLink} className="btn btn-outline-light rounded-pill" target="_blank" rel="noopener noreferrer">{project.sourceLinkText}</a>}
              { project.viewLink && <a href={project.viewLink} className={`btn ${btnOutlineDangerEmphasis} rounded-pill ms-2`} target="_blank" rel="noopener noreferrer">view</a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo pageTitle="projects" />

export default ProjectsPage
