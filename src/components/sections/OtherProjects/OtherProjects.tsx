import React from 'react'
import styled from 'styled-components'
import OtherProject from './OtherProject'

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
    return (
        <Container>
            <Title><span>02.</span> Other Projects</Title>
            <ProjectContainer>
                <OtherProject techs={['VueJS','Firebase']} />
                <OtherProject techs={['VueJS','Firebase']} />
                <OtherProject techs={['VueJS','Firebase']} />
            </ProjectContainer>
        </Container>
    )
}

export default OtherProjects
