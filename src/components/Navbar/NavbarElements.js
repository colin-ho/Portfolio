import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav})=> (scrollNav ? '#050d17':'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top : 0;
    z-index: 10;
    transition: 0.4s all ease;
    @media screen and (max-width: 960px){
        /*transition: 0.8s all ease;*/
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
    color: #ededed;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.8rem;
    display:flex;
    align-items:center;
    margin-right:30px;
    font-weight:bold;
    text-decoration:none;
`;

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color:#ededed;
    }
`;
export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style: none;
    text-align:center;

    @media screen and (max-width:768px){
        display:none;
    }
`;

export const NavItem = styled.li`
    height:80px;
`;

export const NavLinks = styled(LinkS)`
    color: #ededed;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1.5rem;
    height:100%;
    cursor: pointer;

    &.active{
        border-bottom:3px solid #45d0af;
    }
`;

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;
    margin-right:0px;
    
    @media screen and (max-width:768px){
        display:none;
    }
`;

export const NavBtnLink = styled.a`
    border-radius:10px;
    background: #B4CDED;
    white-space: nowrap;
    padding:10px 22px;
    color: #0D1821;
    font-size: 16px;
    font-weight:600;
    outline:none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    line-height: 22px;

    &:hover{
        transition:all 0.2s ease-in-out;
        background:#ededed;
        color: #0D1821;
    }
`;