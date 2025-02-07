import React from 'react';

function CoreConcept({ CORE_CONCEPTS }) {
  return (
    CORE_CONCEPTS.map((item, index) => {
      return (
        <li key={index}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </li>
      );
    })
  );
}

export default CoreConcept;