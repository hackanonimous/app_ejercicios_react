import React,{useState} from 'react'
import Pagination from "@mui/material/Pagination"
import {Box,Stack, Typography} from "@mui/material"
import {ExerciseCard} from "./"
import {useExercisesStore} from "../store/exercises"

function Exercises() {
  const [currentPage,setCurrentPage] = useState(1)
  const [exercisePerPage]=useState(6) 
  const dataExercises=useExercisesStore(state=>state.dataExercises)

  const indexOfLastExercise=currentPage * exercisePerPage
  const indexOfFirstExercise=indexOfLastExercise - exercisePerPage
  const currentExercises=dataExercises.slice(indexOfFirstExercise,indexOfLastExercise)

  const paginate=(e,value)=>{
    setCurrentPage(value)

    window.scrollTo({top:1800,behavior:"smooth"})
  } 


  return (
    <Box id="exercises" sx={{mt:{lg:"110px"}}} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Resultados
      </Typography>
      <Stack direction="row" sx={{gap:{lg:"110px",xs:"50px"}}} flexWrap="wrap" justifyContent="center">
        {currentExercises?.map((exercise,index)=>(
          <ExerciseCard exercise={exercise} key={index}/>
        ))}
      </Stack>
      <Stack sx={{mt:{lg:"114px",xs:"70px"}}} alignItems="center">
          {dataExercises.length > 9 && (
            <Pagination color="standard" shape="rounded" defaultPage={1} count={Math.ceil(dataExercises.length / exercisePerPage)} page={currentPage} onChange={paginate} sixe="large"/>
          )}
      </Stack>
    </Box>
  )
}

export default Exercises