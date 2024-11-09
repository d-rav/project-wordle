import React from "react";

function GuessInput() {
  const [guessValue, setGuessValue] = React.useState("");
  return (
    <form className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Z]{5}"
        value={guessValue}
        onChange={(event) => {
          event.preventDefault();
          console.log(event.target.value);
          setGuessValue(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
