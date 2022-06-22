import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const axios = require("axios").default;
const Logo = require("../../images/RBR_2022_COLOR.png");

const token = "41379F324695429C6991CC253A921";

type Candidate = {
  age: number;
  city: string;
  created_at: string;
  facebook: string;
  genre: string;
  income: string;
  instagram: string;
  name: string;
  race: string;
  sexual_orientation: string;
  state: string;
  twitter: string;
  updated_at: string;
  user_id: number;
  youtube: string;
  education: string;
};

type GetCandidateResponse = {
  data: Candidate[];
};

export default function CandidateIndividual() {
  const { id } = useParams();
  const [candidate, setCandidate] = useState<Candidate[]>([]);

  useEffect(() => {
    axios
      .get(`https://desenvolvimento.renovabr.org/api/v1/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: GetCandidateResponse) => {
        setCandidate(res.data);
      })
      .catch();
  }, []);
  return (
    <>
      {candidate.map((candidate) => (
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" image={Logo} alt="RenovaBR logo" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {candidate.name}
              </Typography>
              <Typography variant="subtitle1" component="div">
                <b>Cidade</b>: {candidate.city || "Não informado"} -{" "}
                {candidate.state || "Não informado"} <br></br>
                <b>Idade</b>: {candidate.age || "Não informado"} <br></br>
                <b>Educação</b>: {candidate.education || "Não informado"}{" "}
                <br></br>
                <b>Criado em</b>: {candidate.created_at || "Não informado"}{" "}
                <br></br>
                <b>Atualizado em</b>: {candidate.updated_at || "Não informado"}{" "}
                <br></br>
                <b>Gênero</b>: {candidate.genre || "Não informado"} <br></br>
                <b>Raça</b>: {candidate.race || "Não informado"} <br></br>
                <b>Renda</b>: {candidate.income || "Não informado"} <br></br>
                <b>Orientação Sexual</b>:{" "}
                {candidate.sexual_orientation || "Não informado"} <br></br>
                <b>Facebook</b>: {candidate.facebook || "Não informado"}{" "}
                <br></br>
                <b>Instagram</b>: {candidate.instagram || "Não informado"}{" "}
                <br></br>
                <b>Twitter</b>: {candidate.twitter || "Não informado"} <br></br>
                <b>Youtube</b>: {candidate.youtube || "Não informado"} <br></br>
                <br></br>
                <b>Id do Usuário</b>: {candidate.user_id || "Não informado"}{" "}
                <br></br>
              </Typography>
              <Link to="/listadecandidatos">
                <Button
                  style={{
                    maxWidth: "400px",
                    maxHeight: "400px",
                    minWidth: "200px",
                    minHeight: "150px",
                    backgroundColor: "#355ed8",
                  }}
                  variant="contained"
                >
                  Clique aqui para retornar a lista de candidatos
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Box>
      ))}
    </>
  );
}
