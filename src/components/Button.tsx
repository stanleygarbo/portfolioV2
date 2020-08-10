import styled from 'styled-components'
import {gradient} from './styles/gradient'
import {motion} from 'framer-motion'

export const Button = styled(motion.a)<{padding:string,shadowTop:string,margin:string}>`
    padding:${props=>props.padding};
    cursor:pointer;
    color:#fff;
    border:none;
    ${gradient}
    font-size:1.2em;
    border-radius:100px;
    margin:${props=>props.margin};
    position:relative;
    transition:.3s ease-in-out;
    outline:none;
    text-decoration:none;
    &::before{
        content:'';
        position:absolute;
        top:${props=>props.shadowTop};
        left:0;
        ${gradient}
        width:100%;
        height:100%;
        z-index:-1;
        border-radius:100px;
        filter:blur(10px);
        opacity:0.8;
        transform:scale(.9);
        transition:.3s ease-in-out;
    }
    &:hover{
        transform:scale(1.05);
    }
    &:hover::before{
        transform:scale(0.6) translateY(5px);
    }
`
