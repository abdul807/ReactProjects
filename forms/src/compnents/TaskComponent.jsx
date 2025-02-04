import React, { useState } from 'react'

const TaskComponent = () => {
    const [task, setTask] = useState({})

    const handleChange = ({target}) =>{
        const {name, value} = target;
        setTask((prev)=>{
            return {...prev, [name]: value}
        });
        

    };

    const handleClick = () =>{
        alert(JSON.stringify(task, '', 2));
        setTask({})
        console.log(task)

        setInterval(()=>{
            console.log("hello")

        },1000)
        
        

    }
  return (
    <div>

        <input type="text" 
        name="task" 
        value={task.name}
        placeholder='Task name'
        onChange={handleChange}
         />
         <button onClick={handleClick}>Click me</button>
      
    </div>
  )
}

export default TaskComponent
