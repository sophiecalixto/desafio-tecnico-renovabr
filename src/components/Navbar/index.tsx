import * as React from "react";
import { Link } from "react-router-dom";
import { StyledImage } from "./style";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
const Logo = require("../../images/MARCA_RENOVABR_NEGATIVO.png");

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "#355ed8" }}
        sx={{ mb: 3 }}
      >
        <Toolbar>
          <StyledImage src={Logo} alt="logo"/>
          <Link to="/">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 3 }}>
              <HomeIcon /> Home
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
