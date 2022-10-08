import React, { useState } from "react";

export default function Clock() {

 

  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  
  const addNewUser = () => {
    setUsers([...users, name]);
  };



  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label>New User:</label>
      <input className="border border-gray-200 pl-3 my-5" type="text" value={name} onChange={handleChange} />
      <button className="bg-gray-200 rounded-md px-2 py-1 ml-2"  onClick={addNewUser}>Add</button>
      <h4 className="font-bold">User List:</h4>
      <ol>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ol>
    </div>
  );
}