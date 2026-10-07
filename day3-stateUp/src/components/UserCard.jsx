
import React from "react";

const UserCard = ({ user }) => {
  return (
   <div className="w-72 p-5 flex flex-col gap-4 bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
        <img
          className="w-full h-full object-cover"
          src={user.image}
          alt="User"
        />
      </div>

      <div className="flex-1">
        <h1 className="text-xl font-bold text-gray-800">
          {user.name}
        </h1>

        <p className="text-sm text-gray-500 break-all">
          {user.email}
        </p>

        <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;

