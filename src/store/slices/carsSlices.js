import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlices=createSlice({
    name:'cars',
    initialState:{
        searchItem:'',
        data:[]
    },
    reducers:{
        changeSearchTerm(state,action){
            state.searchItem=action.payload;
        },
        addCar(state,action){
            state.data.push(
                {
                    name:action.payload.name,
                    cost:action.payload.cost,
                    id:nanoid()
                }
            )
        },
        removeCar(state,action){
            const updateCars=state.data.filter((cars)=>{
                return cars.id!==action.payload
            })

            state.data=updateCars;
        },
    }
})

export const {changeSearchTerm,addCar,removeCar}=carSlices.actions;
export const carReducer=carSlices.reducer;