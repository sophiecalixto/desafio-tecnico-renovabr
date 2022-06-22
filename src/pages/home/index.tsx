import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Link to="/listadecandidatos">
            <Button
              style={{
                maxWidth: "400px",
                maxHeight: "400px",
                minWidth: "300px",
                minHeight: "150px",
                backgroundColor: '#355ed8',
              }}
              variant="contained"
            >
              Ver lista de candidatos
            </Button>
          </Link>
        </Box>
      </Container>
    </React.Fragment>
  );
}
