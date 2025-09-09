
// import Portsmain from "./Portsmain";
// import Porttmain from "./Porttmain";
// import Portfmain from "./Portfmain";

// import Portofolio from "./Portofolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portsmain from "./Portsmain";
import Porttmain from "./Porttmain";
import { Box } from "@mui/material";
import black from "../images/black.jpg"

import Portnavbar from "./Portnavbar";
import Portfmain from "./Portfmain";
import Portmain from "./Portmain";

function Portofolio(){
    return(
      <BrowserRouter>
                        <Box sx={{padding:"10px",borderRadius:"24px"}}>
                        <Box sx={{backgroundImage:`url(${black})`,backgroundSize:"cover",borderRadius:"24px 24px 24px 24px",backgroundPosition:"center",minHeight:"100vh",padding:"10px"}}>
            
    
                <Portnavbar/>
            <Routes>
            <Route path="/Bala-Portfolio/" element={<Portmain/>}/>
            <Route path="/experience" element={<Portsmain/>}/>
            <Route path="/skils" element={<Porttmain/>}/>
            <Route path="/contact" element={<Portfmain/>}/>

                
        </Routes>
        
       
        </Box>
        </Box>
        </BrowserRouter>
    )
 
 
}

export default  Portofolio;