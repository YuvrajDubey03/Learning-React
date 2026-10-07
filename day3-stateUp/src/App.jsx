
  import React, { useState } from "react"
  import Login from "./components/Login"
  import Register from "./components/Register"
  import UserCard from "./components/UserCard"

  const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
        const[users, setUsers] = useState([])
    return (
      <div className="min-h-screen w-full flex-col bg-blue-500 flex ">
   
      <Register setUsers={setUsers} setIsLoggedIn={setIsLoggedIn} />
       <div className =' mt-6 flex-wrap flex gap-4'>
        {users.map((elem)=>{ 
           return <UserCard user={elem}/>
        })}
       </div>
   
   
   
   
   
   
   
   
        {/* {isLoggedIn ?
        //  <Login setUsers={setUsers} setIsLoggedIn={setIsLoggedIn}   />
        users.map((elem)=>{ 
           return <UserCard user={elem}/>})
      
        : <Register setUsers={setUsers} setIsLoggedIn={setIsLoggedIn} />} */}
      </div>
    )
  }

  export default App