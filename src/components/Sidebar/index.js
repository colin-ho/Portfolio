import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SideBtnWrap,SidebarLink,SidebarRoute,SidebarWrapper,SidebarMenu} from './SidebarElements';

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
                    <SidebarLink to = "experience"onClick = {toggle} offset={-78}>
                        Experience
                    </SidebarLink>
                    <SidebarLink to = "projects"onClick = {toggle}offset={-80}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to = "contact"onClick = {toggle}offset={-78}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href="https://drive.google.com/uc?export=view&id=1rWpx465s9uKLLCegrlMQWi1PPjaLDBtI" target="_blank">
                        View Resume
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
