import React, { useState } from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import SendIcon from "@mui/icons-material/Send";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { CampoDeComentarios } from "./campoDeComentarios";

export const Coment = () => {
  const [name, setName] = useState("");
  const [coment, setComent] = useState("");

  async function postComent(e) {
    console.log(e);
    e.preventDefault();
    const response = await fetch("http://localhost:3000/coments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        coment,
      }),
    });
    const content = await response.json();

    console.log(content);

    setName("");
    setComent("");
  }

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleComent = (e) => {
    setComent(e.target.value);
  };

  const H1 = styled.p`
    font-size: 1.2em;
    color: #fff;
    opacity: 0.8;
    padding-left: 10px;
  `;

  const ComentTitle = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    margin: 10,
  }));

  return (
    <Box
      sx={{
        maxWidth: 710,
        margin: "auto",
      }}
    >
      <ComentTitle>
        <SendIcon sx={{ color: "#ffffff66" }} />
        <H1>Coments</H1>
      </ComentTitle>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            maxWidth: 230,
            maxHeight: 230,
            background: "#ffffff1a",
            margin: 1,
            padding: 1,
            borderRadius: 5,
            boxShadow: "4px 4px 10px #0008",
            display: "flex",
            flexFlow: "column",
          }}
        >
          <Box
            component="form"
            autoComplete="on"
            sx={{
              "& > :not(style)": { m: 1, maxWidth: 200 },
            }}
            noValidate
            onSubmit={postComent}
          >
            <TextField
              type="text"
              id="name"
              label="Name"
              value={name}
              variant="outlined"
              onChange={handleName}
            />
            <TextField
              type="text"
              id="coment"
              multiline
              maxRows={2}
              value={coment}
              label="Coment"
              variant="outlined"
              onChange={handleComent}
            />
            <Button
              sx={{
                color: "#ffffff66",
                fontWeight: "bold",
                ":hover": {
                  color: "#6F0096",
                },
              }}
              variant="text"
              type="submit"
            >
              Enviar
            </Button>
          </Box>
        </Box>
        <CampoDeComentarios />
      </Box>
    </Box>
  );
};
