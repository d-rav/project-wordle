import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import SubmittedGuesses from '../SubmittedGuesses/SubmittedGuesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  const submitGuess = (guess) => {
    if (guessList.length < NUM_OF_GUESSES_ALLOWED) {
      setGuessList([...guessList, guess]);
    } else {
      window.alert('Reached maximum number of guesses');
    }
  };

  return (
    <>
      <SubmittedGuesses guessList={guessList}></SubmittedGuesses>
      <GuessInput submitGuess={submitGuess}></GuessInput>
    </>
  );
}

export default Game;
