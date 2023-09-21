import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Id:</strong> {user.id}<br />
            <strong>Name:</strong> {user.name}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Username:</strong> {user.username}<br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
