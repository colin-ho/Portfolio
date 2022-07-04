import React, { useState } from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { Button } from '../Extras/ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2,List, LiItem } from '../Extras/InfoElements.js'
import { Bar, Experience, ExperienceContainer, ExperienceWrapper} from './ExperienceElements'

const ExperienceSection = ({ destination, lightBg, id, imgStart, topLine, lightText, darkText,  buttonLabel,  primary, dark, dark2 }) => {

    const [company, setCompany] = useState("Coinbase")

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
                                    I've worked at
                                </Heading>
                                <ExperienceContainer>
                                    <Experience onClick={() => setCompany("Coinbase")} clicked={company === "Coinbase"}>
                                        <Bar clicked={company === "Coinbase"} />
                                        Coinbase
                                    </Experience>
                                    <Experience onClick={() => setCompany("CarbonLink")} clicked={company === "CarbonLink"}>
                                        <Bar clicked={company === "CarbonLink"} />
                                        CarbonLink
                                    </Experience>
                                    <Experience onClick={() => setCompany("PunchCard")} clicked={company === "PunchCard"}>
                                        <Bar clicked={company === "PunchCard"} />
                                        Punchcard
                                    </Experience>
                                    <Experience onClick={() => setCompany("Taiger")} clicked={company === "Taiger"}>
                                        <Bar clicked={company === "Taiger"} />
                                        TAIGER
                                    </Experience>
                                </ExperienceContainer>
                                <BtnWrap>
                                    <Button to={destination} smooth={true} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel} <FaAngleDoubleDown style={{"margin-left":10}}/></Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            {company === "Coinbase" ? <Coinbase darkText={darkText} />
                                : company === "CarbonLink" ? <CarbonLink darkText={darkText} />
                                    : company === "PunchCard" ? <PunchCard darkText={darkText} />
                                        : <Taiger darkText={darkText} />}
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

const Coinbase = ({ darkText }) => {
    return (
        <ExperienceWrapper>
            <TopLine darkText={darkText}>
                Software Engineer Intern <a style={{ color: "#45d0af", textDecoration: "none" }} rel="noreferrer" href="https://www.coinbase.com/" target="_blank">@ Coinbase</a>
            </TopLine>
            <Subtitle darkText={darkText}>
                June - August 2022
            </Subtitle>
            <List darkText={darkText}>
                <LiItem>Building a Go testing framework to streamline integration and end-to-end testing in CI pipelines. </LiItem>
                <LiItem>Developing a microservice to facilitate cross-border peer to peer crypto transactions.</LiItem>
            </List>
            <Subtitle darkText={darkText}>
                <span style={{ color: "#45d0af" }}>Skills:</span> Go, Software Engineering, QA Testing
            </Subtitle>
        </ExperienceWrapper>
    )
}

const CarbonLink = ({ darkText }) => {
    return (
        <ExperienceWrapper>
            <TopLine darkText={darkText}>
                Software Developer <a style={{ color: "#45d0af", textDecoration: "none" }} rel="noreferrer" href="https://www.carbonlink.io/" target="_blank">@ CarbonLink</a>
            </TopLine>
            <Subtitle darkText={darkText}>
                May 2022 - Present
            </Subtitle>
            <List darkText={darkText}>
                <LiItem>Constructing a carbon token exchange with NodeJS, Express, and PrimeTrust API. </LiItem>
                <LiItem>Integrating Amazon RDS to faciliate scalable data storage. </LiItem>
            </List>
            <Subtitle darkText={darkText}>
                <span style={{ color: "#45d0af" }}>Skills:</span> TypeScript, React, NodeJS, Express, AWS, PostgreSQL
            </Subtitle>
        </ExperienceWrapper>
    )
}

const PunchCard = ({ darkText }) => {
    return (
        <ExperienceWrapper>
            <TopLine darkText={darkText}>
                Co-founder + Developer <a style={{ color: "#45d0af", textDecoration: "none" }} rel="noreferrer" href="https://www.punchcardapp.com/" target="_blank">@ Punchcard</a>
            </TopLine>
            <Subtitle darkText={darkText}>
                December 2021 - May 2022
            </Subtitle>
            <List darkText={darkText}>
                <LiItem>Developed a React Native app that allows customers to discover and purchase subscriptions from local businesses. </LiItem>
                <LiItem>Constructed a REST API with NodeJS, Firebase, and Stripe
                    to handle authentication, database, and payment processing.</LiItem>
            </List>
            <Subtitle darkText={darkText}>
                <span style={{ color: "#45d0af" }}>Skills:</span> Typescript, React Native, NodeJS, Firebase, Stripe
            </Subtitle>
        </ExperienceWrapper>
    )
}

const Taiger = ({ darkText }) => {
    return (
        <ExperienceWrapper>
            <TopLine darkText={darkText}>
                Front-end Engineer Intern <a style={{ color: "#45d0af", textDecoration: "none" }} rel="noreferrer" href="https://taiger.com/" target="_blank">@ TAIGER</a>
            </TopLine>
            <Subtitle darkText={darkText}>
                October - December 2021
            </Subtitle>
            <List darkText={darkText}>
                <LiItem>Produced an ROI calculator and data
                    management evaluator using Javascript and HubSpot API. </LiItem>
                <LiItem>Built an ontology simulator using D3.js to visualize the
                    document processing capabilities of TAIGER’s proprietary NLP technology.</LiItem>
            </List>
            <Subtitle darkText={darkText}>
                <span style={{ color: "#45d0af" }}>Skills:</span> Javascript, D3.js, HTML, CSS
            </Subtitle>
        </ExperienceWrapper>
    )
}

export default ExperienceSection
