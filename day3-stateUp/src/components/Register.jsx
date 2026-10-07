import React from "react";
import { useState } from "react";

const Register = ({ setIsLoggedIn, setUsers }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        image: ""
    })
      

   

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers((prev) => [...prev, formData]);    
        setFormData({
            name: "",
            email: "",
            password: "",
            image: ""
        })
        setIsLoggedIn(true);
     }

  return (
 <div >
    <div className="w-120  max-w-xl h-130 flex flex-col gap-4 bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Register Form
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input  onChange={handleChange}
            value={formData.name}
            required
            name="name"
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />

          <input onChange={handleChange}
            required
            value={formData.email}
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />
        
          <input onChange={handleChange}
            required
            value={formData.password}
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />
          <input onChange={handleChange}
            required
            value={formData.image}
            name="image"
            type="url"
            placeholder="image-url"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            Register
          </button>
        </form>

        <p className="text-center mt-5 text-gray-600"> Already have an account?{" "}
            <span onClick={() => setIsLoggedIn(prev => !prev)} className="text-blue-600 font-semibold cursor-pointer hover:underline" >
            Login
          </span>
        </p>
    </div>
</div>
  );
};

export default Register;

