import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { AvatarBox } from "../components/avatarBox";
import { Degree } from "../components/degree";
import { WorkExperience } from "../components/workExperience";
import BasicSpeedDial from "../components/speedAcess";
import { MyProjects } from "../components/myProjects";



const DivMain = styled(Box)(() => ({
  color: "#fff",
  maxWidth: "100%",
  maxHeight: '100%',
  background: 'linear-gradient(180deg, rgba(255,255,255,0.19931722689075626) 0%, rgba(0,0,0,1) 100%)',
}));

const Footer = styled(Box)(() =>({
  color: "#e5e5e5cc",
  fontSize: '.8em',
}))

export default function Home() {
  return (
    <>
      <DivMain>
        <AvatarBox />
        <Degree />
        <WorkExperience/>
        <MyProjects/>
        <BasicSpeedDial/>
        <Footer>
          @BrunoRodrigoT - All Rights Reserved
        </Footer>
      </DivMain>
    </>
  );
}
