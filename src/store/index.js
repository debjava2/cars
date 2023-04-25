import { configureStore } from "@reduxjs/toolkit";
import { carReducer,changeSearchTerm,addCar,removeCar } from "./slices/carsSlices";
import { formReducer,changeName,changeCost } from "./slices/formSlices";

const store=configureStore({
    reducer:{
    cars:carReducer,
    form:formReducer,
    },
})


export {store,changeSearchTerm,addCar,removeCar,changeName,changeCost}