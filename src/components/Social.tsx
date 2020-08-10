import React from 'react'
import styled from 'styled-components'

interface Props {
    flexDirection:string,
}

const SocialContainer = styled.div<{flexDirection:string}>`
    display:flex;
    flex-direction:${props=>props.flexDirection};
`

const Social = ({flexDirection}:Props) => {
    return (
        <SocialContainer flexDirection={flexDirection}>
            <GithubSVG/>
            <LinkedInSVG/>
            <TwitterSVG/>
            <InstagramSVG/>
        </SocialContainer>
    )
}

const SVGContainer = styled.div`
    width:25px;
    height:25px;
    fill:#fff;
    margin:10px 0px;
    &:hover{
        transform:scale(1.05);
    }
`

export const GithubSVG = () =>
    <SVGContainer  >
        <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
            x="0px" y="0px" viewBox="0 0 2350 2314.8" >
        <path d="M1175,0C525.8,0,0,525.8,0,1175c0,552.2,378.9,1010.5,890.1,1139.7c-5.9-14.7-8.8-35.3-8.8-55.8v-199.8H734.4
            c-79.3,0-152.8-35.2-185.1-99.9c-38.2-70.5-44.1-179.2-141-246.8c-29.4-23.5-5.9-47,26.4-44.1c61.7,17.6,111.6,58.8,158.6,120.4
            c47,61.7,67.6,76.4,155.7,76.4c41.1,0,105.7-2.9,164.5-11.8c32.3-82.3,88.1-155.7,155.7-190.9c-393.6-47-581.6-240.9-581.6-505.3
            c0-114.6,49.9-223.3,132.2-317.3c-26.4-91.1-61.7-279.1,11.8-352.5c176.3,0,282,114.6,308.4,143.9c88.1-29.4,185.1-47,284.9-47
            c102.8,0,196.8,17.6,284.9,47c26.4-29.4,132.2-143.9,308.4-143.9c70.5,70.5,38.2,261.4,8.8,352.5c82.3,91.1,129.3,202.7,129.3,317.3
            c0,264.4-185.1,458.3-575.7,499.4c108.7,55.8,185.1,214.4,185.1,331.9V2256c0,8.8-2.9,17.6-2.9,26.4
            C2021,2123.8,2350,1689.1,2350,1175C2350,525.8,1824.2,0,1175,0L1175,0z"/>
        </svg>
    </SVGContainer>

const LinkedInSVG = () =>
    <SVGContainer  >
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
             viewBox="0 0 430.117 430.117" >
            <path  id="LinkedIn" d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707
                c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21
                v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824
                C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463
                c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z
                M5.477,420.56h92.184v-277.32H5.477V420.56z"/>
        </svg>
    </SVGContainer>

const TwitterSVG = () =>
    <SVGContainer>

        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
            viewBox="0 0 612 612"  >
            <path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411
                c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513
                c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101
                c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104
                c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194
                c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485
                c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"/>
        </svg>
    </SVGContainer>

const InstagramSVG =() =>
    <SVGContainer >
        <svg xmlns="http://www.w3.org/2000/svg"   
        viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" 
        strokeLinejoin="round">
            <rect x="2" y="2" width="20" 
                height="20" rx="5" ry="5">
            </rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z">
            </path>
            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
        </svg>
    </SVGContainer>

export const ArrowSVG = () =>
    <SVGContainer>
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 194.818 194.818">
            <g>
                <path fill="#fff" d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z">
                </path>
                <path fill="#fff" d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z">
                </path>
            </g>
        </svg>
    </SVGContainer>

export const MailSVG = () =>
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 241.061 241.061" >
        <path fill="#1CCAD8" d="M198.602,70.402l-78.063,68.789l-78.08-68.79c-3.109-2.739-7.848-2.438-10.586,0.669c-2.737,3.108-2.439,7.847,0.67,10.586
            l83.039,73.159c1.417,1.248,3.188,1.872,4.958,1.872s3.542-0.624,4.959-1.873l83.022-73.159c3.107-2.738,3.406-7.478,0.668-10.586
            C206.449,67.964,201.711,67.664,198.602,70.402z"/>
        <path fill="#1CCAD8" d="M218.561,38.529H22.5c-12.406,0-22.5,10.093-22.5,22.5v119.002c0,12.407,10.094,22.5,22.5,22.5h196.061
            c12.406,0,22.5-10.093,22.5-22.5V61.029C241.061,48.623,230.967,38.529,218.561,38.529z M226.061,180.031
            c0,4.135-3.364,7.5-7.5,7.5H22.5c-4.136,0-7.5-3.365-7.5-7.5V61.029c0-4.135,3.364-7.5,7.5-7.5h196.061c4.136,0,7.5,3.365,7.5,7.5
            V180.031z"/>
    </svg>


export default Social
