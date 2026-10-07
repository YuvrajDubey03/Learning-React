import React, { useRef } from 'react'
import { useState } from 'react';

const Form = () => {
    console.log("form rendering");
    let FormRef = useRef({});
 

const [products, setProducts] = useState({})
console.log(products)
  
    const handleSubmit =(e)=>{
        e.preventDefault();
    
      const obj ={
        pname:FormRef.current.productName.value,
        category:FormRef.current.category.value,
        price:FormRef.current.price.value,
        image:FormRef.current.image.value
      }
      setProducts(obj)
      
    }



  return (
    <div className="w-100 rounded-xl shadow-xl">
      <form onSubmit={handleSubmit}  className="flex p-6 rounded-xl flex-col gap-3 bg-white ">
        <input 
          ref={(e) =>  FormRef.current.productName = e}
          className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          type="text"placeholder="Enter Product Name"/>

        <input
          ref={(e)=> FormRef.current.price = e}
          className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          type="text"placeholder="Enter Product Price" />

        <span className="text-sm font-semibold text-gray-700"> Product Category </span>

        <select
          ref={(e)=>FormRef.current.category=e}
        className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" >
          <option value="">Select Category</option>
          <option value="mens">Men</option>
          <option value="womens">Women</option>
          <option value="kids">Kids</option>
        </select>

        <input
        ref={(e)=>FormRef.current.image = e}
          className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" type="url"placeholder="Enter Image URL" />

        <button className="mt-1 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">
          Create Product
        </button>

      </form>
      <h1>{products.pname}</h1>
      <h1>{products.price}</h1>
      <h1>{products.category}</h1>
      <h1>{products.image}</h1>


    </div>
  )
}

export default Form
