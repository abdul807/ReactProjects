import React from 'react'
import { useEffect, useState } from 'react';
import './useEffect.css' 


const UserEffect = () => {
    const [foods , SetFoods] = useState([])

    useEffect(() => {
        fetch('https://api.npoint.io/9045c260b1565daa9e15')
        .then(response => response.json())
        .then(data=>{
            console.log(data)
            SetFoods(data)
           
            
        })
        .catch(error => console.error('Error fetching users:', error))

        
        

    }, []);

  return (
    <div className='card' >

        <h1>Welcome Foods</h1>

        <ul>
            {foods.map((food)=>{
                return (<>
                    <li>
                    <h3>{food.name}</h3>
                        <p><strong>Importance: </strong>{food.importance}</p>
                        <p><strong>Benefits: </strong>{food.benefits}</p>
                        <p><strong>Time to eat: </strong>{food.best_time_to_intake}</p>
                    </li>

                    </>
                )
            })}
        </ul>


      
    </div>
  )
}

export default UserEffect
