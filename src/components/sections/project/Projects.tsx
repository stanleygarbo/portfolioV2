import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import { useStaticQuery, graphql } from 'gatsby'

interface Props{
    projects:object[]
}

const ProjectsContainer = styled.section`
    padding:100px 0px;
`

const Title = styled.h1`
    font-size:25px;
`

const Projects = () => {

    const projects = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            tag: {eq: "project"}
          }
        }
      ) {
        edges{
          node{
            frontmatter {
              title
              description
              techs
              image{
                childImageSharp{
                  fixed(width: 500, quality: 100){
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
    `)

    return (
        <ProjectsContainer>
            {console.log(projects)}
            <Title><span>01.</span> Projects</Title>
            {
                projects.allMarkdownRemark.edges.map((project, index)=><Project key={index} projectNumber={index+1} data={project} />)
            }
        </ProjectsContainer>
    )
}

export default Projects
