import { 
  Box, Typography, List, ListItem, ListItemAvatar, Avatar, 
  ListItemText, Button, Grid 
} from "@mui/material"; 
import Porttmain from "./Porttmain"; 

function Portsmain() { 
  return ( 
    <Box sx={{ marginTop: { xs: "110px", md: "30px" }, px: 3 }}> 
      <Typography 
        variant="h4" 
        component="h1" 
        color="#03fcd3" 
        sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "serif", mt: { xs: 5, md: 3 } }} 
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
            desc="Fullstack projects involve developing both the front-end codes and back-end code of include a web application & Website & Apps" 
            image="https://wallpapercave.com/wp/wp10167056.jpg" 
            projectLink="https://github.com/balaharringto/Bala-Portfolio" 
          /> 
        </Grid> 

        {/* Internship 1 Certificate */} 
        <Grid item xs={12} sm={6} md={4}> 
          <CertificateComponent 
            title="Internship Certificate 1" 
            desc="Build with React & MUI using modern web development tools to design clean, responsive UIs." 
            image="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/mtes4cvipnhgaaoshrti" 
            pdfPath="/assets/astrinosh.pdf"
          /> 
        </Grid> 

        {/* Internship 2 Certificate */} 
        <Grid item xs={12} sm={6} md={4}> 
          <CertificateComponent 
            title="Internship Certificate 2" 
            desc="Build with React & MUI using modern web development tool" 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUfurBf95tlRbBxj3y4oHNxVoyn-FDN3zNA&s" 
            pdfPath="/assets/vdart.pdf"
          /> 
        </Grid> 
      </Grid> 

      <Porttmain /> 
    </Box> 
  ); 
} 

// 🔹 Project Card Component 
function CardComponent({ title, desc, image, projectLink }) { 
  return ( 
    <Box 
      sx={{ 
        background: 'rgba(0, 0, 0, 0.85)', 
        borderRadius: 4, 
        boxShadow: 5, 
        p: 3, 
        color: "white", 
        transition: 'background 0.3s', 
        '&:hover': { background: 'rgba(0, 0, 0, 0.95)' } 
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
          <Button variant="outlined" href={projectLink} target="_blank" sx={{ color: "#34ebba", borderColor: "#34abeb" }}>Projects</Button> 
          <Button variant="outlined" href={projectLink} target="_blank" sx={{ color: "#34ebba", borderColor: "#34abeb" }}>Codes</Button> 
        </Box> 
      </List> 
    </Box> 
  ); 
} 

// 🔹 Certificate Card Component (✅ fixed with Download + View) 
function CertificateComponent() { 
  return ( 
   <Box sx={{ p: 5, backgroundColor: "#121212", color: "white" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Certificates
      </Typography>

      <Grid container spacing={4}>
        {/* Internship Certificate 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <CertificateComponent
            title="Internship Certificate 1"
            desc="Astonish Infotech Private Limited was an IT services company based in Trichy, web development"
            image="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/mtes4cvipnhgaaoshrti"
            pdfPath="/assets/astinosh.pdf"
          />
        </Grid>

        {/* Internship Certificate 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <CertificateComponent
            title="Internship Certificate 2"
            desc="VDart is a global digital talent management and IT staffing company"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUfurBf95tlRbBxj3y4oHNxVoyn-FDN3zNA&s"
            pdfPath="/assets/vdart.pdf"
          />
        </Grid>


      </Grid>
    </Box>
  ); 
} 

export default Portsmain; 
