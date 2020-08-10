import React from 'react'
import styled from 'styled-components'
import { MailSVG } from '../Social'
import {Button } from '../Button'
import ParticlesComponent from '../ParticlesComponent'

const Container = styled.section`
    width:100%;
    padding:100px 0px;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
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

const Contact = () => {
    return (
        <Container>
            <Title><span>03.</span> Contact Me</Title>
            <IconContainer>
                <MailSVG/>
            </IconContainer>
            <Paragraph>
                Send me a message, my inbox is always open and I'm currently free
            </Paragraph>
            <ParticlesComponent height='100%' />
            <Button padding='15px 20px' shadowTop='5px' >Message Me</Button>
        </Container>
    )
}

export default Contact
