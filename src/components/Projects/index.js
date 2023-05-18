import React, { useState } from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
} from "./ProjectsElements";
import { BtnWrap, TopLine } from "../../components/Extras/InfoElements";
import { ProjectModal } from "./ProjectModal.js";
import { Button } from "../Extras/ButtonElement";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import portal from "../../images/portal.png";
import short_url from "../../images/short_url.png";
import compiler from "../../images/compiler.png";
import { FaAngleDoubleDown } from "react-icons/fa";

const Projects = ({ height }) => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(0);

  const openModal = (i) => {
    setShowModal((prev) => !prev);
    setData(i);
  };

  return (
    <ProjectsContainer
      id="projects"
      showModal={showModal}
      height={(height - 40).toString() + "px"}
    >
      <ProjectModal
        showModal={showModal}
        setShowModal={setShowModal}
        data={data}
        height={(height - 40).toString() + "px"}
      ></ProjectModal>
      <TopLine darkText={true}>My Projects</TopLine>
      <ProjectsH1>Stuff I've built</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard
          onClick={() => openModal(1)}
          style={showModal ? { opacity: 0.5 } : { opacity: 1 }}
        >
          <ProjectsIcon src={img1} />
          <div>
            <ProjectsH2 style={{ color: "#fff" }}>Punchcard</ProjectsH2>
            <ProjectsP style={{ color: "#ededed" }}>
              Subscription app for local businesses
            </ProjectsP>
          </div>
        </ProjectsCard>
        <ProjectsCard
          onClick={() => openModal(2)}
          style={showModal ? { opacity: 0.5 } : { opacity: 1 }}
        >
          <ProjectsIcon src={img2} />
          <div>
            <ProjectsH2 style={{ color: "#fff" }}>BetterRadio</ProjectsH2>
            <ProjectsP style={{ color: "#ededed" }}>
              Recommendation focused web music player
            </ProjectsP>
          </div>
        </ProjectsCard>
        <ProjectsCard
          onClick={() => openModal(3)}
          style={showModal ? { opacity: 0.5 } : { opacity: 1 }}
        >
          <ProjectsIcon src={img3} />
          <div>
            <ProjectsH2 style={{ color: "#fff" }}>Chatbot</ProjectsH2>
            <ProjectsP style={{ color: "#ededed" }}>
              Deep-learning powered chatbot
            </ProjectsP>
          </div>
        </ProjectsCard>
        <ProjectsCard
          onClick={() => openModal(4)}
          style={showModal ? { opacity: 0.5 } : { opacity: 1 }}
        >
          <ProjectsIcon src={portal} />
          <div>
            <ProjectsH2 style={{ color: "#fff" }}>Portal</ProjectsH2>
            <ProjectsP style={{ color: "#ededed" }}>
              A remake of 2007's puzzle platform game Portal.
            </ProjectsP>
          </div>
        </ProjectsCard>
        <ProjectsCard
          onClick={() => openModal(5)}
          style={showModal ? { opacity: 0.5 } : { opacity: 1 }}
        >
          <ProjectsIcon src={short_url} />
          <div>
            <ProjectsH2 style={{ color: "#fff" }}>Short-URL</ProjectsH2>
            <ProjectsP style={{ color: "#ededed" }}>
              A URL-shortener with added backend complexity.
            </ProjectsP>
          </div>
        </ProjectsCard>
        <ProjectsCard
          onClick={() => openModal(6)}
          style={showModal ? { opacity: 0.5 } : { opacity: 1 }}
        >
          <ProjectsIcon src={compiler} />
          <div>
            <ProjectsH2 style={{ color: "#fff" }}>USCC Compiler</ProjectsH2>
            <ProjectsP style={{ color: "#ededed" }}>
              A compiler for University Simple C, a subset of C.
            </ProjectsP>
          </div>
        </ProjectsCard>
      </ProjectsWrapper>
      <BtnWrap style={{ marginTop: "25px" }}>
        <Button
          to="contact"
          smooth="true"
          spy={true}
          style={showModal ? { opacity: 0.5 } : { opacity: 1 }}
          exact="true"
          offset={-80}
          primary={0}
          dark={0}
          dark2={1}
        >
          Contact me <FaAngleDoubleDown style={{ marginLeft: 10 }} />
        </Button>
      </BtnWrap>
    </ProjectsContainer>
  );
};

export default Projects;
