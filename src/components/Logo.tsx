import styled from 'styled-components'
import {gradient} from './styles/gradient'
import {motion} from 'framer-motion'

export const Logo = styled(motion.p)`
    letter-spacing:5px;
    font-family: 'Monoton', cursive;
    font-size:40px;
    ${gradient}
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`
