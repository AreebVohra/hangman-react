import React from 'react'

// rendering the wrong list of words with commas ',' 
const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 &&
          <p>Wrong</p>
        }
        {
          wrongLetters
            .map((letter, i) => <span key={i}>{letter}</span>) // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.  
            .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null) // The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. 
        }
      </div>
    </div>
  )
}

export default WrongLetters
