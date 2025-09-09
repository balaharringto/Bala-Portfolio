// import Container from "@mui/material/Container";
import {Box, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
function Menu(){

    return(
        <div>
                        {/* <Container maxWidth="lg"> */}
                                    <Box  flex={1} mt={5} sx={{gap:"20px",fontFamily:"sans-serif",fontWeight:"bold",position:'fixed',display:{xs:'none',sm:'block'}}}>
                                        <List >
                                            <ListItemButton sx={{color:"black"}}>
                                                <ListItemIcon>
                                                     <FastfoodIcon/>
                                                 </ListItemIcon>  

                                                        <ListItemText primary="Food"/>
                                            </ListItemButton>
                                            <ListItemButton>
                                                <ListItemIcon><LocalCafeIcon/></ListItemIcon>
                                                <ListItemText primary="Coffee"/>
                                            </ListItemButton>
                                             <ListItemButton>
                                                <ListItemIcon><LunchDiningIcon/></ListItemIcon>
                                                <ListItemText primary="Burgure" />
                                            </ListItemButton>
                                            <ListItemButton>
                                                <ListItemIcon><SoupKitchenIcon/></ListItemIcon>
                                                <ListItemText primary="Soup"/>
                                            </ListItemButton> <ListItemButton>
                                                <ListItemIcon><RamenDiningIcon/></ListItemIcon>
                                                <ListItemText primary="Noodles"/>
                                            </ListItemButton> <ListItemButton>
                                                <ListItemIcon><LocalPizzaIcon/></ListItemIcon>
                                                <ListItemText primary="Pizza"/>
                                            </ListItemButton>
                                        </List>
                                    </Box>
                        {/* </Container> */}
        </div>
    )
}

export default Menu;