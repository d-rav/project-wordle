import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function SubmittedGuesses({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => (
        <Guess key={crypto.randomUUID()} guessValue={guess} />
      ))}
      {range(0, NUM_OF_GUESSES_ALLOWED - guessList.length).map((cell) => {
        return <Guess key={crypto.randomUUID()} />;
      })}
    </div>
  );
}

export default SubmittedGuesses;
