import React from 'react';
import { answer } from '../Game/Game';

function GameOverBanner({ status, guessCount }) {
  return (
    <div className={`${status === 'win' ? 'happy' : 'sad'} banner`}>
      {status === 'win' && (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {guessCount} {guessCount === 1 ? 'guess' : 'guesses'}
          </strong>
          .
        </p>
      )}
      {status === 'lose' && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default GameOverBanner;
