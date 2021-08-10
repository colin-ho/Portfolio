import React from 'react'
import { Button } from '../Extras/ButtonElement'
import { InfoContainer,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,List,LiItem,BtnWrap,Column2} from '../Extras/InfoElements'
import {IconWrap} from './iconElement'

const SkillSection = ({destination,lightBg,id,imgStart,topLine,lightText,headline,darkText,buttonLabel,primary,dark,dark2}) => {
    
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
                            <List darkText={darkText}>
                                <LiItem>Leader</LiItem>
                                <LiItem>Effective Communicator</LiItem>
                                <LiItem>Team Player</LiItem>
                                <LiItem>Critical Thinker</LiItem>
                                <LiItem>English and Mandarin Speaker</LiItem>
                            </List>
                            <BtnWrap>
                                <Button to={destination} smooth={true} spy={true} exact="true" offset={-80} primary={primary ? 1:0} dark = {dark ? 1:0} dark2={dark2 ? 1:0}>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <IconWrap lightBg={lightBg}></IconWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default SkillSection
