import React, { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="container">
      <h1>Simple Dashboard</h1>
      <div className="card-container">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
