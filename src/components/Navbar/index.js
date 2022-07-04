import React,{useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import {NavBtn,NavBtnLink,Nav, NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav]=useState(false)

    const changeNav=()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[]);

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color:'#ededed'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}><img src="https://drive.google.com/uc?export=view&id=1DWMy5TPmlQurKaUzoYXc-0JNWsaLw6y9"alt="" width="65" height="70"/></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experience" smooth={true} spy={true} exact='true' offset={-80} >Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"smooth={true} spy={true} exact='true' offset={-80} >Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact" smooth={true} spy={true} exact='true' offset={-80} >Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink href="https://drive.google.com/uc?export=view&id=1rWpx465s9uKLLCegrlMQWi1PPjaLDBtI" target="_blank" >Resume</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}

export default Navbar
