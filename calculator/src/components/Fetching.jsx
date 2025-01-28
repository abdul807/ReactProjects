import React from 'react'
import axios from 'axios'


const Fetching = () => {
    const url ='https://randomuser.me/api/'
    const  items = []
    // const [data, setData] = React.useState(null)

 fetch(url)
 .then(response => response.json())
 .then(data => items.push(data.results[0].name))

 console.log(items)

 

 

  
  return (
    <div>

        {items.forEach((element)=> {
        <div key={element.name}>{element.name}</div>
        })}
      
    </div>
  )
}

export default Fetching
