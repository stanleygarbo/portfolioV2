import React from 'react'
import styled from 'styled-components'
import {Logo} from './Logo'
import {motion} from 'framer-motion'

const LogoVariants = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1
    },
    exit:{
        opacity:0
    }
}

const LoadContainer = styled(motion.div)`
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    background:rgb(0,11,32);
    z-index:5;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Load = () => {

    return (
        <LoadContainer variants={LogoVariants}  initial='false' animate='false' exit='exit'  >
            <Logo variants={LogoVariants} initial='hidden' animate='visible' exit='exit' >G</Logo>
        </LoadContainer>
    )
}

export default Load
