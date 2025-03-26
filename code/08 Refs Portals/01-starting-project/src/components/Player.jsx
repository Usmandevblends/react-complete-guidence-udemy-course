import { useState } from "react";
export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);

  /**
   * Handles changes to the input field.
   * @param {ChangeEvent} event - The event triggered by the input field change.
   */
  const handleInputChange = (event) => {
    setIsNameSubmitted(false);
    setPlayerName(event.target.value);
    console.log(setPlayerName)
  };

  /**
   * Handles the submission of the player's name.
   */
  const handleSubmit = () => {
    setIsNameSubmitted(true);
  };

  return (
    <section id="player">
      <h2>
        Welcome{" "}
        {isNameSubmitted ? playerName : "unknown entity"}
      </h2>
      <p>
        <input
          type="text"
          value={playerName}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}