let img; // Define a global variable to store the image
// Setup function to initialise the canvas and image
function setup() {
    createCanvas(windowWidth, windowHeight); // Create a canvas the same size as the window
    img = loadImage("R.jpg", function() { // Load the image and store it in the img variable
        img.resize(width, height); // Resize image to canvas size
    });
    background(0); // Set the background to black
    noStroke(); // No Border Drawing
    randomSeed(1000);
}

// Draw function to draw an image on the canvas
function draw() {
    let seed = millis() * 0.001; // Using time as a random value
    randomSeed(seed); // Use of random seeds
    for (let i = 0; i < 1000; i++) { // Generate 1000 animated particles per second
        let x = int(random(width)); // Randomly select an x-coordinate within the width of the canvas
        let y = int(random(height)); // Randomly select a y-coordinate within the height range of the canvas
        let col = img.get(x, y); // Get the colour of this coordinate point
        
        // Calculate the length and angle of a rectangle
        let length = map(saturation(col), 0, 255, 1, 40); // Mapping saturation of colours to lengths
        let angle = map(hue(col), 0, 255, 0, 360); // 
        
        // Add noise
        let n = noise(x * 0.01, y * 0.01); // Calculate the noise level
        console.log(n)
        length *= n; // Adjusting length with noise level
        angle += n * 360; // Adjusting the angle with the noise level
        
        // Setting the fill colour
        fill(red(col), green(col), blue(col), 127); // Setting the fill colour
        
        // Save the current drawing style and transformations
        push();
        // Move to a randomly selected location
        translate(x, y); 
        // rotating rectangle
        rotate(radians(angle));
        // Draw a rectangle
        rect(0, 0, length, 1);
        // Restore previously saved drawing styles and transformations
        pop();
    }
}
