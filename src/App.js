import React, { useState } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show } from './helpers/helpers';

import './App.css';

const words = ['application', 'programming', 'interface', 'wizard']; // list of words defined for the game
let selectedWord = words[Math.floor(Math.random() * words.length)]; // selecting random word from the list

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [score, setScore] = useState(300)

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);
    setScore(300);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  const handleKeyDown = (event) => {
    // The preventDefault() method of the Event interface tells the user agent that if the event does not
    // get explicitly handled, its default action should not be taken as it normally would be.
    event.preventDefault();

    const { key, keyCode } = event;

    // checking the keycode of the pressed keys from the keyboard
    // checking range of keys from A to B https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    if (playable && keyCode >= 65 && keyCode <= 90) {
      const letter = key.toLowerCase();
      if (selectedWord.includes(letter)) { // checking if the entered letter is present in the selected random word
        if (!correctLetters.includes(letter)) { // checking if the entered letter is correct then add it to correct list
          setCorrectLetters(currentLetters => [...currentLetters, letter]);
        } else {
          show(setShowNotification); // shows notification that the letter is already present in the list
        }
      } else {
        if (!wrongLetters.includes(letter)) { // checking if the entered letter is incorrect then add it to in-correct list
          setWrongLetters(currentLetters => [...currentLetters, letter]);
          setScore(score - 20); // deduct 20 points if the entered letter is incorrect
        } else {
          show(setShowNotification); // shows notification that the letter is already present in the list
        }
      }
    }
  }

  const handleChange = (e) => {
    console.log('handle change called')
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters score={score} wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <input type="text" value={correctLetters.toLocaleString()} onKeyDown={handleKeyDown} onChange={handleChange} />
      </div>
      <Popup
        score={score}
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
