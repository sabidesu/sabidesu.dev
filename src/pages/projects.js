import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage } from 'gatsby-plugin-image'

const projects = [
  {
    name: "personal website",
    description: "you're currently on it!",
    viewLink: null,
    github: "https://github.com/sabidesu/sabidesu.dev",
    image: "../images/fanart_colored_by_rose.png",
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
            <div className="d-flex justify-content-end">
              { project.github && <a href={project.github} className="btn btn-outline-danger rounded-pill">github</a>}
              { project.viewLink && <a href={project.viewLink} className="btn btn-outline-danger rounded-pill ms-2">view</a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo pageTitle="projects" />

export default ProjectsPage
