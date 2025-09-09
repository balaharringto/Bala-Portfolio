import { Box, Typography, TextField, Button } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from "react";

function Portfmain(){

   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ do something with the data (e.g., send to backend)
    console.log("Submitted data:", { name, email, message });

    // Clear inputs after submit
    setName("");
    setEmail("");
    setMessage("");
  }
    return(
       <Box mt={15} color={"white"}>
            <Typography 
              color="white" 
              variant="h3" 
              component="h1" 
              sx={{ 
                display: "flex", 
                justifyContent: "center", 
                fontFamily: "serif", 
                fontWeight: "bold" 
              }}
            >
                Contact Us
            </Typography>
            <Box
              mt={5}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                padding: "30px",
                flexDirection: { xs: "column", md: "row" },  // mobile view: vertical stack
                alignItems: { xs: "center", md: "flex-start" }, // center on mobile
                gap: { xs: 4, md: 0 }, // spacing between items on mobile
              }}
            >
                <Box>
                    <Typography 
                      variant="h4" 
                      ml={2} 
                      mt={12} 
                      sx={{ 
                        fontFamily: "sans-serif", 
                        fontStyle: "unset", 
                        fontWeight: "bold", 
                        color: "#34ebba",
                        fontSize: { xs: "24px", md: "32px" } // optional: smaller heading on mobile
                      }}
                    >
                        Contact Me
                    </Typography> 
                    
                    <Button  
                      color="white"  
                      sx={{ 
                        fontSize: { xs: "16px", md: "20px" },
                        marginTop: "40px",
                        fontWeight: "bold",
                        textTransform: "none",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                        <CallIcon sx={{ fontSize: { xs: "24px", md: "30px" } }}/>
                        <Typography mt={1} sx={{ fontSize: { xs: "16px", md: "20px" }, fontWeight: "bold" }}>
                          Mobile No : +91 8148338798
                        </Typography> 
                    </Button>

                    <Button  
                      color="white"  
                      sx={{ 
                        fontSize: { xs: "16px", md: "20px" },
                        marginTop: "20px",
                        fontWeight: "bold",
                        textTransform: "none",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                        <EmailIcon sx={{ fontSize: { xs: "24px", md: "30px" } }}/>
                        <Typography mt={1} sx={{ fontSize: { xs: "16px", md: "20px" }, fontWeight: "bold" }}>
                          Email : balarshanmugam492@gmail.com
                        </Typography> 
                    </Button>
                     
                    <Button  
                      color="white"  
                      sx={{ 
                        fontSize: { xs: "16px", md: "20px" },
                        marginTop: "20px",
                        fontWeight: "bold",
                        textTransform: "none",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                        <LinkedInIcon sx={{ fontSize: { xs: "24px", md: "30px" } }}/>
                        <Typography mt={1} sx={{ fontSize: { xs: "16px", md: "20px" }, fontWeight: "bold" }}>
                          LinkedIn : BALA SHANMUGAM
                        </Typography> 
                    </Button>

                    <Button  
                      color="white"  
                      sx={{ 
                        fontSize: { xs: "16px", md: "20px" },
                        marginTop: "20px",
                        fontWeight: "bold",
                        textTransform: "none",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                        <GitHubIcon sx={{ fontSize: { xs: "24px", md: "30px" } }}/>
                        <Typography mt={1} sx={{ fontSize: { xs: "16px", md: "20px" }, fontWeight: "bold" }}>
                          GitHub : BALA SHANMUGAM
                        </Typography> 
                    </Button>
                </Box>
        
                <Box
                  sx={{
                    maxWidth: "500px",
                    mt: 8,
                    p: 4,
                    background: "linear-gradient(135deg, #1a1a1a, #2e2e2e)",
                    borderRadius: 4,
                    color: "white",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      textAlign: "center",
                      color: "#34ebba",
                      fontWeight: "bold",
                      fontSize: { xs: "24px", md: "32px" } // optional: smaller heading on mobile
                    }}
                  >
                    Any Message For Me 
                  </Typography>

                  <Box component="form" noValidate autoComplete="off"   onSubmit={handleSubmit} >
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      sx={{
                        mb: 2,
                        backgroundColor: "white",
                        borderRadius: 1,
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      
                      sx={{
                        mb: 2,
                        backgroundColor: "white",
                        borderRadius: 1,
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      
                      sx={{
                        mb: 3,
                        backgroundColor: "white",
                        borderRadius: 1,
                      }}
                    />
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: "#34ebba",
                        color: "black",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "#2ad0a0",
                        },
                      }}
                     onSubmit={handleSubmit} >
                      Send Message
                    </Button>
                  </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Portfmain;
