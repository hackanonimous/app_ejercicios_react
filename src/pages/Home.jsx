import React,{useState} from 'react'
import {HeroBanner,SearchExercises,Exercises} from "../components"

import {Box} from "@mui/material"

function Home() {
  const[exercises,setExercises]=useState([])
  const[bodyPart,setBodyPart]=useState("all")
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
    </Box>
  )
}

export default Home