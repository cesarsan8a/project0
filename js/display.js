const render = function () {
  $('img').addClass('empty');

  if ( gameplay.topLeft === 'x' ) {
    $('#xTopLeft').removeClass('empty')
  } else if ( gameplay.topLeft === '0' ) {
    $('#zeroTopLeft').removeClass('empty')
  };

  if ( gameplay.top === 'x' ) {
    $('#xTop').removeClass('empty')
  } else if ( gameplay.top === '0' ) {
    $('#zeroTop').removeClass('empty')
  };

  if ( gameplay.topRight === 'x' ) {
    $('#xTopRight').removeClass('empty')
  } else if ( gameplay.topRight === '0' ) {
    $('#zeroTopRight').removeClass('empty')
  };

  if ( gameplay.left === 'x' ) {
    $('#xLeft').removeClass('empty')
  } else if ( gameplay.left === '0' ) {
    $('#zeroLeft').removeClass('empty')
  };

  if ( gameplay.center === 'x' ) {
    $('#xCenter').removeClass('empty')
  } else if ( gameplay.center === '0' ) {
    $('#zeroCenter').removeClass('empty')
  };

  if ( gameplay.right === 'x' ) {
    $('#xRight').removeClass('empty')
  } else if ( gameplay.right === '0' ) {
    $('#zeroRight').removeClass('empty')
  };

  if ( gameplay.bottomLeft === 'x' ) {
    $('#xBottomLeft').removeClass('empty')
  } else if ( gameplay.bottomLeft === '0' ) {
    $('#zeroBottomLeft').removeClass('empty')
  };

  if ( gameplay.bottom === 'x' ) {
    $('#xBottom').removeClass('empty')
  } else if ( gameplay.bottom === '0' ) {
    $('#zeroBottom').removeClass('empty')
  };

  if ( gameplay.bottomRight === 'x' ) {
    $('#xBottomRight').removeClass('empty')
  } else if ( gameplay.bottomRight === '0' ) {
    $('#zeroBottomRight').removeClass('empty')
  };

  gameplay.win();
  console.log(gameplay.tallyZero);
  console.log(gameplay.tallyX);
  $('#score0').text(gameplay.tallyZero);
  $('#scoreX').text(gameplay.tallyX);
}


$(document).ready(function () {
  render();

  $('#topLeft').on('click', function () {
    if (gameplay.topLeft === 1) {
      if (gameplay.turn === 'x') {
        gameplay.placeX('topLeft');
        render();
      } else {
        gameplay.place0('topLeft');
        render();
      }
    }
  })

  $('#top').on('click', function () {
    if (gameplay.top === 2) {
      if (gameplay.turn === 'x') {
        gameplay.placeX('top');
        render();
      } else {
        gameplay.place0('top');
        render();
      }
    }
  })

  $('#topRight').on('click', function () {
    if (gameplay.topRight === 3) {
      if (gameplay.turn === 'x') {
        gameplay.placeX('topRight');
        render();
      } else {
        gameplay.place0('topRight');
        render();
      }
    }
  })

  $('#left').on('click', function () {
    if (gameplay.left === 4) {
      if (gameplay.turn === 'x') {
        gameplay.placeX('left');
        render();
      } else {
        gameplay.place0('left');
        render();
      }
    }
  })

  $('#center').on('click', function () {
    if (gameplay.center === 5) {
      if (gameplay.turn === 'x') {
        gameplay.placeX('center');
        render();
      } else {
        gameplay.place0('center');
        render();
      }
    }
  })

  $('#right').on('click', function () {
    if (gameplay.right === 6) {
      if (gameplay.turn === 'x') {
        gameplay.placeX('right');
        render();
      } else {
        gameplay.place0('right');
        render();
      }
    }
  })

  $('#bottomLeft').on('click', function () {
    if (gameplay.bottomLeft === 7) {
      if (gameplay.turn === 'x') {
        gameplay.placeX('bottomLeft');
        render();
      } else {
        gameplay.place0('bottomLeft');
        render();
      }
    }
  })

  $('#bottom').on('click', function () {
    if (gameplay.bottom === 8) {
      if (gameplay.turn === 'x') {
        gameplay.placeX('bottom');
        render();
      } else {
        gameplay.place0('bottom');
        render();
      }
    }
  })

  $('#bottomRight').on('click', function () {
    if (gameplay.bottomRight === 9) {
      if (gameplay.turn === 'x') {
        gameplay.placeX('bottomRight');
        render();
      } else {
        gameplay.place0('bottomRight');
        render();
      }
    }
  })

  $('#resetButton').on('click', function() {
    gameplay.reset();
    render();
  })

});
