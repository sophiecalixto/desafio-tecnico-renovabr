import * as React from "react";
import { StyledImage } from "./style";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
const Logo =  require("../../images/MARCA_RENOVABR_NEGATIVO.png");

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#355ed8' }}>
        <Toolbar>
          <StyledImage src={Logo} alt="logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
