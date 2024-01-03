import React,{useState} from 'react'
import {HeroBanner,SearchExercises,Exercises} from "../components"

import {Box} from "@mui/material"

function Home() {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home