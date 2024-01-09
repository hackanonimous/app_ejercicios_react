import React,{useContext} from 'react'
import { Box, Typography } from '@mui/material'
import {ScrollMenu,VisibilityContext} from "react-horizontal-scrolling-menu"
import {useBodyPartsStore} from "../store/exercises"
import {BodyPart} from "./"

import RightArrowIcon from "../assets/icons/right-arrow.png"
import LeftArrowIcon from "../assets/icons/left-arrow.png"

const LeftArrow = ()=>{
  const {scrollPrev}=useContext(VisibilityContext)
  return (
    <Typography onClick={()=>scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  )
}
const RightArrow = ()=>{
  const {scrollNext}=useContext(VisibilityContext)

  return (
    <Typography onClick={()=>scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  )
}


function HorizontalScrollbar() {
  const bodyPartsData = useBodyPartsStore(state=>state.bodyPartsData)
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {bodyPartsData.map((item)=>(
            <Box key={item.id || item} itemID={item.id || item} title={item.id || item} m="0 40px">
                <BodyPart item={item}/>
            </Box>
        )
        )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar