import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlices=createSlice({
    name:'cars',
    initialState:{
        searchItem:'',
        cars:[]
    },
    reducers:{
        chnageSearchTerm(state,action){
            state.searchItem=action.payload;
        },
        addCar(state,action){
            state.cars.push(
                {
                    name:action.payload.name,
                    cost:action.payload.cost,
                    id:nanoid()
                }
            )
        },
        removeCar(state,action){
            const updateCars=state.cars.filter((cars)=>{
                return cars.id!==action.payload
            })

            state.cars=updateCars;
        },
    }
})

export const {changeSearchTerm,addCar,removeCar}=carSlices.actions;
export const carReducer=carSlices.reducer;