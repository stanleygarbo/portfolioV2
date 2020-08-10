import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

interface Props{
    height:string
}

const ParticlesContainer = styled.div<{height:string}>`
    top:0;
    left:0;
    width:1200px;
    height:${props=>props.height};
    position:absolute;
`

const ParticlesWrapper = styled.div`
    position:absolute;
    width:100%;
    height:100vh;
    overflow:hidden;
    top:0;
    left:0;
    z-index:-1;
`

const ParticlesComponent = ({height}:Props) => {
    return (
        <ParticlesWrapper>
            <ParticlesContainer height={height}>
                <Particles 
                    params={{
                        "particles": {
                            "number": {
                                "value": 30
                            },
                        },
                    }}
                />
            </ParticlesContainer>
        </ParticlesWrapper>
    )
}

export default ParticlesComponent
