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
                    <NavLogo to="/" onClick={toggleHome}><img src="https://vectr.com/tmp/ctpCdYY0k/fTO8xiYW7.svg?width=220&height=220&select=fTO8xiYW7page0&quality=0.59"alt="" padding-right="100px" width="100" height="56"/></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"smooth={true} spy={true} exact='true' offset={-80} >Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills"smooth={true} spy={true} exact='true' offset={-80} >Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact" smooth={true} spy={true} exact='true' offset={-80} >Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink href="https://drive.google.com/uc?export=view&id=1rWpx465s9uKLLCegrlMQWi1PPjaLDBtI" target="_blank" > View Resume</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}

export default Navbar
