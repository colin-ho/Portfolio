import React,{useRef,useEffect,useCallback} from 'react'
import {useSpring,animated} from 'react-spring'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import Icon1 from '../../videos/3.gif'
import Icon2 from '../../videos/2.gif'
import Icon3 from '../../videos/1.gif'

const Background = styled.div`
    width:100%;
    height:calc(100vh - 80px);
    opacity:100%;
    margin-top:-18px;
    background:linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    position:absolute;
    display:flex;
    padding: 0 40px 0 40px;
    justify-content: center;
    z-index: 9;
    align-items: center;
    @media screen and (max-width:1020px){
        height:1144px;
        
    }
    @media screen and (max-width:768px){
        height:1560px;
        align-items: flex-start;
    }
    @media screen and (max-width:480px){
        height:1548px;
        align-items: flex-start;
    }
    
`
const ModalWrapper = styled.div`
    width:728px;
    height:fit-content;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background:#ededed;
    color:#000;
    display:grid;
    grid-template-columns: 1fr 1fr;
    position:relative;
    z-index: 10;
    border-radius: 10px;
    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
        margin: 200px 0px 200px 0px;
        top:150px;
        bottom:150px;
        position:sticky;
        width:480px;
    }
    @media screen and (max-width:480px){
        width:360px;
    }
    
`

const ModalImg = styled.img`
    padding:20px 0;
    margin-top:auto;
    margin-bottom: auto;
    margin-left:45px;
    -o-object-fit:cover;
    object-fit:cover;
    @media screen and (max-width:768px){
        margin: 20px auto -40px auto;
        width:40%;
        border-radius: 10%;
    }
    @media screen and (max-width:480px){
        width:60%;
    }
    width:75%;
    border-radius: 8%;
`

const ModalContent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color:#141414;
    margin-right:40px;
    margin-top:30px;
    p{
        margin-bottom:1rem;
        text-align: center;
    }

    a{
        margin-bottom: 30px;
        padding:10px 24px;
        background:#141414;
        color:#ededed;
        border:none;
        cursor:pointer;
    }
    @media screen and (max-width:768px){
        padding-left:10px;
        padding-right:10px;
        margin-left: auto;
        margin-right:auto;
    }
`

const CloseModalButton = styled(MdClose)`
    cursor:pointer;
    position:absolute;
    top:20px;
    right:20px;
    width:32px;
    height:32px;
    padding:0;
    z-index: 10;
`

export const ProjectModal = ({showModal,setShowModal,data})=>{

    var img,title,para,link;

    if (data===1){
        img=Icon1;
        title="Portfolio";
        if(window.matchMedia('only screen and (max-width: 768px)').matches){
            para="My personal portfolio website built using React, Styled Components, and Flask.";
        } else{
            para="My personal portfolio website built using React, Styled Components, and Flask. Features an About Me, Projects, Skills, and Contact page as well as an incorporated AI chatbot to assist visitors. A built in email service is also provided.";
        }
        link="https://github.com/colin-ho/Portfolio";
        
    } else if (data===2){
        img=Icon2;
        title="BetterRadio";
        if(window.matchMedia('only screen and (max-width: 768px)').matches){
            para="A recommendation focused web music player powered by Spotify Web API, React, and Django.";
        } else{
            para="A recommendation focused web music player powered by Spotify Web API. This app allows users to customise, create, and discover new playlists based on their favorite artists and genres. Built with React and Django.";
        }
        link="https://github.com/colin-ho/BetterRadio";
    } else if (data===3){
        img=Icon3;
        title="Chatbot";
        if(window.matchMedia('only screen and (max-width: 768px)').matches){
            para="AI and pattern-based chatbot built with Tensorflow to enhance user experience on my portfolio.";

        } else{
            para="Hybrid AI and pattern-based chatbot to enhance user experience for my personal website. Utilizes NLP and Deep Learning techniques to accurately recognize user intents and determine appropriate responses.";
        }
        link="https://github.com/colin-ho/Chatbot"
    }

    const modalRef = useRef()

    const animation = useSpring({
        config:{
            duration:250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)`:`translateY(-100%)`
    })

    const closeModal = e =>{
        if(modalRef.current===e.target){
            setShowModal(false);
        }
    }

    const escKeyPress = useCallback(e=>{
        if (e.key==='Escape' && showModal){
            setShowModal(false);
        }
    },[setShowModal,showModal])

    useEffect(()=>{
        document.addEventListener('keydown',escKeyPress);
        return ()=>document.removeEventListener('keydown',escKeyPress)
    },[escKeyPress])

    return (
    <>
    {   showModal? (
        <Background ref = {modalRef} onClick={closeModal}>
            {matchMedia('only screen and (max-width: 768px)').matches ?
            <ModalWrapper showModal={showModal}>
                <ModalImg src={img}/>
                <ModalContent>
                    <h2>{title}</h2>
                    <p>{para}</p>
                    <a href={link} rel="noopener noreferrer" target="_blank">Click for source</a>
                </ModalContent>
                <CloseModalButton aria-label='Close modal' onClick={()=>setShowModal(prev=>!prev)}/>
            </ModalWrapper>
            :
            <animated.div style={animation}>
                <ModalWrapper showModal={showModal}>
                    <ModalImg src={img}/>
                    <ModalContent>
                        <h1>{title}</h1>
                        <p>{para}</p>
                        <a href={link} rel="noopener noreferrer" target="_blank">Click for source</a>
                    </ModalContent>
                    <CloseModalButton aria-label='Close modal' onClick={()=>setShowModal(prev=>!prev)}/>
                </ModalWrapper>
            </animated.div>
            }
        </Background>
    ):null}
    </>
    )
};
