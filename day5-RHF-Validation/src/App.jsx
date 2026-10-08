import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)

  return (
    <div className="min-h-screen p-4 bg-linear-to-br from-gray-950 via-slate-900 to-gray-950 flex flex-col gap-5">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex flex-wrap gap-5">
        {users.map((elem , index)=>{
          return <UserCard 
            key={index} 
           index={index}
           user ={elem} 
           setUsers={setUsers}
           setToggle={setToggle} 
           setEditingIndex={setEditingIndex}
           />
        })}
        </div>
      ) : (
        <div className="flex flex-1 justify-center items-center">
          <Form 
             setUsers={setUsers}
             setToggle={setToggle}
            editingIndex={editingIndex}
            users={users}
            setEditingIndex={setEditingIndex}
            />
        </div>
      )}
    </div>
  );
};

export default App;