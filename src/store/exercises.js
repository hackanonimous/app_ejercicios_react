import {create} from "zustand"
import {fetchData,exerciseOptions} from "../utils/fetchData"

const useExercisesStore = create((set)=>({
    dataExercises:[],
    setExercises:async(search)=>{
        if(search){
            const exercisesData= await fetchData("https://exercisedb.p.rapidapi.com/exercises",exerciseOptions)
        const searchedExercises = exercisesData.filter((exercise)=>(
            exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
          ))
          set({dataExercises:searchedExercises})
        }
    },
    setFechtData:async(exercise)=>{
        const exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${exercise}`,exerciseOptions)
        set({dataExercises:exercisesData})
    }    
}))

const useBodyPartsStore = create((set,get)=>({
    bodyPartsData:["all"],
    setBodyParts:(data)=>{
        const {bodyPartsData} = get()
        set({bodyPartsData:[bodyPartsData,...data]})
    }
}))

const useBodyPartStore = create((set,get)=>({
    bodyPartData:"all",
    setBodyPartData:(part)=>set({bodyPartData:part})
}))
export {useExercisesStore,useBodyPartsStore,useBodyPartStore}