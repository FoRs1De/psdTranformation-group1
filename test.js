const aliens = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];

function greetAliens(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    console.log(
      'Oh powerful ' +
        myArray[i] +
        ', we humans offer our unconditional surrender!'
    );
  }
}

greetAliens(aliens);
