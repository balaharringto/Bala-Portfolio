import { Box, Typography } from "@mui/material";
import img1 from "../images/html.png";
import img2 from "../images/css.png";
import img3 from "../images/js.png";
import img4 from "../images/react1.png";
import img5 from "../images/tailwind.png";
import img6 from "../images/python.png";
import img7 from "../images/dj.png";
import img8 from "../images/rest.png";
import img9 from "../images/mysql.png";
import img10 from "../images/mui.png";
import Portfmain from "./Portfmain";

function Porttmain() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        color: "white",
        py: 6,
        px: 2,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          color: "#34ebba",
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
          fontSize: { xs: "28px", md: "40px" },
        }}
      >
        My Skills
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "white",
          textAlign: "center",
          mb: 4,
          fontWeight: "bold",
        }}
      >
        The Skills, Tools and Technologies I Use For Projects
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: "15px", md: "25px" },
          maxWidth: "1200px",
          mx: "auto",
          mt: 5,
        }}
      >
        {images.map((img, idx) => (
          <Box
            key={idx}
            sx={{
              width: { xs: "100px", md: "120px", lg: "140px" },
              height: { xs: "100px", md: "120px", lg: "140px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#1f1f1f",
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: "0 0 20px #34ebba",
              },
            }}
          >
            <img
              src={img}
              alt={`Skill ${idx + 1}`}
              style={{
                width: "70%",
                height: "70%",
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Box>

      <Portfmain />
    </Box>
  );
}

export default Porttmain;