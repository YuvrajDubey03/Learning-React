import React from 'react'
import { useState } from 'react'
const App = () => {
  
  const [formData, setFormData] = useState({})
  console.log("formdata --->", formData)
 const handleChange = (e) => {
  setFormData({...formData , [e.target.name]: e.target.value})
 }


  return (
   
    <div className ="flex flex-col gap-5 w-100 p-10">
      <input onChange={handleChange} name="name" className="border border-gray-300 p-2" type="text" placeholder="Enter your name" />
      <input onChange={handleChange} name="email" className="border border-gray-300 p-2" type="text" placeholder="Enter your email" />
      <input onChange={handleChange} name="phone" className="border border-gray-300 p-2" type="text" placeholder="Enter your phone number" />
      <button  className="bg-blue-500 text-white p-2">Submit</button>    
    
      <h1 className="text-2xl font-bold">Hello my name is {formData.name}</h1>
      <h2>The email is: {formData.email}</h2>
      <h2>contact me on {formData.phone}</h2>
    
    </div>
   
  )
}

export default App