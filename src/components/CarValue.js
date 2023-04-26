import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function CarValue() {
    const dispatch=useDispatch();
    const totalCost=useSelector((state)=>{
        let costTo=0;
        state.cars.data.map((item)=>{
            costTo=costTo+item.cost;
        });
        return costTo;
    })
  return (
    <div className='car-value'>
        Total Cost:
        ${totalCost}</div>
  )
}

export default CarValue