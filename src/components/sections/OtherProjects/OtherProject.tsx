import React from 'react'
import styled from 'styled-components'
import { GithubSVG, ArrowSVG } from '../../Social'
import {gradient} from '../../styles/gradient'
import Img from 'gatsby-image'

interface Props{
    title:string,
    description:string,
    demo:string,
    code:string,
    techs:string
    img:object
}

const Project = styled.div`
    margin:20px 0px;
    width:300px;
`

const ProjectHeader = styled.div`
    display:flex;
    justify-content:space-between;
    font-size:18px;
`

const ProjectTitle = styled.h2`
    margin: 0; 
`

const ProjectLinks = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const ProjectImage = styled.div`
    overflow:hidden;
    position:relative;
    height:200px;
    width:300px;
    object-fit:contain;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    &::before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
        ${gradient}
        transition: .3s ease-in-out;
        opacity:0.7;
        z-index:1;
    }
    &:hover::before{
        opacity:0;
    }
`

const ProjectDescription = styled.div`
    position:relative;
    top:-40px;
    background:rgb(40,81,142);
    padding:10px;
    margin:10px;
    box-shadow: 0px 15px 15px -10px rgba(0,0,0,0.5);
    border-radius:10px;
    background:rgb(20,31,52);
    z-index:2;
`

const ProjectTechs = styled.ul`
    position:relative;
    display:flex;
    list-style-type:none;
    top:-30px;
    flex-wrap:wrap;
`

const Tech = styled.li`
    margin:0px 10px;
    background:rgb(40,81,142);
    border-radius:50px;
    padding:2px 10px;
    background:rgb(20,31,52);
    font-size:14px;
`

const StyledLink = styled.a`

`

const OtherProject = ({title,description,code,demo,img,techs}:Props) => {

    const techArr = techs.split(',')

    return (
        <Project>
            <ProjectHeader>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectLinks>
                    <StyledLink href={code} target='blank'><GithubSVG /></StyledLink>
                    <StyledLink href={demo} target='blank'><ArrowSVG/></StyledLink>
                </ProjectLinks>
            </ProjectHeader>
            <StyledLink href={demo} target='blank'>
                <ProjectImage>
                    <Img fixed={img} alt={title+' banner'} ></Img>
                </ProjectImage>
            </StyledLink>
            
            <ProjectDescription>{description}</ProjectDescription>
            <ProjectTechs>
                {techArr?.map((tech,index)=>
                    <Tech key={index}>{tech}</Tech>
                )}
            </ProjectTechs>
        </Project>
    )
}

export default OtherProject