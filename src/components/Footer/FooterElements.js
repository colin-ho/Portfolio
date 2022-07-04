import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color:#050d17;
`

export const FooterWrap = styled.div`
    padding: 66px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    max-width:1100px;
    margin: 0 auto;
    @media screen and (max-width:820px){
        flex-direction:column;
    }
`

export const SocialLogo = styled(Link)`
    color: #ededed;
    justify-self:start;
    cursor:pointer;
    text-decoration:none;
    font-size:1.3rem;
    display:flex;
    align-items:center;
    font-weight:bold;
`

export const WebsiteRights= styled.small`
    @media screen and (max-width:820px){
        margin-top: 10px;
    }
    text-align: center;
    color:#ededed;
`

export const SocialIcons = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:240px;

`

export const SocialIconLink = styled.a`
    color:#ededed;
    font-size:24px;
`