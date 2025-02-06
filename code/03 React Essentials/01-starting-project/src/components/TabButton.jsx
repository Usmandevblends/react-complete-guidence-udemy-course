import React from "react";

function TabButton({ label , onSelect }) {

  return (
    <li>
      <button onClick={onSelect}>{label}</button>
    </li>
  );
}

export default TabButton;
