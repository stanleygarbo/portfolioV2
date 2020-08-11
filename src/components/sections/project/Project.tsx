import React from 'react'
import styled from 'styled-components'
import {Button} from '../../Button'
import Img from 'gatsby-image'
import {gradient} from '../../styles/gradient'

interface Props {
    projectNumber:number,
    data:{
        node:{
            frontmatter:{
                title:string,
                description:string,
                techs:string,
                demo:string,
                code:string,
                image:{
                    childImageSharp:{
                        fixed:object
                    }
                }
            }
        }
    }
}

const ProjectContainer = styled.div`
    width:100%;
    display:flex;
    margin:100px 0px;
    position:relative;
` 


const ProjectOverviewWrapper = styled.div`
    width:50%;
    position:relative;
    z-index:2;
    @media (max-width:675px){
        width:100%; 
    }
`

const ProjectOverview = styled.div<{projectNumber:number}>`
    display:flex;
    flex-direction:column;
    height:100%;
    align-items:${props=>props.projectNumber===2?'flex-start':'flex-end'};
    text-align:${props=>props.projectNumber===2?'left':'right'};
    justify-content:space-evenly;
    @media (max-width:675px){
        padding:10px;
    }
`

const ProjectTitle = styled.h2`
    font-size:25px;
    padding:10px;
`

const ProjectDescription = styled.p`
    font-size:17px;
    width:120%;
    background:rgb(20,31,52);
    padding:10px;
    border-radius:10px;
    box-shadow:0px 13px 10px -10px rgba(0,0,0,0.6);
    @media (max-width:675px){
        width:100%;
        background:none;
        box-shadow:none;
    }
`

const ProjectTechs = styled.ul<{position:string}>`
    display:flex;
    list-style-type:none;
    flex-wrap:wrap;
    justify-content:${props=>props.position};
`

const Tech = styled.li`
    background:rgb(20,31,52);
    padding:2px 10px;
    border-radius:50px;
    font-size:14px;
    margin:5px;
    @media (max-width:675px){
        background:none;
    }
`

const ButtonContainer = styled.div`
    display:flex;
    padding:20px 0px;
`

const Project = ({data,projectNumber}:Props) => {

    const techs = data.node.frontmatter.techs.split(' ')

    return (
        <ProjectContainer>
            {projectNumber !== 2 && 
                <ImageLink link={data.node.frontmatter.demo} altText={data.node.frontmatter.demo} image={data.node.frontmatter.image.childImageSharp.fixed} />
            }
            <ProjectOverviewWrapper>
                <ProjectOverview projectNumber={projectNumber}>
                    <ProjectTitle>{data.node.frontmatter.title}</ProjectTitle>
                    <ProjectDescription>{data.node.frontmatter.description}</ProjectDescription>
                    <ProjectTechs position={projectNumber === 2 ? 'flex-start':'flex-end'} >
                        {techs?.map((tech,index)=>
                            <Tech key={index}>
                                {tech}
                            </Tech>
                        )}
                    </ProjectTechs>
                    <ButtonContainer>
                        {data.node.frontmatter.code && <Button href={data.node.frontmatter.code} target='blank' padding='5px 20px' shadowTop='5px' margin='0px 5px' >Code</Button>}
                        {data.node.frontmatter.demo && <Button href={data.node.frontmatter.demo} target='blank' padding='5px 20px' shadowTop='5px' margin='0px 5px' >Demo</Button>}
                    </ButtonContainer>
                </ProjectOverview>
            </ProjectOverviewWrapper>
            {projectNumber === 2 && 
                <ImageLink link={data.node.frontmatter.demo} altText={data.node.frontmatter.demo} image={data.node.frontmatter.image.childImageSharp.fixed} />
            }
        </ProjectContainer>
    )
}

const ImageLinkWrapper = styled.a`
    width:50%;
    height:100%;
    @media (max-width:675px){
        position:absolute;
        width:100%; 
    }
`

const ImageContainer = styled.div`
    width:100%;
    height:100%;
    position:relative;
    overflow:hidden;
    &::before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        ${gradient}
        transition: .3s ease-in-out;
        opacity:0.7;
        pointer-events:none;
        z-index:1;
    }
    &:hover::before{
        opacity:0;
    }
    @media (max-width:675px){
        width:100%; 
        &::before{
            background:rgb(0,11,32);
            opacity:0.9;
        }
    }
`

interface ImageLinkProps {
    link:string,
    image:object,
    altText:string
}

const ImageLink = ({link,image,altText}:ImageLinkProps) =>
    <ImageLinkWrapper href={link} target='blank' >
        <ImageContainer >
            <Img 
                fixed={image} 
                alt={altText+' banner'}
            />
        </ImageContainer>
    </ImageLinkWrapper>

export default Project
