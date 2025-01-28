import React, { useState } from 'react'

const Btns = () => {
    const [darkMode, Setdarkmode] = useState(false)
    // let darkmodeOn = true
    // const lightmode = <p>Light is on</p>
    // const darkmode = <p>darmode is </p>

    const handleclick = () =>{

        console.log(darkMode)
        
        Setdarkmode(!darkMode)

       



    }
    


  return (
    <div>
      <button onClick={handleclick}>{darkMode ? 'darkmode': 'lightmode'}</button>
    </div>
  )
}

export default Btns
