import React from 'react'
import {Stack,Typography} from "@mui/material"
import {useBodyPartStore,useExercisesStore} from "../store/exercises"
import Icon from "../assets/icons/gym.png"

function BodyPart({item}) {
  const bodyPartData=useBodyPartStore(state=>state.bodyPartData)
  const setBodyPartData=useBodyPartStore(state=>state.setBodyPartData)
  const setFechtData=useExercisesStore(state=>state.setFechtData)


  const handleClick=(item)=>{
    setBodyPartData(item)
    setFechtData(item)
  }
  return (
    <Stack type="button" alignItems="center" justifyContent="center" className="bodyPart-card" sx={{
      borderTop:bodyPartData==item ? "4px solid #ff2625" : "",
      backgroundColor:"#fff", borderBottomLeftRaduis:"20px", width:"270px",height:"280px",cursor:"pointer", gap:"47px"
    }} onClick={()=>{handleClick(item); window.scrollTo({top:1800,left:100,behavior:"smooth"})}}>
      
      <img src={Icon} alt="dumbbell" style={{width:"40px",height:"40px"}}/>
      <Typography fontSize="24px" fontWeight="bold" color="#3a1212" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart