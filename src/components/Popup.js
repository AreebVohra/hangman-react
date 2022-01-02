import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain, score }) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  // checking if the user wins or losses
  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations! You won! 😃';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div>
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <h3>Score is: {score}</h3>
        <button onClick={playAgain}>Reset</button>
      </div>
    </div>
  )
}

export default Popup
