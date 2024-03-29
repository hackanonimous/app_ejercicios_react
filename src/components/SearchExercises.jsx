import React,{useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from "@mui/material"

import {useExercisesStore} from "../store/exercises.js"
import {HorizontalScrollbar} from "./"

function SearchExercises() {
  const[search,setSearch]=useState("")
  const setExercises = useExercisesStore(state=> state.setExercises)

  const handleSearch=async ()=>{
      setSearch("")
      setExercises(search)
  } 

  return (
    <Stack alignContent="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize:{lg:"44px", xs:"30px"}
      }} mb="50px" textAlign="center">
        Impresionnates ejercicios <br/> que deberias hacer ahora
      </Typography>
      <Box position="relative" mb="72px">
        <TextField  sx={{input:{fontWeight:"700",border:"none",borderRadius:"4px"},width:{lg:"800px",xs:"350px"},backgroundColor:"#fff",borderRadius:"40px"}} height="76px" value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} placeholder='Buscar Ejercicios' type='text'/>
        <Button className='search-btn' sx={{bgcolor:"#FF2625",color:"#fff",textTransform:"none",width:{lg:"175px",xs:"80px"},fontSize:{lg:"20px",xs:"14px"},height:"56px",position:"absolute"}} onClick={handleSearch}>
          Buscar
        </Button>
      </Box>

      <Box sx={{position:"relative",width:"100%",p:"20px"}}>
        <HorizontalScrollbar/>
      </Box>
    </Stack>
  )
}

export default SearchExercises