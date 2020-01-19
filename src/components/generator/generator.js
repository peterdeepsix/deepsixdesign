import React, { useEffect } from 'react';
import usePersistentCanvas from '../../hooks/usePersistentCanvas';
import Button from '@material-ui/core/Button';

var white = '#F2F5F1';
var colors = ['#D40920', '#1356A2', '#F7D842'];
const size = 300;
const step = size / 6;
const squares = [
  {
    x: 0,
    y: 0,
    width: size,
    height: size,
  },
];

function draw(ctx, location) {
  for (var i = 0; i < size; i += step) {
    splitSquaresWith({ y: i });
    splitSquaresWith({ x: i });
  }
  for (var i = 0; i < colors.length; i++) {
    squares[Math.floor(Math.random() * squares.length)].color =
      colors[i];
  }
  for (var i = 0; i < squares.length; i++) {
    ctx.beginPath();
    ctx.rect(
      squares[i].x,
      squares[i].y,
      squares[i].width,
      squares[i].height,
    );
    if (squares[i].color) {
      ctx.fillStyle = squares[i].color;
    } else {
      ctx.fillStyle = white;
    }
    ctx.fill();
    ctx.stroke();
  }
}

function splitSquaresWith(coordinates) {
  const { x, y } = coordinates;

  for (var i = squares.length - 1; i >= 0; i--) {
    const square = squares[i];

    if (x && x > square.x && x < square.x + square.width) {
      if (Math.random() > 0.5) {
        squares.splice(i, 1);
        splitOnX(square, x);
      }
    }

    if (y && y > square.y && y < square.y + square.height) {
      if (Math.random() > 0.5) {
        squares.splice(i, 1);
        splitOnY(square, y);
      }
    }
  }
}

function splitOnX(square, splitAt) {
  var squareA = {
    x: square.x,
    y: square.y,
    width: square.width - (square.width - splitAt + square.x),
    height: square.height,
  };

  var squareB = {
    x: splitAt,
    y: square.y,
    width: square.width - splitAt + square.x,
    height: square.height,
  };

  squares.push(squareA);
  squares.push(squareB);
}

function splitOnY(square, splitAt) {
  var squareA = {
    x: square.x,
    y: square.y,
    width: square.width,
    height: square.height - (square.height - splitAt + square.y),
  };

  var squareB = {
    x: square.x,
    y: splitAt,
    width: square.width,
    height: square.height - splitAt + square.y,
  };

  squares.push(squareA);
  squares.push(squareB);
}

const Generator = () => {
  const [locations, setLocations, canvasRef] = usePersistentCanvas(
    draw,
  );

  function handleCanvasClick(e) {
    const newLocation = { x: e.clientX, y: e.clientY };
    setLocations([...locations, newLocation]);
  }
  function handleClear() {
    setLocations([]);
  }
  function handleUndo() {
    setLocations(locations.slice(0, -1));
  }

  React.useEffect(() => {
    draw();
  });

  return (
    <>
      <div className="controls">
        <Button onClick={handleCanvasClick}>Draw</Button>
        <Button onClick={handleClear}>Clear</Button>
        <Button onClick={handleUndo}>Undo</Button>
      </div>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={handleCanvasClick}
      />
    </>
  );
};
export default Generator;
