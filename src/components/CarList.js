import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { removeCar } from '../store';
function CarList() {
    const dispatch=useDispatch()
   
    const cars = useSelector(({ cars: { data, searchItem } }) => {
        return data.filter((car) =>
          car.name.toLowerCase().includes(searchItem.toLowerCase())
        );
      });
    const handleClick=(car)=>{
        dispatch(removeCar(car.id))
    }

    const renderCars=cars.map((car)=>{
        
        return(
            <div key={car.id} className='panel'>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className='button is-danger' onClick={()=>handleClick(car)}>
                    Delete
                </button>
            </div>
        )
    })

  return (
    <div className='car-list'>{renderCars} <hr/></div>
  )
}

export default CarList