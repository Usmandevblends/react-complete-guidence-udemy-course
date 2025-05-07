import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then((res) => res.json())
      .then((response) => {
        console.log('API Response:', response);
        setData(response);
        setTimeout(() => {
        setLoading(false);
          },3000);
      });
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>User List from API</h1>
      <ul style={{ listStyleType: 'none' }}>
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <li key={index} className="skeleton-card">
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text short"></div>
              </li>
            ))
          : data.map((item) => (
              <li key={item.id} className="comment-card">
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Email:</strong> {item.email}</p>
                <p><strong>Comment:</strong> {item.body}</p>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default App;
