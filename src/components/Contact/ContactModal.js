import React,{useState, useRef,useEffect,useCallback} from 'react'
import {useSpring,animated} from 'react-spring'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'

const Background = styled.div`
    width:100%;
    height:100%;
    opacity:100%;
    background:linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    position:absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    top:0;
    
`
const ModalWrapper = styled.div`
    width:768px;
    height:500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    color:#000;
    position:relative;
    @media screen and (max-width:768px){
        width:480px;
    }
    @media screen and (max-width:480px){
        width:360px;
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
const FormContent = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width:480px){
        padding: 10px;
    }
`

const Form = styled.form`
    background:#f7f7f7;
    height: 100%;
    width: 100%;
    z-index:1;
    display: flex;
    flex-direction:column;
    justify-content: center;
    margin:0 auto;
    padding:24px 32px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width:480px){
        padding:32px 32px;
    }
`

const FormH1 = styled.h1`
    margin-bottom:16px;
    color:#000;
    font-size:24px;
    font-weight:600;
    text-align:center;
`

const FormLabel = styled.label`
    font-size:14px;
    margin-bottom:4px;
    font-size:14px;
    color:#000;

`
const FormDetail = styled.input`
    font-size:14px;
    padding:8px 8px;
    margin-bottom: 16px;
    border-radius: 4px;
    border:solid 1px;
`

const FormMessage = styled.textarea`
    border:solid 1px;
    font-size:14px;
    height:160px;
    padding:8px 8px;
    margin-bottom: 32px;
    border-radius: 4px;
`

const FormButton = styled.button`
    background:#344966;
    padding:16px 0;
    border:none;
    width:300px;
    margin-left:auto;
    margin-right:auto;
    border-radius:4px;
    color:#ededed;
    font-size:20px;
    cursor: pointer;
`

export const ContactModal = ({showModal,setShowModal,onEmail})=>{

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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const SubmitHandler = e =>{
        fetch("/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name:name,email:email,message:message
            })
        }).then(data=>{
            console.log(data)
        });

        setName("");
        setEmail("");
        setMessage("");
        onEmail(true);    
    }

    return (
    <>
    {   showModal? (
        <Background ref = {modalRef} onClick={closeModal}>
            <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
                <FormContent>
                    <Form onSubmit={SubmitHandler}>
                        <FormH1>
                            Contact Form
                        </FormH1>
                        <FormLabel>Name</FormLabel>
                        <FormDetail value={name} onChange={e => setName(e.target.value)} type = 'text' required />
                        <FormLabel>Email</FormLabel>
                        <FormDetail value={email} onChange={e => setEmail(e.target.value)} type = 'email' required />
                        <FormLabel>Message</FormLabel>
                        <FormMessage value = {message} onChange={e => setMessage(e.target.value)} type = 'text' required />
                        <FormButton value = "submit" type = 'submit'>Send</FormButton>
                    </Form>
                </FormContent>
                <CloseModalButton aria-label='Close modal' onClick={()=>setShowModal(prev=>!prev)}/>
            </ModalWrapper>
            </animated.div>
        </Background>
    ):null}
    </>
    )
};
