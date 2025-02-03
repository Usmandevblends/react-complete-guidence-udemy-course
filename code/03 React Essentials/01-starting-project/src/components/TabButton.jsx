import React from "react";

function TabButton({ label }) {
  function handleClick() {
    alert(`You clicked on ${label}`);
  }
  return (
    <li>
      <button onClick={handleClick}>{label}</button>
    </li>
  );
}

export default TabButton;
