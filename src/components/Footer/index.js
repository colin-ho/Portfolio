import React from 'react'
import{animateScroll as scroll}from 'react-scroll'
import {FooterContainer,FooterWrap, SocialLogo,WebsiteRights} from './FooterElements'
const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialLogo to="/" onClick={toggleHome}>Back To Top</SocialLogo>
                <WebsiteRights>© {new Date().getFullYear()} | Built and designed by Colin Ho</WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
/*
<SocialIcons>
    <SocialIconLink href="//www.facebook.com" target = "_blank" aria-label="Facebook">
        <FaFacebook/>
    </SocialIconLink>
    <SocialIconLink href="/" target = "_blank" aria-label="Instagram">
        <FaInstagram/>
    </SocialIconLink>
    <SocialIconLink href="/" target = "_blank" aria-label="LinkedIn">
        <FaLinkedin/>
    </SocialIconLink>
</SocialIcons>
*/