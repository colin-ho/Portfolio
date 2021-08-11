import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SideBtnWrap,SidebarLink,SidebarRoute,SidebarWrapper,SidebarMenu} from './SidebarElements';
import resume from '../../files/Colin Ho Resume.pdf'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = "about"onClick = {toggle}offset={-80}>
                        About
                    </SidebarLink>
                    <SidebarLink to = "projects"onClick = {toggle} offset={-78}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to = "skills"onClick = {toggle}offset={-80}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to = "contact"onClick = {toggle}offset={-78}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href={resume} target="_blank">
                        View Resume
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
