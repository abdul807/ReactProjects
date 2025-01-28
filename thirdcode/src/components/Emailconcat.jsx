import React, { useState } from 'react'

const Emailconcat = () => {

    const [form,Setform] = useState({
        Fname: "luck",
        Lname: "johnes",
        email: "luck@gmail.com"



    })


    const handleReset = ()=>{
        Setform({

            Fname: ""
            ,Lname: ""
            ,email: "no email"
        
        })

    }
  return (
    <div>


        <input type="text" name="" id="" value={form.Fname} onChange={(e)=>{
            Setform({...form,Fname:e.target.value})
        }} />  <br />
        <input type="text" name="" id="" value={form.Lname} onChange={(e)=>{
            Setform({...form,Lname:e.target.value})
        }} />  <br />
        <input type="email" name="" id="" value={form.email} onChange={(e)=>{
            Setform({...form,email:e.target.value})
        }}/>  <br />

        <p>{form.Fname} {form.Lname} {`(${form.email})`}</p>

        <button onClick={handleReset}>Reset</button>




      
      
    </div>
  )
}

export default Emailconcat
