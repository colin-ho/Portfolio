import React from 'react'
import { Button } from '../Extras/ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img } from '../Extras/InfoElements.js'
import profile from '../../images/0.jpg'
import { FaAngleDoubleDown } from 'react-icons/fa'

const InfoSection = ({ destination, lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, primary, dark, dark2, height }) => {

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper height={(height - 40).toString() + "px"}>
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
                                    I'm Colin. Currently based in San Francisco as a software engineer at <a href="https://www.eventual.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Eventual</a>, building a multimodal data warehouse for ML/AI, ETL, and analytics. I graduated from <a href="https://www.usc.edu" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>USC</a> with a degree in Computer Science.
                                </Subtitle>
                                <Subtitle darkText={darkText}>
                                    Previously, I did engineering at <a href="https://www.stripe.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Stripe</a>, where I developed systems for revenue share, and <a href="https://www.coinbase.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}> Coinbase</a>, where I worked on international crypto transactions.
                                </Subtitle>
                                <Subtitle darkText={darkText}>
                                    When I'm not working, you can find me trying new and delicious foods, or getting a good workout at the gym.
                                </Subtitle>
                                <BtnWrap>
                                    <Button to={destination} smooth={true} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel} <FaAngleDoubleDown style={{ "marginLeft": 10 }} /></Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={profile} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
