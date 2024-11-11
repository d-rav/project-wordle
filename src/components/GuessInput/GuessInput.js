import React from 'react';

function GuessInput({ submitGuess }) {
  const [guessValue, setGuessValue] = React.useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submitGuess(guessValue);
        setGuessValue('');
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="5 letter word"
        value={guessValue}
        onChange={(event) => {
          setGuessValue(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
