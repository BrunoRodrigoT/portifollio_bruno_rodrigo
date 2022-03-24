import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const CampoDeComentarios = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function executeRequest() {
      try {
        const response = await fetch("http://localhost:3000/coments");
        const json = await response.json();

        setUser(json);
      } catch (error) {
        console.error("ops! ocorreu um erro : " + error.message);
      }
    }
    executeRequest();
  }, []);

  const Coments = styled(Box)(() => ({
    maxWidth: 380,
    width: "100%",
    maxHeight: 200,
    margin: 10,
    border: '2px solid #ffffff66',
    overflowY: 'scroll',
    background: "#ffffff1a",
    padding: 15,
    borderRadius: 10,
    boxShadow: "4px 4px 10px #0008",
    display: "flex",
    flexDirection: "column",
  }));

  const BoxText = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    border: "2px solid #ffffff66",
    boxShadow: "4px 4px 10px #0008",
    margin: 5,
    padding: 5,
    borderRadius: 5,
  }));

  return (
    <Coments>
      {user.map(({ name, coment }, index) => {
        return (
          <BoxText key={"coment-" + index}>

            <Typography
              variant="p"
              sx={{
                color: "#ffffff9d",
                textDecoration: "underLine",
                fontSize: "1.5em",
                fontFamily: "Karla",
                fontWeight: "bold",
                paddingBottom: 1,
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#ffffff66",
                fontSize: ".8em",
                fontFamily: "Karla",
                fontWeight: "bold",
              }}
            >
              {coment}
            </Typography>
          </BoxText>
        );
      })}
    </Coments>
  );
};
