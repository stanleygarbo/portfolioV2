import React from 'react'
import Social from '../Social'
import {Container,Line} from './SideStyledComponents'

const SocialLinks = () => {
    return (
        <Container WhichSide='left'>
            <Social flexDirection='column' />
            <Line />
        </Container>
    )
}

export default SocialLinks
