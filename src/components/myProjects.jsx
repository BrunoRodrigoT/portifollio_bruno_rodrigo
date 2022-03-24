import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Projects from "../assets/img/news.png";
import RmImg from "../assets/img/RmImg.png";
import TascomImg from "../assets/img/tascomimg.png";


const ProjectsGlobalBox = styled(Box)(() => ({
  maxWidth: 700,
  margin: "auto",
}));

const ProjectTitle = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const H1 = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 1.2em;
  color: #fff;
  opacity: 0.8;
  padding-left: 10px;
`;

const BoxOfBoxes = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
}));

const BoxProject = styled(Box)(() => ({
  maxWidth: 335,
  maxHeight: 500,
  background: "#ffffff1a",
  padding: 5,
  marginBottom: 15,
  borderRadius: 10,
  boxShadow: "4px 4px 10px #0008",
}));

const Spn = styled.a`
  color: #ffb2d7;
  text-shadow: 4px 4px 10px #0008;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 200px;
`;

const P = styled.p`
  color: #ffffff66;
  width: 97%;
  padding-left: 10px;
`;

export const MyProjects = () => {
  return (
    <ProjectsGlobalBox>
      <ProjectTitle>
        <img src={Projects} alt="Projects" />
        <H1>My Projects</H1>
      </ProjectTitle>

      <BoxOfBoxes>
        <BoxProject>
          <H1>
            <Spn href="https://startlatam-rickandmorty.herokuapp.com/">
              Projeto Rick And Morty
            </Spn>{" "}
            - Website Fan Service
          </H1>
          <P>Nov 2021</P>
          <a href="https://startlatam-rickandmorty.herokuapp.com/">
            <Image src={RmImg} />
          </a>
        </BoxProject>

        <BoxProject>
          <H1>
            <Spn href="https://tascomtestecovidbruno.herokuapp.com/">
              Tascom Covid Data
            </Spn>{" "}
            - Website For Show Covid-19 Data
          </H1>
          <P>Feb 2022</P>
          <a href="https://tascomtestecovidbruno.herokuapp.com/">
            {" "}
            <Image src={TascomImg} />
          </a>
        </BoxProject>
      </BoxOfBoxes>
    </ProjectsGlobalBox>
  );
};
