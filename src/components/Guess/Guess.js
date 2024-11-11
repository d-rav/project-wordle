import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { answer } from '../Game/Game';

function Guess({ guessValue = null }) {
  const guessStatus = checkGuess(guessValue, answer);
  return (
    <p className="guess">
      {guessValue &&
        guessValue.split('').map((letter, index) => {
          return (
            <span
              key={crypto.randomUUID()}
              className={`cell ${guessStatus[index].status}`}
            >
              {letter}
            </span>
          );
        })}
      {!guessValue &&
        range(0, 5).map((cell) => {
          return <span key={crypto.randomUUID()} className="cell"></span>;
        })}
    </p>
  );
}

export default Guess;
