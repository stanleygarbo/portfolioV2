import React from 'react'
import styled from 'styled-components'
import {Button} from '../Button'
import {gradient} from '../styles/gradient'
import {motion} from 'framer-motion'

const HeadingVariants = {
    hidden:{
        opacity:0,
        y:100
    },
    visible:{
        opacity:1,
        y:0
    }
}

const HeaderComponent = styled.header`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    min-height:100vh;
    padding:100px 0px;
`

const HeadingOne = styled(motion.h1)`
    font-size:15px;
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
    font-weight:900;
    ${gradient}
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`

const HeadingFontSize =`
    @media (max-width:800px){
        font-size: 3em;
    }
    @media (max-width:435px){
        font-size: 2.4em;
}`

const HeadingTwo = styled(motion.h2)`
    font-size:4em;
    color:${props => props.color};
    ${HeadingFontSize}
`

const HeadingThree = styled(motion.h3)`
    font-size:4em;
    color:${props => props.color};
    ${HeadingFontSize}
`

const WhatIDo = styled(motion.p)`
    font-size:1.1em;
    padding-top:50px;
    @media (max-width:435px){
        font-size: .9em;
    }
`


const Header = () => {
    return (
        <HeaderComponent>
            <HeadingOne variants={HeadingVariants} initial='hidden' animate='visible' transition={{delay:2.2,type:'tween'}} >Hi there, my name is</HeadingOne>
            <HeadingTwo variants={HeadingVariants} initial='hidden' animate='visible' transition={{delay:2.4,type:'tween'}} color='#eaeaea'>Stanley Garbo</HeadingTwo>
            <HeadingThree variants={HeadingVariants} initial='hidden' animate='visible' transition={{delay:2.6,type:'tween'}} color='rgb(190,190,220)'>I Build Mesmerizing Websites</HeadingThree>
            <WhatIDo variants={HeadingVariants} initial='hidden' animate='visible' transition={{delay:2.8,type:'tween'}} >A Front-End Developer who mainly focuses on producing high-quality websites</WhatIDo>
            <Button href='mailto:stanleygarbo@gmail.com' variants={HeadingVariants} initial='hidden' animate='visible' transition={{delay:3,type:'tween'}} padding='15px 30px' shadowTop='5px' margin='50px 0px 0px 0px' >Contact Me</Button>
        </HeaderComponent>
    )
}

export default Header
