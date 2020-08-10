import React from 'react'
import styled from 'styled-components'
import OtherProject from './OtherProject'
import {useStaticQuery,graphql} from 'gatsby'

interface Props {
    node:{
        frontmatter:{
            title:string,
            techs:string,
            code:string,
            demo:string,
            image:{
                childImageSharp:{
                    fixed:object
                }
            }
            excerpt:string
        }
    }
}

const Container = styled.section`
    padding: 100px 0px;
    position:relative;
    min-height:100vh;
`

const ProjectContainer = styled.section`
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
` 

const Title = styled.h1`
    margin-bottom:100px;
`



const OtherProjects = () => {
    
    const OtherProjects = useStaticQuery(graphql`
        {
            allMarkdownRemark(filter: {frontmatter: {tag:{eq: "other-project"}}}) {
                edges{
                    node{
                        frontmatter{
                            title
                            demo
                            code
                            techs
                            image{
                                childImageSharp{
                                  fixed(width: 380, quality: 100){
                                    ...GatsbyImageSharpFixed
                                  }
                                }
                              }
                        }
                        excerpt
                    }
                }
            }
        }
    `)
    
    return (
        <Container>
            <Title><span>02.</span> Other Projects</Title>
            <ProjectContainer>
                {OtherProjects.allMarkdownRemark.edges.map((item:Props,index:number)=>
                    <OtherProject 
                        key={index} 
                        title={item.node.frontmatter.title} 
                        description={item.node.excerpt} 
                        techs={item.node.frontmatter.techs} 
                        demo={item.node.frontmatter.demo} 
                        code={item.node.frontmatter.code} 
                        img={item.node.frontmatter.image.childImageSharp.fixed} 
                    />
                )}
            </ProjectContainer>
        </Container>
    )
}

export default OtherProjects
