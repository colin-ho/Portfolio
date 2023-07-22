import React, { useState } from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { Button } from '../Extras/ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, List, LiItem } from '../Extras/InfoElements.js'
import { Bar, Experience, ExperienceBtnWrap1, ExperienceBtnWrap2, ExperienceContainer, ExperienceWrapper } from './ExperienceElements'

const ExperienceSection = ({ destination, lightBg, id, imgStart, topLine, lightText, darkText, buttonLabel, primary, dark, dark2,height }) => {

    const [company, setCompany] = useState("Stripe")

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper height={(height-40).toString()+"px"}>
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
                                <Experience onClick={() => setCompany("Stripe")} clicked={company === "Stripe"}>
                                        <Bar clicked={company === "Stripe"} />
                                        Stripe
                                    </Experience>
                                    <Experience onClick={() => setCompany("Coinbase")} clicked={company === "Coinbase"}>
                                        <Bar clicked={company === "Coinbase"} />
                                        Coinbase
                                    </Experience>
                                    <Experience onClick={() => setCompany("Carbonlink")} clicked={company === "Carbonlink"}>
                                        <Bar clicked={company === "Carbonlink"} />
                                        Carbonlink
                                    </Experience>
                                    <Experience onClick={() => setCompany("Taiger")} clicked={company === "Taiger"}>
                                        <Bar clicked={company === "Taiger"} />
                                        TAIGER
                                    </Experience>
                                </ExperienceContainer>
                                <ExperienceBtnWrap1>
                                    <BtnWrap>
                                        <Button to={destination} smooth={true} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel} <FaAngleDoubleDown style={{ "marginLeft": 10 }} /></Button>
                                    </BtnWrap>
                                </ExperienceBtnWrap1>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            {company === "Stripe" ? <Stripe darkText={darkText}/> 
                                : company === "Coinbase" ? <Coinbase darkText={darkText} />
                                    : company === "Carbonlink" ? <Carbonlink darkText={darkText} />
                                            : <Taiger darkText={darkText} />}
                            <ExperienceBtnWrap2>
                                <BtnWrap>
                                    <Button to={destination} smooth={true} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel} <FaAngleDoubleDown style={{ "marginLeft": 10 }} /></Button>
                                </BtnWrap>
                            </ExperienceBtnWrap2>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

const Stripe = ({ darkText }) => {
    return (
        <ExperienceWrapper>
            <TopLine darkText={darkText}>
                Software Engineer Intern <a style={{ color: "#45d0af", textDecoration: "none" }} rel="noreferrer" href="https://www.stripe.com/" target="_blank">@ Stripe</a>
            </TopLine>
            <Subtitle darkText={darkText}>
                May 2023 - August 2023
            </Subtitle>
            <List darkText={darkText}>
                <LiItem>Designed and optimized Spark jobs in Scala and Python to export transactional data for reporting and user inquiries.</LiItem>
                <LiItem>Implemented a feature to pay separate accounts, automating the billing of several manually billed users.</LiItem>
            </List>
            <Subtitle darkText={darkText}>
                <span style={{ color: "#45d0af" }}>Skills:</span> Scala, Spark, Java, Python, Ruby
            </Subtitle>
        </ExperienceWrapper>
    )
}

const Coinbase = ({ darkText }) => {
    return (
        <ExperienceWrapper>
            <TopLine darkText={darkText}>
                Software Engineer Intern <a style={{ color: "#45d0af", textDecoration: "none" }} rel="noreferrer" href="https://www.coinbase.com/" target="_blank">@ Coinbase</a>
            </TopLine>
            <Subtitle darkText={darkText}>
                June 2022 - August 2022
            </Subtitle>
            <List darkText={darkText}>
                <LiItem>Built an integration and E2E testing framework and test suite generator in Go for GRPC microservices </LiItem>
                <LiItem>Developed a microservice to facilitate data collection for cross-border crypto transactions.</LiItem>
            </List>
            <Subtitle darkText={darkText}>
                <span style={{ color: "#45d0af" }}>Skills:</span> Go, AWS, GRPC, Docker, BuildKite
            </Subtitle>
        </ExperienceWrapper>
    )
}

const Carbonlink = ({ darkText }) => {
    return (
        <ExperienceWrapper>
            <TopLine darkText={darkText}>
                Software Developer <a style={{ color: "#45d0af", textDecoration: "none" }} rel="noreferrer" href="https://www.carbonlink.io/" target="_blank">@ Carbonlink</a>
            </TopLine>
            <Subtitle darkText={darkText}>
                May 2022 - Jan 2023
            </Subtitle>
            <List darkText={darkText}>
                <LiItem>Implemented a REST API in Express and Typescript to purchase carbon offset tokens including KLIMA and MCO2. </LiItem>
                <LiItem>Designed an authentication and user management system using Passport.js, PostgreSQL, and AWS S3. </LiItem>
            </List>
            <Subtitle darkText={darkText}>
                <span style={{ color: "#45d0af" }}>Skills:</span> TypeScript, React, NodeJS, Express, AWS, PostgreSQL
            </Subtitle>
        </ExperienceWrapper>
    )
}

const Taiger = ({ darkText }) => {
    return (
        <ExperienceWrapper>
            <TopLine darkText={darkText}>
                Software Engineer Intern <a style={{ color: "#45d0af", textDecoration: "none" }} rel="noreferrer" href="https://taiger.com/" target="_blank">@ TAIGER</a>
            </TopLine>
            <Subtitle darkText={darkText}>
                October - December 2021
            </Subtitle>
            <List darkText={darkText}>
                <LiItem>Produced lead generation tools including an ROI calculator and data management evaluator using Javascript and HubSpot API. </LiItem>
                <LiItem>Built an ontology simulator using D3.js to visualize the
                    document processing capabilities of TAIGER's proprietary NLP technology.</LiItem>
            </List>
            <Subtitle darkText={darkText}>
                <span style={{ color: "#45d0af" }}>Skills:</span> Javascript, D3.js, HTML, CSS
            </Subtitle>
        </ExperienceWrapper>
    )
}

export default ExperienceSection
