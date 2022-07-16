import React,{useState,useEffect} from 'react'
import { PopChat } from '../components/chatbot'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/Data/index'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import ContactSection from '../components/Contact'
import ExperienceSection from '../components/Experience/Experience'

const Home = () => {
    const [isOpen,setIsOpen] = useState(false)
    const [height,setHeight]= useState(0)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    const [messages, setMessage] = useState([]);
    
    useEffect(() => {
        setHeight(window.innerHeight)
        fetch('/message').then(res => res.json()).then(data => {
        setMessage(data.message);
        });
    }, []);

    return (
        <>
            <PopChat messages = {messages} get={newmessage => setMessage(currentMessages => [...currentMessages,newmessage])}
            remove={()=>setMessage((messages) => messages.filter((_, i) => i !== messages.length - 1))}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle = {toggle}/>
            <HeroSection height={height}/>
            <InfoSection height={height} {...homeObjOne}/>
            <ExperienceSection height={height} {...homeObjTwo}/>
            <Projects height={height}/>
            <ContactSection height={height} {...homeObjThree}/>
            <Footer/>
        </>
    )
}

export default Home
