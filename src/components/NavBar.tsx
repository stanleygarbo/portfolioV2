import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {Logo} from './Logo'
import {motion,AnimatePresence} from 'framer-motion'
import {gradient} from './styles/gradient'

const Nav = styled.nav<{showNavBackground:boolean}>`
    width:100%;
    height:${props=>props.showNavBackground?'75px':'90px'};
    background:${props=>props.showNavBackground?'rgb(0,11,32)':'transparent'};
    box-shadow:${props=>props.showNavBackground?'0px 0px 10px #00000060':'none'};
    top:0;
    left:0;
    position:fixed;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding:0px 30px;
    z-index:3;
    transition:.3s ease-in-out;
`

const HamburgerContainer=styled.div`
    width:50px;
    height:50px;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    justify-content:center;
    z-index:4;
`

const HamburgerLine = styled.div<{slant:boolean,angle:string,width:string}>`
    width:${props=>props.slant? '50px' : props.width  };
    height:2px;
    ${gradient}
    transition:.3s ease-in-out;
    transform:rotate(${props=>props.slant && props.angle});
    margin: ${props=>props.slant ? '-1px 0px' : '5px 0px'};
`

const Menu = styled(motion.div)`
    width:100%;
    height:100%;
    position:fixed;
    background:rgb(10,21,42);
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
`

const MenuVariants = {
    hidden:{
        opacity:0,
    },
    visible:{
        opacity:1,
        transition: {
            when: "beforeChildren"
        }
    },
    exit:{
        opacity:0,
        transition: {
            when: "afterChildren"
        }
    }
}

const NavBar = () => {

    const [windowWidth,setwindowWidth] = useState<number>(0)
    const [openMenu,setOpenMenu] = useState<boolean>(false)
    const [showNavBackground,setShowNavBackground] = useState<boolean>(false)

    useEffect(()=>{
        window.addEventListener('resize',updateWindowSize)
        updateWindowSize()
        return ()=> window.removeEventListener('resize',updateWindowSize)
    },[])

    useEffect(()=>{
        window.addEventListener('scroll',scrolled)
        return ()=> window.addEventListener('scroll',scrolled)
    },[])

    useEffect(()=>{
        if(openMenu){
            document.body.style.overflowY = 'hidden'    
        }
        else{
            document.body.style.overflowY = 'scroll'    
        }
    },[openMenu])

    const scrolled = () =>{
        setShowNavBackground(window.scrollY > 40)
    }

    const updateWindowSize = () =>{
        setwindowWidth(window.innerWidth)
        if(window.innerWidth >= 740 ){
            document.body.style.overflowY = 'scroll'    
        }
    }

    return (
        <Nav showNavBackground={showNavBackground}>
            <Logo>G.</Logo>
            {windowWidth<=740 ?
                <HamburgerContainer onClick={()=>setOpenMenu(!openMenu)}>
                    <HamburgerLine slant={openMenu} angle='-45deg' width='50px'></HamburgerLine>
                    <HamburgerLine slant={openMenu} angle='45deg' width='30px'></HamburgerLine>
                </HamburgerContainer>
                :    
                <Links flexDirection='row' animate={false} />
            }
            <AnimatePresence>
                {windowWidth<=740 && openMenu &&
                    <Menu variants={MenuVariants} initial={'hidden'} animate={'visible'} exit='exit' >
                        <Links flexDirection='column' animate={true} />
                    </Menu>
                }
            </AnimatePresence>
        </Nav>
    )
}

const UnorderedList = styled.ul<{flexDirection:string}>`
    display:flex;
    list-style-type:none;
    flex-direction:${props=>props.flexDirection};
    color:${props=>props.color};
`

const List = styled(motion.li)`
    margin: 0px 10px 0px 0px;
    padding:5px 10px;
    @media (max-width:740px){
        margin: 30px 0px;
    }
`


const StyledSpan = styled.span`
    font-size:20px;
`

const links = [
    {name:'Home',href:'/'},
    {name:'Projects',href:'/projects'},
    {name:'Contact',href:'/contact'},
] 

interface LinkProps{
    flexDirection: string,
    animate:boolean
}

const LinkVariants = {
    hidden:{
        opacity:0,
        y:100
    },
    visible:{
        opacity:1,
        y:0
    },
    exit:{
        opacity:0,
        transition:{
            delay:0,
            duration:1
        }
    }
}

const Links = ({flexDirection,animate}:LinkProps) =>{
    const LinkStyle = {
        textDecoration:'none',
        margin: '0px 0px 0px 20px',
    }

    return(
        <UnorderedList flexDirection={flexDirection} >
            {links.map((link,index)=>
                <List key={index} variants={animate && LinkVariants}  initial='hidden' animate='visible' exit='exit' transition={{delay:index-0.8*index,type:'tween'}} >
                    <Link className='glowing__link' activeClassName='active__link' to={link.href} style={LinkStyle} ><StyledSpan >0{index+1}. </StyledSpan>{link.name}</Link>
                </List>
            )}
            <List variants={animate && LinkVariants}  initial='hidden' animate='visible' exit='exit' transition={{delay:.6,type:'tween'}} >
                <a style={LinkStyle} target='blank' className='glowing__link' href='https://drive.google.com/file/d/1h974XWPPqDDCvjm_7Lh1jdLPfZ14pOFO/view?usp=sharing'><StyledSpan >04. </StyledSpan>Resume</a>
            </List>
        </UnorderedList>
    )
}

export default NavBar
