import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import myphoto from "../images/iron.jpg";
import resume from "../assests/balaresume.pdf"

function Portnavbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  function handleDownload() {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "transparent", padding: "10px" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Brand */}
          <Typography variant="h6" component="h3">
            BALASHANMUGAM
          </Typography>

          {/* Desktop menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "30px",
              fontSize: "12px"
            }}
          >
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <Typography variant="body2">Home</Typography>
            </Link>
            <Link to="/experience" style={{ color: "inherit", textDecoration: "none" }}>
              <Typography variant="body2">Experience</Typography>
            </Link>
            <Link to="/skils" style={{ color: "inherit", textDecoration: "none" }}>
              <Typography variant="body2">Project</Typography>
            </Link>
            <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>
              <Typography variant="body2">Contact</Typography>
            </Link>

            <Button sx={{ minWidth: "auto", color: "#a7f2e6", borderColor: "#03fcd3" }} variant="outlined">
              Resume
            </Button>

            {/* ✅ Avatar only for large screens */}
            <Avatar alt="I AM BALA" src={myphoto} sx={{ width: 40, height: 40 }} />
          </Box>

          {/* Mobile view: Resume + MenuIcon */}
          <Box sx={{ display: { xs: "flex", md: "none",backgroundColor:"rgba(0, 0, 0, 0.95)" }, alignItems: "center", gap: "10px" }}>
            <Button   onClick={handleDownload} sx={{ minWidth: "auto", color: "#a7f2e6", borderColor: "#03fcd3" }} variant="outlined">
              Resume
            </Button>
            <IconButton sx={{ color: "white",backgroundColor:"rgba(0, 0, 0, 0.95)" }} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} sx={{color:"#03fcd3"}} >
        <Box sx={{ width: 250,height:"100%",color:"white",backgroundColor:"rgba(0, 0, 0, 0.95)" }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List sx={{color:"#03fcd3"}}>
            <ListItem button sx={{color:"#03fcd3",'&:hover': {
      color: "white",      
      backgroundColor: "transparent"  
    }}} component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button  sx={{color:"#03fcd3",'&:hover': {
      color: "white",      
      backgroundColor: "transparent"  
    }}} component={Link} to="/experience">
              <ListItemText primary="Experience" />
            </ListItem>
            <ListItem button  sx={{color:"#03fcd3",'&:hover': {
      color: "white",      
      backgroundColor: "transparent"  
    }}} component={Link} to="/skils">
              <ListItemText primary="Project" />
            </ListItem>
            <ListItem button   sx={{color:"#03fcd3",'&:hover': {
      color: "white",      
      backgroundColor: "transparent"  
    }}} component={Link} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Portnavbar;
