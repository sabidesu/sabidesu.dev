import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage } from 'gatsby-plugin-image'
import { customButtons, btnOutlineDangerEmphasis } from '../styles/button_styles.module.css'

export const query = graphql`
  query {
    allContentfulProject {
      nodes {
        description {
          description
        }
        name
        previewImage {
          description
          gatsbyImage(width: 1000)
        }
        viewLink
        sourceLink
        sourceLinkText
      }
    }
  }
`

const ProjectsPage = ({ data }) => {
  return (
    <Layout pageTitle="projects">
      <h3 className="mb-3">here are some projects i've worked on!</h3>
      <div className="row gx-3 gy-3">
        {
          data.allContentfulProject.nodes.map((project) => (
            <div className="col-lg-6">
              <ProjectCard project={project} key={project.name} />
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <div className="card h-100">
      <div className="row g-0 h-100">
        {project.previewImage && (
          <div className="col-sm-3">
            <GatsbyImage image={project.previewImage.gatsbyImage} alt={project.previewImage.description} className="img-fluid rounded-start h-100" />
          </div>
        )}
        <div className="col-sm">
          <div className="card-body h-100 d-flex flex-column justify-content-between">
            <div className="mb-3">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description.description}</p>
            </div>
            <div className="d-flex justify-content-end" id={customButtons}>
              { project.viewLink && <a href={project.viewLink} className={`btn ${btnOutlineDangerEmphasis} rounded-pill`} target="_blank" rel="noopener noreferrer">view</a>}
              { project.sourceLink && <a href={project.sourceLink} className="btn btn-outline-light rounded-pill ms-2" target="_blank" rel="noopener noreferrer">{project.sourceLinkText}</a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo pageTitle="projects" />

export default ProjectsPage
