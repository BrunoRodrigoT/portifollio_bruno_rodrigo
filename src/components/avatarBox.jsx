import React from "react";
import { Avatar, Box } from "@mui/material";
import styled from "@emotion/styled";
import img from "../assets/img/avatar.png";
// import githubIcon from "../assets/img/github.png";
// import linkedinIcon from "../assets/img/linkedin.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



const IconLinkedin = styled(LinkedInIcon)(() => ({
  width: 30,
  height: 30,
  color: "#e5e5e5cc",
  ":hover":{
    color: '#6F0096',
  }
}))

const IconGithub = styled(GitHubIcon)(() => ({
  width: 30,
  height: 30,
  color: "#e5e5e5cc",
  ":hover":{
    color: '#6F0096',
  }
}))


const BoxHeader = styled(Box)(() => ({
  maxWidth: "80%",
  margin: "auto",
}));

const Boxtop = styled(Box)(() => ({
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  flexWrap: "nowrap",
  margin: "auto",
  maxWidth: 700,
}));

const DivTitle = styled(Box)(() => ({
  margin: 20,
  paddingTop: 15,
  lineHeight: 0.9,
  color: "#e5e5e5cc",
}));

const Img = styled(Avatar)(() => ({
  width: 80,
  height: 80,
  border: "4px solid #FFB2D7",
  boxShadow: '4px 4px 10px #0008'
}));

const H1 = styled(Box)(() => ({
  fontSize: "2em",
  color: "#FFB2D7",
  textShadow: '4px 4px 10px #0008',
}));

const Description = styled(Box)(() => ({
  color: "#e5e5e5cc",

  display: "flex",
  justifyContent: "left",
  margin: "auto",
  maxWidth: 700,
}));

const Icons = styled(Box)(() => ({
  display: "flex",
  justifyContent: 'end',
  alignItems: 'center'
}));

const Links = styled.a`
  margin: 5px;
`

export const AvatarBox = () => {
  return (
    <BoxHeader>
      <Boxtop>
        <Img alt="Bruno Rodrigo" src={img} />
        <DivTitle>
          <H1>Bruno Rodrigo</H1>
          <p>Front End Developer && Robotics Educational Instructor</p>
        </DivTitle>
      </Boxtop>
      <Description>
        <p>
          Hi, i'm Bruno welcome to my personal portifolio, i'm 20y old and these
          are some of my projects.
        </p>
      </Description>
      <Icons>
        <Links href="https://github.com/BrunoRodrigoT">
          <IconGithub/>
        </Links>
        <Links href="https://www.linkedin.com/in/bruno-rodrigo-0104611a1/">
          <IconLinkedin/>
        </Links>
      </Icons>
    </BoxHeader>
  );
};
