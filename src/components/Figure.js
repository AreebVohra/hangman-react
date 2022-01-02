import React from 'react'

const hm1 = require('../images/hangman1.png');
const hm2 = require('../images/hangman2.png');
const hm3 = require('../images/hangman3.png');
const hm4 = require('../images/hangman4.png');
const hm5 = require('../images/hangman5.png');
const hm6 = require('../images/hangman6.png');
const hm7 = require('../images/hangman7.png');
const hm8 = require('../images/hangman8.png');
const gameover = require('../images/hangman9.png');

// rendering the hangman image according to the number of incorrect gusses
const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length;
  const images = [hm1, hm2, hm3, hm4, hm5, hm6, hm7, hm8, gameover]

  let alttext = "y";
  return (
    <div>
      <img width={250} height={250} src={images[errors]} alt={alttext} />
    </div>
  )
}

export default Figure
