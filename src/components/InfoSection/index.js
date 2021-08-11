import React from 'react'
import { Button } from '../Extras/ButtonElement'
import { InfoContainer,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,Column2,ImgWrap,Img} from '../Extras/InfoElements.js'

const InfoSection = ({destination,lightBg,id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,alt,primary,dark,dark2}) => {

    return (
        <> 
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
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
                                {description}
                            </Subtitle>
                            <Subtitle darkText={darkText}>
                                I am a driven and competitive individual who loves solving problems and creating solutions. There's never a moment where I'm not working on a project that challenges me.
                            </Subtitle>
                            <Subtitle darkText={darkText}>
                                When I'm not working, you can find me eating up some delicious food or getting a good workout at the gym.
                            </Subtitle>
                            <BtnWrap>
                                <Button to={destination} smooth={true} spy={true} exact="true" offset={-80} primary={primary ? 1:0} dark = {dark ? 1:0} dark2={dark2 ? 1:0}>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={"https://drive.google.com/uc?export=view&id=1Fzlbh4FKtlqWXK3onr09Qw5akJHy1k7j"} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
