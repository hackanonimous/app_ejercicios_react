import React,{useState,useEffect} from 'react'
import {HeroBanner,SearchExercises,Exercises} from "../components"
import {fetchData,exerciseOptions} from "../utils/fetchData"
import {useBodyPartsStore} from "../store/exercises"
import {Box} from "@mui/material"

function Home() {
  const setBodyParts=useBodyPartsStore(state=>state.setBodyParts)
  useEffect(()=>{
    const fetchBodyParts=async()=>{
      const data = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions)
      setBodyParts(data)
    }  
    fetchBodyParts()
  },[])
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home