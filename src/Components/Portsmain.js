import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Grid,
} from "@mui/material";
import Porttmain from "./Porttmain";

function Portsmain() {
  return (
    <Box sx={{ marginTop: { xs: "110px", md: "30px" }, px: 3 }}>
      <Typography
        variant="h4"
        component="h1"
        color="#03fcd3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "serif",
          mt: { xs: 5, md: 3 },
        }}
      >
        Experience
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={4}>
        {/* Frontend */}
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent
            title="Frontend Projects"
            desc="Frontend projects involve building the user-facing part of websites and applications focusing on visual elements and user interaction."
            image="https://t3.ftcdn.net/jpg/02/92/88/72/360_F_292887204_2wH041phSQo70eqaE9GRqFvn5MmQ4B8w.jpg"
            projectLink="https://github.com/balaharringto/Bala-Portfolio"
          />
        </Grid>

        {/* Backend */}
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent
            title="Backend Projects"
            desc="Backend projects involve server-side development, focusing on databases, APIs, authentication, and overall application logic."
            image="https://t4.ftcdn.net/jpg/02/99/62/11/360_F_299621124_vutDKbNwRJG6poJRQQIMYfsc4tJCTO5E.jpg"
            projectLink="https://github.com/balaharringto/Bala-Portfolio"
          />
        </Grid>

        {/* Fullstack */}
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent
            title="Fullstack Projects"
            desc="Fullstack projects involve developing both the front-end and back-end of web applications & websites."
            image="https://wallpapercave.com/wp/wp10167056.jpg"
            projectLink="https://github.com/balaharringto/Bala-Portfolio"
          />
        </Grid>

        {/* Internship Certificate 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <CertificateComponent
            title="Internship Certificate 1"
            desc="Build with React & MUI using modern web development tools to design clean, responsive UIs."
            image="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/mtes4cvipnhgaaoshrti"
            pdfPath="https://github.com/balaharringto/Bala-Portfolio/blob/main/src/assests/astrinosh.pdf"
          />
        </Grid>

        {/* Internship Certificate 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <CertificateComponent
            title="Internship Certificate 2"
            desc="Build with React & MUI using modern web development tools."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUfurBf95tlRbBxj3y4oHNxVoyn-FDN3zNA&s"
            pdfPath="https://github.com/balaharringto/Bala-Portfolio/blob/main/src/assests/vdart.pdf"
          />
        </Grid>

        {/* Seminar 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <SeminarComponent
            title="Seminar on Full Stack Development"
            desc="Attended a seminar on Full Stack web development, covering React, Node.js, and database integration."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfl6D9Om9YQ8bTFmuo8Hmv5nJcCXJAAbpYg&s"
            pdfPath="https://github.com/balaharringto/Bala-Portfolio/blob/main/src/assests/work2.pdf"
          />
        </Grid>

        {/* Seminar 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <SeminarComponent
            title="Seminar on AI & ML"
            desc="Participated in an AI/ML seminar exploring machine learning applications in real-world scenarios."
            image="https://www.shutterstock.com/image-illustration/aiml-stand-artificial-intelligence-machine-600nw-1574320609.jpg"
            pdfPath="https://github.com/balaharringto/Bala-Portfolio/blob/main/src/assests/ram.pdf"
          />
        </Grid>

         <Grid item xs={12} sm={6} md={4}>
          <SeminarComponent
            title="Seminar on CHATGPT TOOLS"
            desc="Participated in an CHATGPT  seminar exploring  CHATGPT TOOLS applications in real-world scenarios."
            image="https://www.guvi.in/blog/wp-content/uploads/2024/10/discover_the_future_best_ai_tools_like_chatgpt-1.webp"
            pdfPath="C:\Users\lenovo\Documents\PortFolio\bala-portfolio\src\assests\work1.pdf"
          />
        </Grid>
      </Grid>

      <Porttmain />
    </Box>
  );
}

// --------------------- Card Component ---------------------
function CardComponent({ title, desc, image, projectLink }) {
  return (
    <Box
      sx={{
        background: "rgba(0, 0, 0, 0.85)",
        borderRadius: 4,
        boxShadow: 5,
        p: 3,
        color: "white",
        transition: "background 0.3s",
        "&:hover": { background: "rgba(0, 0, 0, 0.95)" },
      }}
    >
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={title} src={image} />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h6" sx={{ fontWeight: "bold" }}>{title}</Typography>}
            secondary={<Typography variant="body2" sx={{ mt: 1 }}>{desc}</Typography>}
          />
        </ListItem>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button
            variant="outlined"
            href={projectLink}
            target="_blank"
            sx={{ color: "#34ebba", borderColor: "#34abeb" }}
          >
            Projects
          </Button>
          <Button
            variant="outlined"
            href={projectLink}
            target="_blank"
            sx={{ color: "#34ebba", borderColor: "#34abeb" }}
          >
            Codes
          </Button>
        </Box>
      </List>
    </Box>
  );
}

// --------------------- Certificate Component ---------------------
function CertificateComponent({ title, desc, image, pdfPath }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = `${title.replace(/\s+/g, "_")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        background: "rgba(0, 0, 0, 0.85)",
        borderRadius: 4,
        boxShadow: 5,
        p: 3,
        color: "white",
        transition: "background 0.3s",
        "&:hover": { background: "rgba(0, 0, 0, 0.95)" },
      }}
    >
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={title} src={image} />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h6" sx={{ fontWeight: "bold" }}>{title}</Typography>}
            secondary={<Typography variant="body2" sx={{ mt: 1 }}>{desc}</Typography>}
          />
        </ListItem>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button
            variant="outlined"
            sx={{ color: "#34ebba", borderColor: "#34abeb" }}
            onClick={handleDownload}
          >
            Download
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#34ebba", borderColor: "#34abeb" }}
            href={pdfPath}
            target="_blank"
          >
            View
          </Button>
        </Box>
      </List>
    </Box>
  );
}

// --------------------- Seminar Component ---------------------
function SeminarComponent({ title, desc, image, pdfPath }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = `${title.replace(/\s+/g, "_")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        background: "rgba(0, 0, 0, 0.85)",
        borderRadius: 4,
        boxShadow: 5,
        p: 3,
        color: "white",
        transition: "background 0.3s",
        "&:hover": { background: "rgba(0, 0, 0, 0.95)" },
      }}
    >
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={title} src={image} />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h6" sx={{ fontWeight: "bold" }}>{title}</Typography>}
            secondary={<Typography variant="body2" sx={{ mt: 1 }}>{desc}</Typography>}
          />
        </ListItem>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button
            variant="outlined"
            sx={{ color: "#34ebba", borderColor: "#34abeb" }}
            onClick={handleDownload}
          >
            Download
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#34ebba", borderColor: "#34abeb" }}
            href={pdfPath}
            target="_blank"
          >
            View
          </Button>
        </Box>
      </List>
    </Box>
  );
}

export default Portsmain;
