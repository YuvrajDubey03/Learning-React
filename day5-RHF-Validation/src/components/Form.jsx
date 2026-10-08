import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Form = ({setUsers , 
               setToggle,
               editingIndex,
               users,
               setEditingIndex}) => {
    let {register ,
         handleSubmit,
         reset,
         formState:{errors }} =useForm({mode :"onChange"})

  useEffect(()=>{
    if(editingIndex !==null){
        reset(users[editingIndex])
    }
  },[editingIndex,users,reset])
    
    

    let formSubmit =(data)=>{
    if(editingIndex!==null){
        setUsers((prev)=>
            prev.map(( user,index)=>{
               return index ===editingIndex ?data :user
            })
        )
    }else{

      setUsers((prev) => [...prev, data]);
    }
          reset();
          setEditingIndex(null)
         setToggle(true)
    }


  return (
    <div className="w-full h-[80vh] max-w-md">

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white text-center"> {editingIndex !== null
            ? "Update User"
            : "Create User"}</h1>
     
      </div>

      <form onSubmit={handleSubmit(formSubmit)}
      className="flex   flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-200">
            Full Name
          </label>
        <input
             {...register("name",{
            required:"Name is Required",
            minLength:{
                value:3,
                message:"Name should be greater than 3 digits"
            }, pattern: {
                        value: /^\S(?:.*\S)?$/,
                        message: "Name cannot start or end with spaces",
                                }
              })}
            type="text"
            placeholder="Enter your name"
            className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-gray-500 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
        {errors.name && <p className="h-5 text-sm font-semibold text-red-500"> {errors.name.message }</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-200">
            Email Address
          </label>
          <input
            {...register("email",{
            required:"email is required",
            pattern:{
                value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:"please enter a valid email address"
            }
             })}
            type="email"
            placeholder="Enter your email"
            className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-gray-500 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
             {errors.email && <p className="h-5 text-sm font-semibold text-red-500"> {errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-200">
            Mobile Number
          </label>
          <input
          {...register("mobile",{
            required:"Mobile No is Required",
            minLength:{
                value:10,
                message:"Mobile no should be 10 Digits"
            },
            maxLength:{
                value:10,
                message:"Mobile no should be 10 Digits"
            }
          })}
            type="number"
            placeholder="Enter your mobile number"
            className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-gray-500 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
             {errors.mobile && <p className="h-5 text-sm font-semibold text-red-500"> {errors.mobile.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-200">
            Profile Image
          </label>
          <input
          {...register("image",{
            required:"Image is required"
          })}
            type="url"
            placeholder="Enter image URL"
            className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-gray-500 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
             {errors.image && <p className="h-5 text-sm font-semibold text-red-500"> {errors.image.message}</p>}
        </div>

        <button
          type="submit"
          className="mt-2 rounded-lg bg-blue-600 px-4 py-3 cursor-pointer font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
        >
         {editingIndex !== null
            ? "Update User"
            : "Create User"}
        </button>
      </form>
    </div>
  );
};

export default Form;