import React,{useState} from 'react'
import {ProjectsContainer,ProjectsH1,ProjectsWrapper,ProjectsCard,ProjectsIcon,ProjectsH2,ProjectsP} from './ProjectsElements'
import{BtnWrap} from '../../components/Extras/InfoElements'
import {ProjectModal}from './ProjectModal.js'
import { Button } from '../Extras/ButtonElement'
import {FaAngleDoubleDown} from 'react-icons/fa'
const Projects = () => {
    const [showModal,setShowModal]=useState(false);
    const [data,setData]=useState(0);

    const openModal=(i)=>{
        setShowModal(prev=>!prev);
        setData(i);
    }

    return (
        <>
        <ProjectsContainer id="projects">
            <ProjectModal showModal={showModal} setShowModal={setShowModal} data={data}></ProjectModal>
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard onClick={()=> openModal(1)} style={{background:'#344966'}}>
                    <ProjectsIcon src="https://drive.google.com/uc?export=view&id=1kT_-n9h8RE5oP-815yjjMfVLeBNqC2bG"/>
                    <ProjectsH2 style={{color:'#ededed'}}>Portfolio</ProjectsH2>
                    <ProjectsP style={{color:'#ededed'}}>Personal website using React and Flask</ProjectsP>
                </ProjectsCard>
                <ProjectsCard onClick={()=> openModal(2)} style={{background:'#ededed'}}>
                    <ProjectsIcon src="https://drive.google.com/uc?export=view&id=1HGomef6h3qw0OvQ9_Ra4GkG145IwiRBk"/>
                    <ProjectsH2 >BetterRadio</ProjectsH2>
                    <ProjectsP >Recommendation focused web music player</ProjectsP>
                </ProjectsCard>
                <ProjectsCard onClick={()=> openModal(3)} style={{background:'#344966'}}>
                    <ProjectsIcon src="https://drive.google.com/uc?export=view&id=1xK0s62BNeOPMnF5ZDFXVtJFTQPvjt_nW"/>
                    <ProjectsH2 style={{color:'#ededed'}}>Chatbot</ProjectsH2>
                    <ProjectsP style={{color:'#ededed'}}>Deep-learning powered chatbot</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
            <BtnWrap style={{'marginTop':'25px'}}>
                <Button style ={{'width':'100px'}}to='skills' smooth="true" spy={true} exact="true" offset={-80} primary="1" dark = "0" dark2="0"><FaAngleDoubleDown/></Button>
            </BtnWrap>
        </ProjectsContainer>
        </>
    )
}

export default Projects