import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import DegreeImg from "../assets/img/degree.png";

const DegreeBox = styled(Box)(() => ({
  maxWidth: 700,
  margin: "auto",
  padding: 20,
}));

const DegreeTitle = styled(Box)(() => ({
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
const Spn = styled.a`
  color: #FFB2D7;
  text-shadow: 4px 4px 10px #0008;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const P = styled.p`
  color: #ffffff66;
  width: 97%;
  margin: auto;
  line-height: 1.3em;
  padding-bottom: 15px;
`;

const BoxCourse = styled(Box)(() => ({
  maxWidth: 700,
  maxHeight: 500,
  background: "#ffffff1a",
  padding: 5,
  borderRadius: 10,
  boxShadow: "4px 4px 10px #0008",
}));

export const Degree = () => {
  return (
    <DegreeBox>
      <DegreeTitle>
        <img src={DegreeImg} alt="vector" />
        <H1>Degree</H1>
      </DegreeTitle>

      <BoxCourse>
        <H1>
          Front-End Full Course -{" "}
          <Spn href="https://www.redecidada.org.br/projetos/projeto-start-latam/">
            START-LATAM From Rede Cidadã
          </Spn>
        </H1>

        <P>Mai 2021 - Nov 2021</P>
        <P>
          In this course i had the oportunity to learn a lot of languages like
          Javascript, CSS and some libraries like ReactJS
        </P>
      </BoxCourse>
    </DegreeBox>
  );
};
