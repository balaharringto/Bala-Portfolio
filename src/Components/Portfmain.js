import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function ContactRow({ icon, text, href }) {
  // if href provided, render as <a> so mobile taps open phone/email/link
  return (
    <Box
      component={href ? "a" : "div"}
      href={href}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        width: { xs: "92%", md: "100%" },
        margin: { xs: "10px auto", md: "8px 0" }, // center on mobile
        justifyContent: { xs: "center", md: "flex-start" },
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Box
        sx={{
          width: { xs: 36, md: 44 },
          height: { xs: 36, md: 44 },
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255,255,255,0.04)",
          flexShrink: 0,
        }}
      >
        {React.cloneElement(icon, { sx: { fontSize: { xs: 18, md: 26 } } })}
      </Box>

      <Typography
        sx={{
          fontSize: { xs: "14px", md: "18px" },
          fontWeight: 700,
          wordBreak: "break-word",
          textAlign: { xs: "left", md: "left" }, // text sits next to icon
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

function Portfmain() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box mt={10} color="white" pb={8}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "serif",
          fontWeight: "bold",
          fontSize: { xs: "26px", md: "36px" },
          mb: { xs: 3, md: 6 },
        }}
      >
        Contact Us
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          justifyContent: "space-around",
          gap: { xs: 6, md: 0 },
          px: { xs: 2, md: 6 },
        }}
      >
        {/* left: contact list */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#34ebba",
              fontSize: { xs: "20px", md: "32px" },
              mb: { xs: 2, md: 4 },
            }}
          >
            Contact Me
          </Typography>

          <ContactRow
            icon={<CallIcon />}
            text="Mobile No : +91 8148338798"
            href="tel:+918148338798"
          />

          <ContactRow
            icon={<EmailIcon />}
            text="Email : balarshanmugam492@gmail.com"
            href="mailto:balarshanmugam492@gmail.com"
          />

          <ContactRow
            icon={<LinkedInIcon />}
            text="LinkedIn : BALASHANMUGAM RAJERDRAN"
            href="https://www.linkedin.com" // replace with your profile URL
          />

          <ContactRow
            icon={<GitHubIcon />}
            text="GitHub : BALASHANMUGAM"
            href="https://github.com/balaharringto" // replace with your profile URL
          />
        </Box>

        {/* right: contact form */}
        <Box
          sx={{
            width: { xs: "92%", md: "50%" },
            mt: { xs: 0, md: 4 },
            p: { xs: 3, md: 4 },
            background: "linear-gradient(135deg, #1a1a1a, #2e2e2e)",
            borderRadius: 3,
            mx: { xs: "auto", md: 0 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              textAlign: "center",
              color: "#34ebba",
              fontWeight: "bold",
              fontSize: { xs: "20px", md: "28px" },
            }}
          >
            Any Message For Me
          </Typography>

          <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
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
              type="submit"
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
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Portfmain;
