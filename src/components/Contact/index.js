import React,{useState} from 'react'
import { FaLinkedin,FaGithub} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import { Button } from '../Extras/ButtonElement'
import { InfoContainer,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,Column2,IconWrap1,Icon1,IconWrap2,Icon2,Icon3} from '../Extras/InfoElements'
import {ContactModal} from './ContactModal'

const ContactSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,primary,dark,dark2,height}) => {
    const [showModal,setShowModal]=useState(false);

    const openModal=e=>{
        setShowModal(prev=>!prev);
    }

    const sent = (e) =>{
        setShowModal(prev=>!prev);
        setSuccess(prev=>!prev);
        setTimeout(()=>{
            setSuccess(prev=>!prev);  
        },6000)
    }

    const [success,setSuccess]=useState(false);

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
            <ContactModal showModal={showModal} setShowModal={setShowModal} onEmail={sent}></ContactModal>
                <InfoWrapper height={(height-40).toString()+"px"}>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine darkText={darkText}>
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>
                                {headline}
                            </Heading>
                            <Subtitle darkText={darkText}>
                                {success ? <div style={{color: "#45d0af"}}>Thank you, your message has been sent. I will get back to you as soon as possible.</div>: description}
                            </Subtitle>
                            <BtnWrap>
                                <Button to="/" onClick={openModal} primary={primary ? 1:0} dark = {dark ? 1:0} dark2={dark2 ? 1:0}>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <IconWrap1 showModal={showModal}>
                                <Icon1 href = "https://www.linkedin.com/in/colin-ho99/" target="_blank"><FaLinkedin/></Icon1>
                            </IconWrap1 >
                            <IconWrap2 showModal={showModal}>
                                <Icon2 href =  "mailto:colin.ho99@gmail.com" ><FiMail/></Icon2>
                                <Icon3 href =  "https://github.com/colin-ho" target="_blank"><FaGithub/></Icon3>
                            </IconWrap2>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default ContactSection
