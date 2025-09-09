import { Box, Button, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Portsmain from "./Portsmain";
import { Link } from "react-router-dom";
import bala from "../images/bala4.jpeg"

function Portmain() {
  return (
    <Box mt={4}>

         {/* Dark Overlay */}
       
     
      <Box mt={4}
        sx={{
           position: "relative",
           backgroundImage: {
            xs: `url(${bala})`,    
            md: `url(${bala})`,   
            lg: "none"             
          },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          marginLeft: { xs: 0, md: "110px" },
          padding: { xs: "20px", md: "80px" },
          textAlign: { xs: "center", md: "left" },
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 0
          
        }}
      >
        
        {/* Dark Overlay */}
         <Box
          sx={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 0
          }}
        />

       

        {/* Text Content */}
         
        <Box sx={{ position: "relative", zIndex: 1,px:"2px" }}>

      
        <Typography mt={4} 
          variant="body1"
          component="h4"
          sx={{ fontSize: { xs: "16px", md: "20px"} ,lg:{fontSize:"20px"},color: "#03fcd3", mb: 1 }}
        >
          Hi, I Am
        </Typography>
      
          <Typography mt={5}
          variant="h3"
          component="h4"
          sx={{color:"whitesmoke",marginTop:{xs:"25px"},fontWeight: "bold", fontFamily: "inherit",fontSize: { xs: "28px", md: "36px",xl:"42px"},lg:{fontSize:"42px" } }}
        >
          BALASHANMUGAM RAJENDRAN
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          sx={{
            mt: 2,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "rgba(255,255,255,0.6)",
            fontSize: { xs: "22px", md: "28px"},
            marginTop:{xs:"55px"}
          }}
        >
          Python Full Stack Developer
        </Typography>

        <Typography 
          variant="body2"
          sx={{
            marginTop:{xs:"90px",md:"20px"},
            maxWidth: "600px",
            px: { xs: 1, md: 0 },                      // horizontal padding on mobile
            color: "white",
            fontFamily: "initial",
            fontWeight:"bold",
            gap:"2px",
            fontSize: { xs: "16px", md: "15px" },
            

          }}
        >
          I’m  full-stack developer is proficient in both frontend and backend web development, 
          enabling them to build and maintain entire web applications. Frontend development focuses on the user interface what users see and interact with, while backend development handles server-side logic, databases, and application infrastructure. Essentially, a full-stack developer can handle all aspects of building a web application from start to finish. 
        </Typography>
                   <Link to="/experience" style={{ color: "inherit", textDecoration: "none" }}>

   
        {/* <Button
          variant="outlined"
          sx={{
            mt: 3,
            color: "#03fcd3",
            borderColor: "#03fcd3",
            fontFamily:"inherit",
            fontWeight:"bold",
            fontSize: { xs: "12px", md: "14px" },
            marginTop:{xs:"55px",md:"30px"},
            padding:{xs:"7px"}
          }}
        >
          Check Out My Projects & Experience
        </Button>
</Link>
        <Button
          sx={{
            position: "absolute",
            bottom: { xs: "10px", md: "50px" },
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: { xs: "12px", md: "16px" },
            padding: { xs: "20px 10px", md: "8px 16px" },
            color: "white",
            marginTop:{xs:"35px",md:"20px"}
          }}
        >
          Scroll Down
          <ExpandMoreIcon />
        </Button>
          </Box> */}
    <Button
  variant="outlined"
  sx={{
    // position: "fixed", // fixed at bottom
    // bottom: { xs: "20px", md: "30px" },'
    margin:"auto",
    // left: "30%",
    // transform: "translateX(-50%)",
    color: "#03fcd3",
    marginTop:{xs:"50px"},
    borderColor: "#03fcd3",
    fontFamily: "inherit",
    fontWeight: "bold",
    fontSize: { xs: "12px", md: "16px" },
    padding: { xs: "10px 16px", md: "12px 24px" },
    zIndex: 99,
    '&:hover': {
      backgroundColor: "#03fcd3",
      color: "black",
    },
  }}
  // onClick={() => {
  //   window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  // }}
>
  Check Projects &  Experience 
</Button>
</Link>

      </Box>
      
<Button sx={{color:"white",padding:"10px 2px 2px 2px", margin:"auto",xs:{marginTop:"20px"}}}>
   Scroll Down <ExpandMoreIcon sx={{margin:"auto"}} />
</Button>
      </Box>
      <Portsmain />
    </Box>
  );
}

export default Portmain;
