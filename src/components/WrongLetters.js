import React from 'react'

const WrongLetters = ({ wrongLetters, score }) => {

  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 &&
          <p>Wrong</p>
        }
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>
      <div>
        <p>Score</p>
        <span>{score}</span>
      </div>
    </div>
  )
}

export default WrongLetters
