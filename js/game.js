const gameplay = {
  turn: 'x', // Shows who is playing next.

  topLeft: 1,
  top: 2,
  topRight: 3,
  left: 4,
  center: 5,
  right: 6,
  bottomLeft: 7,
  bottom: 8,
  bottomRight: 9,

// Place an X in the quadrant clicked.
  placeX: function (click) {
    this[click] = 'x';
    this.turn = '0'
  },

// Place a 0 in the quadrant clicked.
  place0: function (click) {
    this[click] = '0'
    this.turn = 'x'
  },

// Resets the board.
  reset: function () {
    this.topLeft = 1;
    this.top = 2;
    this.topRight = 3;
    this.left = 4;
    this.center = 5;
    this.right = 6;
    this.bottomLeft = 7;
    this.bottom = 8;
    this.bottomRight = 9;
  },

// Checks the winning conditions.
  win: function () {

    // Horizontal winning conditions
    if (this.topLeft === this.top && this.topLeft === this.topRight && this.topLeft !== ' ') {
      this.winBlock();
    }

    if (this.left === this.center && this.left === this.right && this.left !== ' ') {
      console.log (`${this.left} wins!a`);
      this.winBlock();
    }

    if (this.bottomLeft === this.bottom && this.bottomLeft === this.bottomRight && this.bottomLeft !== ' ') {
      console.log (`${this.bottomLeft} wins!s`);
      this.winBlock();
    }

    // Vertical winning conditions
    if (this.topLeft === this.left && this.topLeft === this.bottomLeft && this.topLeft !== ' ') {
      console.log (`${this.topLeft} wins!d`);
      this.winBlock();
    }

    if (this.top === this.center && this.top === this.bottom && this.top !== ' ') {
      console.log (`${this.top} wins!f`);
      this.winBlock();
    }

    if (this.topRight === this.right && this.topRight === this.bottomRight && this.topRight !== ' ') {
      console.log (`${this.topRight} wins!g`);
      this.winBlock();
    }

    // Diagonal winning conditons
    if (this.topLeft === this.center && this.topLeft === this.bottomRight && this.topLeft !== ' ') {
      console.log (`${this.topLeft} wins!h`);
      this.winBlock();
    }

    if (this.topRight === this.center && this.topRight === this.bottomLeft && this.topRight !== ' ') {
      console.log (`${this.topRight} wins!j`);
      this.winBlock();
    }


  },

//After a player has won no more moves can be done.
  winBlock: function () {
    if (this.turn === '0') {
      this.tallyX += 1;
    } else {
      this.tallyZero += 1;
    }
    for (let i = 1; i < 10; i++){
      if ( Number.isInteger(this[ Object.keys(this)[i] ]) === true ) {
        this[ Object.keys(this)[i] ] = ' ';
      }
    }
  },

  tallyX: 0,
  tallyZero: 0,

}
