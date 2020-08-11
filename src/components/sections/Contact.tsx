import React from 'react'
import styled from 'styled-components'
import { MailSVG } from '../Social'
import {Button } from '../Button'
import ParticlesComponent from '../ParticlesComponent'

const Container = styled.section<{WholeViewPort:boolean}>`
    width:100%;
    padding:100px 0px;
    ${props=>props.WholeViewPort && 'min-height:100vh;'}
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
`

const Title = styled.h1`
    margin-bottom:60px;
`

const IconContainer = styled.div`
    width:100px;
    margin-bottom:20px;

`

const Paragraph = styled.p`
    width:300px;
`

interface Props {
    WholeViewPort:boolean
}

const Contact = ({WholeViewPort}:Props) => {
    return (
        <Container WholeViewPort={WholeViewPort} >
            <Title><span>03.</span> Contact Me</Title>
            <IconContainer>
                <MailSVG/>
            </IconContainer>
            <Paragraph>
                Send me a message, my inbox is always open and I'm currently free
            </Paragraph>
            <ParticlesComponent height='100%' />
            <Button href='mailto:stanleygarbo@gmail.com' padding='15px 20px' shadowTop='5px' margin='50px 0px 0px 0px' >Message Me</Button>
        </Container>
    )
}

export default Contact
