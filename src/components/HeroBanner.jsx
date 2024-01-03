import React from 'react'
import {Box,Stack,Typography,Button} from "@mui/material"
import HeroBannerImage from "../assets/images/banner.png"

function HeroBanner() {
  return (
    <Box sx={{
      mt:{lg:"212px",xs:"70px"},
      ml:{sm:"50px"}}} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Club Fitness
      </Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg:"44px",xs:"40px"}}} mb="23px" mt="30px">
        manten tu cuerpo <br/> con buena salud
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Revisa los ejercicios mas efectivo
      </Typography>
      <Button variant='contained' color="error" href="#exercises" sx={{backgroundColor:"#FF2625",padding:"10px"}} >
        Mas Ejercicios
      </Button>
      <Typography fontWeight={600} color="#ff2625" sx={{opacity:0.1,display:{lg:"block",xs:"none"}}} fontSize="200px" >
        Ejercicios
      </Typography>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/> 
    </Box>
  )
}

export default HeroBanner