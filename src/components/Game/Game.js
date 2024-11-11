import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import SubmittedGuesses from '../SubmittedGuesses/SubmittedGuesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GameOverBanner from '../GameOverBanner/GameOverBanner';

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('ongoing');

  const submitGuess = (guess) => {
    if (guess === answer) {
      setGameStatus('win');
    } else if (guessList.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus('lose');
    }
    setGuessList([...guessList, guess]);
  };

  return (
    <>
      <SubmittedGuesses guessList={guessList}></SubmittedGuesses>
      <GuessInput
        isDisabled={gameStatus !== 'ongoing'}
        submitGuess={submitGuess}
      ></GuessInput>
      {gameStatus !== 'ongoing' && (
        <GameOverBanner status={gameStatus} guessCount={guessList.length} />
      )}
    </>
  );
}

export default Game;
