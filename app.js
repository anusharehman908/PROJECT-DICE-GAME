// const diceFaces = ['⚀','⚁','⚂','⚃','⚄','⚅'];

//   // Roll Player Dice
//   function rollPlayer() {
//     const userDice = document.getElementById('userDice');
//     const randomIndex = Math.floor(Math.random() * 6);

//     userDice.classList.add('roll');

//     setTimeout(() => {
//       userDice.textContent = diceFaces[randomIndex];
//       userDice.classList.remove('roll');
//       checkResult();
//     }, 400);
//   }

//   // Roll Computer Dice
//   function rollComputer() {
//     const computerDice = document.getElementById('computerDice');
//     const randomIndex = Math.floor(Math.random() * 6);

//     computerDice.classList.add('roll');

//     setTimeout(() => {
//       computerDice.textContent = diceFaces[randomIndex];
//       computerDice.classList.remove('roll');
//       checkResult();
//     }, 400);
//   }

//   // Check for winner only if 6 rolled
//   function checkResult() {
//     const playerFace = document.getElementById('userDice').textContent;
//     const compFace = document.getElementById('computerDice').textContent;

//     const faces = {'⚀':1, '⚁':2, '⚂':3, '⚃':4, '⚄':5, '⚅':6};
//     const playerVal = faces[playerFace];
//     const compVal = faces[compFace];

//     const message = document.getElementById('resultMessage');

//     if (playerVal === 6 && compVal === 6) {
//       message.textContent = "🎉 Both rolled 6! It's a tie!";
//       message.style.color = '#006400';
//     } else if (playerVal === 6) {
//       message.textContent = '🎉 Player Wins by rolling a 6!';
//       message.style.color = '#006400';
//     } else if (compVal === 6) {
//       message.textContent = '💻 Computer Wins by rolling a 6!';
//       message.style.color = '#B22222';
//     } else {
//       message.textContent = 'No one wins unless you roll a 6!';
//       message.style.color = '#666';
//     }
//   }










































const diceFaces = ['⚀','⚁','⚂','⚃','⚄','⚅'];

// User manually roll karega
function rollPlayer() {
  const userDice = document.getElementById('userDice');
  const randomIndex = Math.floor(Math.random() * 6);

  userDice.classList.add('roll');

  setTimeout(() => {
    userDice.textContent = diceFaces[randomIndex];
    userDice.classList.remove('roll');

    // Jaise hi user roll kare, computer apna dice roll kare
    setTimeout(() => {
      rollComputer();
    }, 500);
  }, 400);
}

// Computer automatic roll karta hai
function rollComputer() {
  const computerDice = document.getElementById('computerDice');
  const randomIndex = Math.floor(Math.random() * 6);

  computerDice.classList.add('roll');

  setTimeout(() => {
    computerDice.textContent = diceFaces[randomIndex];
    computerDice.classList.remove('roll');
    checkResult();
  }, 400);
}

// Result check hota hai
function checkResult() {
  const playerFace = document.getElementById('userDice').textContent;
  const compFace = document.getElementById('computerDice').textContent;

  const faces = {'⚀':1, '⚁':2, '⚂':3, '⚃':4, '⚄':5, '⚅':6};
  const playerVal = faces[playerFace];
  const compVal = faces[compFace];

  const message = document.getElementById('resultMessage');

  if (playerVal === 6 && compVal === 6) {
    message.textContent = "🎉 Both rolled 6! It's a tie!";
    message.style.color = '#006400';
  } else if (playerVal === 6) {
    message.textContent = '🎉 Player Wins by rolling a 6!';
    message.style.color = '#006400';
  } else if (compVal === 6) {
    message.textContent = '💻 Computer Wins by rolling a 6!';
    message.style.color = '#B22222';
  } else {
    message.textContent = 'No one wins unless you roll a 6!';
    message.style.color = '#666';
  }
}
