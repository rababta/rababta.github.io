// Get the SVG element
const svg = document.getElementById('leWittArt');

// Define the radius of each circle in pixels
const circleRadius = 10;

// Number of circles to generate
const circleCount = 2000;

// Function to generate random colors
// I used ChatGPT to ask how can I assign random colors to the circles 
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); 
  const g = Math.floor(Math.random() * 256); 
  const b = Math.floor(Math.random() * 256); 
  
  return `rgb(${r}, ${g}, ${b})`; 
}

// Create circle function that appends a circle to the SVG
function createCircle(cx, cy, r = circleRadius, fill = 'black') {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  
  // Set attributes
  circle.setAttribute('cx', cx);
  circle.setAttribute('cy', cy);
  circle.setAttribute('r', r);
  circle.setAttribute('fill', fill);
  
  // Append circle to SVG
  return circle;
}

// Function to generate random coordinates within the SVG canvas
function getRandomPosition(width, height, padding = 100) {
  const x = Math.random() * (width - padding * 2) + padding;
  const y = Math.random() * (height - padding * 2) + padding;
  return { x, y };
}

// Generate circles and add them to the SVG
for (let i = 0; i < circleCount; i++) {
  // Get random coordinates for the circle's center
  const { x, y } = getRandomPosition(svg.clientWidth, svg.clientHeight);
  
  // Get a random color for the circle
  const randomColor = getRandomColor();
  
  // Use the createCircle function to draw the circle with a random color
  let circle = createCircle(x, y, circleRadius, randomColor);
  svg.append(circle);
}