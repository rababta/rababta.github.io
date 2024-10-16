// Get the SVG element
const svg = document.getElementById('leWittArt');

// Define the length of each line in pixels (10 inches = 960 pixels)
// const lineLength = 60;
// Number of lines to generate (10,000)
// const lineCount = 2000;
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

// Create line function that appends a line to the SVG
//function createLine(x1, y1, x2, y2, stroke = 'black', strokeWidth = 0.5) {
//  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
// Create circle function that appends a circle to the SVG
function createCircle(cx, cy, r = circleRadius, fill = 'black') {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

  // Set attributes
  //line.setAttribute('x1', x1);
  //line.setAttribute('y1', y1);
  //line.setAttribute('x2', x2);
  //line.setAttribute('y2', y2);
  //line.setAttribute('stroke', stroke);
  //line.setAttribute('stroke-width', strokeWidth);
  circle.setAttribute('cx', cx);
  circle.setAttribute('cy', cy);
  circle.setAttribute('r', r);
  circle.setAttribute('fill', fill);

  // Append line to SVG
  //return line
  // Append circle to SVG
  return circle;
}

//let line = createLine(10,10,40,40, "red",1)
//svg.append(line)
 //Function to generate random coordinates within the SVG canvas
 //function getRandomPosition(width, height, padding = 100) {
   //const x = Math.random() * (width - padding * 2) + padding;
   //const y = Math.random() * (height - padding * 2) + padding;
   //return { x, y };
 //}
// Function to generate random coordinates within the SVG canvas
function getRandomPosition(width, height, padding = 100) {
  const x = Math.random() * (width - padding * 2) + padding;
  const y = Math.random() * (height - padding * 2) + padding;
  return { x, y };
}

 //Generate lines and add them to the SVG
// for (let i = 0; i < lineCount; i++) {
    //Get random starting coordinates
  // const { x: x1, y: y1 } = getRandomPosition(svg.clientWidth, svg.clientHeight);
// Generate circles and add them to the SVG
for (let i = 0; i < circleCount; i++) {
  // Get random coordinates for the circle's center
  const { x, y } = getRandomPosition(svg.clientWidth, svg.clientHeight);

   // Calculate the end coordinates based on a random angle
   //const angle = Math.random() * 360;
   //const x2 = x1 + lineLength * Math.cos(angle * (Math.PI / 180));
   //const y2 = y1 + lineLength * Math.sin(angle * (Math.PI / 180));
  // Get a random color for the circle
  const randomColor = getRandomColor();

   // Use the createLine function to draw the line
   //let line = createLine(x1, y1, x2, y2);
   //svg.append(line)
 //}
  // Use the createCircle function to draw the circle with a random color
  let circle = createCircle(x, y, circleRadius, randomColor);
  svg.append(circle);
}