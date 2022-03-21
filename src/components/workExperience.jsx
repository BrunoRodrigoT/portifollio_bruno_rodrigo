import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import WorkImg from "../assets/img/work.png";

const WorkBox = styled(Box)(() => ({
  maxWidth: 700,
  margin: "auto",
  padding: 20,
}));

const WorkTitle = styled(Box)(() => ({
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

const BoxExperience = styled(Box)(() => ({
  maxWidth: 700,
  maxHeight: 500,
  background: "#ffffff1a",
  padding: 5,
  borderRadius: 10,
  boxShadow: "4px 4px 10px #0008",
}));

export const WorkExperience = () => {
  return (
    <WorkBox>
      <WorkTitle>
        <img src={WorkImg} alt="vector" />
        <H1>Work Experience</H1>
      </WorkTitle>

      <BoxExperience>
        <H1>
          Front-End Developer Full Time -{" "}
          <Spn href="https://www.tascominformatica.com.br/">Tascom</Spn>
        </H1>

        <P>March 2022</P>
        <P>
          My current job, at the moment i'm an intern, but i hope to grow more
          and more in this amazing company that is Tascom.
        </P>
      </BoxExperience>
    </WorkBox>
  );
};
