import React from "react";

const UserCard = ({user,
                  index,
                  setEditingIndex,
                  setToggle,
                  setUsers
                 }) => {
  return (
    <div className="w-64 rounded-2xl border border-white/10 bg-gray-900 p-4 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="h-52 w-full overflow-hidden rounded-xl">
        <img
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
          src={user.image}
          alt=""
        />
      </div>

      <div className="mt-4 flex flex-col gap-1 text-white">
        <h1 className="text-lg font-semibold">{user.name}</h1>
        <p className="text-sm text-gray-400">{user.email}</p>
        <p className="text-sm text-gray-400">{user.mobile}</p>
      </div>

      <div className="mt-5 flex w-full justify-between gap-3">
        <button onClick={()=>{
            setEditingIndex(index);
            setToggle((prev)=>!prev)
        }}
         className="flex-1 cursor-pointer rounded-lg bg-yellow-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-yellow-600 active:scale-95">
          Update
        </button>

        <button onClick={() =>{setUsers((prev) => prev.filter((_, i) => i !== index)); }}
         className="flex-1 cursor-pointer rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-95">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;