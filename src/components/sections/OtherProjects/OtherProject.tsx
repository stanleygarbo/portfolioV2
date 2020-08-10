import React from 'react'
import styled from 'styled-components'
import { GithubSVG, ArrowSVG } from '../../Social'
import {gradient} from '../../styles/gradient'

interface Props{
    techs:string[]
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
    margin: 0px 0px 20px 0px; 
`

const ProjectLinks = styled.div`
    display:flex;
    justify-content:space-between;
    width:60px;
`

const ProjectImage = styled.div<{imageURL:string}>`
    background:url(${props=>props.imageURL});
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
    }
    &:hover::before{
        opacity:0;
    }
`

const ProjectDescription = styled.div`
    position:relative;
    top:-60px;
    background:rgb(40,81,142);
    padding:10px;
    margin:10px;
    box-shadow: 0px 15px 15px -10px rgba(0,0,0,0.5);
    border-radius:10px;
    background:rgb(20,31,52);
`

const ProjectTechs = styled.ul`
    position:relative;
    display:flex;
    list-style-type:none;
    top:-50px;
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

const OtherProject = ({techs}:Props) => {
    return (
        <Project>
            <ProjectHeader>
                <ProjectTitle>Keep Clone</ProjectTitle>
                <ProjectLinks>
                    <GithubSVG />
                    <ArrowSVG/>
                </ProjectLinks>
            </ProjectHeader>
            <ProjectImage imageURL='https://stanleygarbo.engineer/static/media/google-keep-clone.11a8a092.png' ></ProjectImage>
            <ProjectDescription>Pariatur aute sint occaecat eu proident ullamco quis consectetur ex quis laborum.</ProjectDescription>
            <ProjectTechs>
                {techs?.map((tech,index)=>
                    <Tech key={index}>{tech}</Tech>
                )}
            </ProjectTechs>
        </Project>
    )
}

export default OtherProject