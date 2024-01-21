import React,{useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {exerciseOptions,fetchData} from "../utils/fetchData"
import {Detail} from "../components"

function ExerciseDetail() {
  const [exerciseDetail,setExerciseDetail] = useState({})
  const {id} = useParams()
  useEffect(()=>{
    const fetchExercisesData=async ()=>{
      const urlExercise = "https://exercisedb.p.rapidapi.com/exercises"

      const exerciseDetailData = await fetchData(`${urlExercise}/exercise/${id}`,exerciseOptions)

      setExerciseDetail(exerciseDetailData)
    }
    fetchExercisesData()
  },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
    </Box>
  )
}

export default ExerciseDetail