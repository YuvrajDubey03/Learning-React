
import React from "react";

const Login = ({ setIsLoggedIn, setUsers }) => {
  return (
<div >
    <div className=" w-100 max-w-xl h-100 flex flex-col gap-4 bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login Form
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-5 text-gray-600"> Don't have an account?{" "}
          <span
            onClick={() => setIsLoggedIn(prev => !prev)}
            className="text-blue-600 font-semibold cursor-pointer hover:underline" >
            Register here
          </span>
        </p>
    </div>
</div>
  );
};

export default Login;

