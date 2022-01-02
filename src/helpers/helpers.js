export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

// checking if the number of letters you entered are within the limits to win
export function checkWin(correct, wrong, word) {
  let status = 'win';

  // Check for win
  word.split('').forEach(letter => {
    if (!correct.includes(letter)) {
      status = '';
    }
  });

  // Check for lose
  if (wrong.length === 8) status = 'lose';

  return status
}