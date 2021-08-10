import React,{useState,useEffect} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroH2,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
import{Button}from '../Extras/ButtonElement'
const HeroSection = () => {
    const [hover,setHover]= useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <HeroContainer id = 'home'>
            <HeroBg style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, I'm Colin.</HeroH1>
                <HeroH2> USC student. Aspiring software engineer. </HeroH2>
                <HeroP>I built this portfolio website to showcase my work and skills. Hit the button below to get started.</HeroP>
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark = "true" smooth={true} spy={true} exact='true' offset={-80}>
                        About me{hover ? <ArrowForward/>: <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
