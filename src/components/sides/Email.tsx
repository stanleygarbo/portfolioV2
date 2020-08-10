import React from 'react'
import {Container,Line} from './SideStyledComponents'
import styled from 'styled-components'

const Link = styled.a`
    transform: translate(0px,-90px) rotate(90deg);
    text-decoration:none;
    transition:.3s ease-in-out;
`

const Email = () => {
    return (
        <Container WhichSide = 'right'>
            <Link className='glowing__link' href='mailto:stanleygarbo@gmail.com'>stanleygarbo@gmail.com</Link>
            <Line/>
        </Container>
    )
}

export default Email
