import styled from 'styled-components'
import {motion} from 'framer-motion'


export const Container = styled(motion.div)<{WhichSide:string}>`
    position:fixed;
    height:100%;
    width:80px;
    ${props=>props.WhichSide === 'left'?'left:0;':'right:0;'}
    top:0;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    @media (max-width:800px){
        display:none;
    }
`

export const Line = styled.span`
    width:1px;
    height:20vh;
    background:#fff;
`
