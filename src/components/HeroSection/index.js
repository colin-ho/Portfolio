import React,{useState,useEffect} from 'react'
import background from '../../images/bg5.jpg'
import {HeroContainer,HeroBg,Bg,HeroContent,HeroH1,HeroP,HeroH2,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
import{Button}from '../Extras/ButtonElement'
const HeroSection = ({height}) => {
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
        <HeroContainer id = 'home' height={height.toString()+"px"}>
            <HeroBg style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
                <Bg src={background} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, I'm Colin.</HeroH1>
                <HeroH2>Software engineer @ <a href="https://www.eventual.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Eventual</a></HeroH2>
                <HeroP>I'm passionate about building performant and scalable software systems.</HeroP>
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
