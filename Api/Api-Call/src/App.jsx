import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then((res) => res.json())
      .then((response) => {
        console.log('API Response:', response);
        setData(response);
      });
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>User List from API</h1>
      <ul style={{ listStyleType: 'none',}}>
        {data.map((item) => (
          <li key={item.id}>
            <strong>Name:</strong> {item.name} <br />
            <strong>Email:</strong> {item.email} <br />
            <strong>Comment:</strong> {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
