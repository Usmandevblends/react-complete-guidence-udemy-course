import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((response) => {
        setData(response.products); 
      });
  }, []);

  return (
    <div className="App">
      <h1 className="title">Product List from API</h1>

      <div className="product-container">
        {data.map((item) => (
          <div className="card-container" key={item.id}>
            <div className="card">
              <img className="card-image" src={item.image} alt={item.title} />
              <div className="card-details">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-description">{item.description}</p>
                <p className="card-price">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
