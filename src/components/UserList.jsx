import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('error fetching user data:', error);
      });

    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error('error fetching todo data:', error);
      });

    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('error fetching comment data:', error);
      });

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('error fetching post data:', error);
      });
  }, []);

  // Create a function to filter todos for each user
  const getUserTodos = (userId) => {
    return todos.filter((todo) => todo.userId === userId);
  };

  // Create a function to filter comments for each post
  const getPostComments = (postId) => {
    return comments.filter((comment) => comment.postId === postId);
  };

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

            <strong>Todos:</strong>
            <ul>
              {getUserTodos(user.id).map((todo) => (
                <li key={todo.id}>
                  {todo.title}
                </li>
              ))}
            </ul>

            <strong>Posts:</strong>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  {post.title}
                  <strong>Comments:</strong>
                  <ul>
                    {getPostComments(post.id).map((comment) => (
                      <li key={comment.id}>
                        {comment.body}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;