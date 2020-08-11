import React,{ReactNode} from 'react'
import NavBar from './NavBar'
import styled,{createGlobalStyle} from 'styled-components'
import SocialLinks from './sides/SocialLinks'
import Email from './sides/Email'
import Footer from './Footer'
import {gradient} from './styles/gradient'

interface Props{
    children: ReactNode
}

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        margin:0;
        box-sizing:border-box;
        color:#FFF;
        font-family:sans-serif;
    }
    body{
        background:rgb(0,11,32);
        overflow-x:hidden;
    }
    li{
        font-family:Inconsolata,monospace;
    }
    ul{
        margin:0;
        padding:0;
    }
    h1{
        font-family: 'Roboto Mono', monospace;
    }
    h2,h3,p{
        font-family:Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
    }
    span{
        font-family: 'Roboto Mono', monospace;
    }
    span,.glowing__link:hover,.active__link{
        ${gradient}
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
    .active__link{
        font-weight:900;
    }
`

const Main = styled.main`
    margin:0 auto;
    max-width:1200px;
    min-width:340px;
    padding: 0px 100px;
    @media (max-width:800px){
        padding: 0px 40px;
    }
`

const Root = styled.div`
    width:100%;
`

const Layout = ({children}:Props) => {
    return (
        <Root>
            <GlobalStyle/>
            <NavBar />
            <SocialLinks/>
            <Email/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </Root>
    )
}

export default Layout
