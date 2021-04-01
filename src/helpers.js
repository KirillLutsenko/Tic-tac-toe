export const identifyWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++ ) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export const compStep = (gameFieldCopy) => {
  if (gameFieldCopy[4] == null) {
    gameFieldCopy[4] = 'O';
    console.log('way1')
  } else if (gameFieldCopy[0] === 'X' && gameFieldCopy[3] === 'X' && gameFieldCopy[4] === 'O') {
    gameFieldCopy[6] = 'O';
  } else if (gameFieldCopy[4] === 'X' || (gameFieldCopy[0] === 'X' && gameFieldCopy[1] === 'X' && gameFieldCopy[2] === null && gameFieldCopy[8] !=='X' )) {
    gameFieldCopy[2] = 'O';
    console.log('way2')
  }
}
//    else if (gameFieldCopy[6] === 'X' && gameFieldCopy[3] === null && gameFieldCopy[8] !== 'X') {
//     gameFieldCopy[3] = 'O';
//     console.log('way3')
//   } else if (gameFieldCopy[5] === null && gameFieldCopy[0] !== 'X' && gameFieldCopy[8] !== 'X' && gameFieldCopy[2] !== 'X') {
//     gameFieldCopy[5] = 'O';
//     console.log('way4')
//   } else if (gameFieldCopy[0] === 'X' && gameFieldCopy[2] === 'X' && gameFieldCopy[1] === null) {
//     gameFieldCopy[1] = 'O';
//     console.log('way5')
//   } else if (gameFieldCopy[6] === 'X' && gameFieldCopy[8] === 'X' && gameFieldCopy[7] === null) {
//     gameFieldCopy[7] = 'O';
//     console.log('way6')
//   } else if (gameFieldCopy[6] === 'X' && gameFieldCopy[8] === 'X' && gameFieldCopy[0] === 'X' && gameFieldCopy[1] === null) {
//     gameFieldCopy[1] = 'O';
//     console.log('way7')
//   } else if (gameFieldCopy[6] === 'X' && gameFieldCopy[8] === 'X' && gameFieldCopy[0] === 'X' && gameFieldCopy[5] === null) {
//     gameFieldCopy[5] = 'O';
//     console.log('way8')
//   } else if (gameFieldCopy[0] === 'X' && gameFieldCopy[2] === 'X' && gameFieldCopy[3] === 'X' && gameFieldCopy[1] === null) {
//     gameFieldCopy[1] = 'O';
//     console.log('way9')
//   } else if (gameFieldCopy[0] === 'X' && gameFieldCopy[2] === 'X' && gameFieldCopy[3] === 'X' && gameFieldCopy[7] === 'X') {
//     gameFieldCopy[8] = 'O';
//     console.log('way10')
//   } else if (gameFieldCopy[0] === 'X' && gameFieldCopy[2] === 'X' && gameFieldCopy[6] === 'X' && gameFieldCopy[7] === 'X') {
//     gameFieldCopy[5] = 'O';
//     console.log('way11')
//   } else if (gameFieldCopy[0] === 'X' && gameFieldCopy[1] === 'X' && gameFieldCopy[5] === 'X' && gameFieldCopy[6] === 'X' && gameFieldCopy[7] === null) {
//     gameFieldCopy[7] = 'O';
//     console.log('way12')
//   } else if (gameFieldCopy[0] === 'X' && gameFieldCopy[3] === 'X' && gameFieldCopy[7] === 'X' && gameFieldCopy[2] === null) {
//     gameFieldCopy[5] = 'O';
//     console.log('way13')
//   } else if (gameFieldCopy[0] === 'X' && gameFieldCopy[1] === 'X' && gameFieldCopy[3] === 'X' && gameFieldCopy[4] !== 'O' && gameFieldCopy[6] === 'O') {
//     gameFieldCopy[2] = 'O';
//     console.log('way14')
//   } 
