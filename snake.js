// snake.js

// Set up the canvas
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

// Set canvas dimensions
const canvasSize = 400;
canvas.width = canvasSize;
canvas.height = canvasSize;

// Set initial snake position and size
let snake = [{ x: 10, y: 10 }];
const tileSize = 20;

// Set initial direction
let dx = tileSize;
let dy = 0;

// Main game loop
function gameLoop() {
  // Update snake position
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  // Check for collisions
  if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
    alert("Game over! You hit the wall.");
    document.location.reload();
  }

  // Draw the snake
  ctx.clearRect(0, 0, canvasSize, canvasSize);
  snake.forEach(segment => {
    ctx.fillStyle = "#00F";
    ctx.fillRect(segment.x, segment.y, tileSize, tileSize);
  });

  // Repeat the game loop
  setTimeout(gameLoop, 100);
}

// Handle keyboard input
document.addEventListener("keydown", event => {
  switch (event.key) {
    case "ArrowUp":
      dx = 0;
      dy = -tileSize;
      break;
    case "ArrowDown":
      dx = 0;
      dy = tileSize;
      break;
    case "ArrowLeft":
      dx = -tileSize;
      dy = 0;
      break;
    case "ArrowRight":
      dx = tileSize;
      dy = 0;
      break;
  }
});

// Append the canvas to the body
document.body.appendChild(canvas);

// Start the game loop
gameLoop();
