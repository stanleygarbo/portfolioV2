import React from 'react'
import styled from 'styled-components'
import Social from './Social'

const StyledFooter = styled.footer`
    width:100%;
    height:200px;
    background:rgb(0,3,20);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const CopyrightText = styled.div`
    color:#fff;
`

const Footer = () => {
    return (
        <StyledFooter>
            <CopyrightText>&copy; Stanley Garbo 2020</CopyrightText>
            <Social flexDirection='row' />
        </StyledFooter>
    )
}

export default Footer