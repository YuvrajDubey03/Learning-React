import React from 'react'
import { useForm } from 'react-hook-form'

const RHF = () => {
    console.log("RFH is rendering....")

    let {register,handleSubmit,reset,formState:{errors}} = useForm();



  return (
        <div className="w-100 rounded-xl shadow-xl">
            REACT HOOK FORM
      <form onSubmit={handleSubmit((data)=>{
        console.log(data)
        reset();})}
         className="flex p-6 rounded-xl flex-col gap-3 bg-white ">
            
        <input 
        {...register("productName")}
          className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          type="text"placeholder="Enter Product Name"/>

        <input
        {...register("product")}
          className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          type="text"placeholder="Enter Product Price" />

         <input
         {...register("category")}
          className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          type="text"placeholder="Enter Product Category" />


        <input
        {...register("image")}
         className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" type="url"placeholder="Enter Image URL" />

        <button className="mt-1 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">
          Create Product
        </button>

      </form>



    </div>
  )
}

export default RHF