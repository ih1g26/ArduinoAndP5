let port;
let distance = 0; // Perhaps in cm
let connectButton;

function setup() {
  createCanvas(600, 400);

  port = createSerial();

  connectButton = createButton("Connect to Arduino");
  connectButton.mousePressed(() => {
    port.open(9600);
  });
}

function draw() {
  background(240);

  // Read one complete line from Arduino
  let data = port.readUntil("\n");

  if (data.length > 0) {
    let value = Number(data.trim()); // String to number

		// Check number is valid and positive
    if (Number.isFinite(value) && value > 0) {
      distance = value;
    }
  }

  let diameter = map(distance, 5, 100, 300, 20);

  circle(width / 2, height / 2, diameter);
}