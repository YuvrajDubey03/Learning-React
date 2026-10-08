import React from "react";

const Navbar = ({setToggle}) => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-3 text-white shadow-lg backdrop-blur-md">
      
      <div>
        <img
          className="w-11 rounded-full border-2 border-blue-500/50 object-cover transition duration-300 hover:scale-105"
          src="https://imgs.search.brave.com/fbCwj2KI8DVABmh7O2BjOj4U1GTKk58iZk9gy6d8_-s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wODQv/NDU3LzIzMS9zbWFs/bC95b3VuZy1tYW4t/cHJvZmlsZS1pY29u/LXdpdGgtY2FzdWFs/LWNsb3RoaW5nLWFu/ZC1mcmllbmRseS1m/bGF0LWljb24tYXZh/dGFyLWZvci11c2Vy/LXByb2ZpbGUtYW5k/LWRpZ2l0YWwtaWRl/bnRpdHktY2xlYW4t/bW9kZXJuLWlsbHVz/dHJhdGlvbi1pZGVh/bC1mb3ItaW50ZXJm/YWNlLWRhc2hib2Fy/ZC1jb250YWN0LWZy/ZWUtdmVjdG9yLmpw/Zw"
          alt=""
        />
      </div>

      <div className="flex gap-8 font-semibold">
        <p className="cursor-pointer text-gray-300 transition hover:text-white">
          Home
        </p>

        <p className="cursor-pointer text-gray-300 transition hover:text-white">
          About
        </p>

        <p className="cursor-pointer text-gray-300 transition hover:text-white">
          Contact
        </p>
      </div>

      <button onClick={()=>{setToggle((prev)=>!prev)}}
      className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-blue-500/20 active:scale-95">
        Create User
      </button>
    </div>
  );
};

export default Navbar;