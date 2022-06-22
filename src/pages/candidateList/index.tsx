import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
const axios = require("axios").default;

const token = "41379F324695429C6991CC253A921";

type Candidate = {
  name: string;
  user_id: number;
};

type GetCandidateResponse = {
  data: Candidate[];
};

export default function CandidateList() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    axios
      .get("https://desenvolvimento.renovabr.org/api/v1/users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: GetCandidateResponse) => {
        setCandidates(res.data);
      })
      .catch();
  }, []);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 2, sm: 4, md: 4 }}
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        {candidates.map((candidate) => (
          <Grid item xs={2} sm={4} md={4} key={candidate.user_id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {candidate.name}
                </Typography>
                <CardActions>
                  <Link to={`/candidato/${candidate.user_id}`}>
                    <Typography variant="body2" color="text.secondary">
                      Clique aqui para ver a ficha do candidato
                    </Typography>
                  </Link>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
