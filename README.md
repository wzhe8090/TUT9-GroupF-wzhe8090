### 1. Instructions on how to interact with the artwork;

Each frame is driven by a random seed and a noise function that generates 1000 particles that form a painting based on time.

### 2. A detailed description of your personal approach to animating group codes.

Perlin noise and time, rendering 1000 particles per second to form a picture

### 3. Which properties of an image will be animated and how;

Each frame has a unique random seed, and noise value. to drive the particles to generate the frame.

### 4. refer to the inspiration for the animation of your individual code; these can be images (still images or gifs). How do they affect your submission?

Make up a random inspiration，Animation taught in class about dividing squares on the Mona Lisa

### 5. A short technical explanation of how your individual code animates an image, with appropriate references.

Create an animation effect by using the p5.js library.

It is firstly in the `setup` function where an image is loaded and resized to the size of the canvas. Then in the `draw` function, 1000 animated particles are generated per second.

The position (x, y) of each particle is chosen randomly within the width and height of the canvas.

Then, the colour of that position is taken from the image and the saturation and hue of the colour is mapped to the length and angle of the rectangle.

Next, a noise value is calculated and used to adjust the length and angle of the rectangle.

The noise value is calculated using the `noise` function, which generates a random number between 0 and 1 based on the x and y values.

The fill colour is then set to the colour of the image at that position and the current drawing style and transformations are saved.

Move the canvas to the randomly selected position, rotate the rectangle, and draw the rectangle. Finally, restore the previously saved drawing style and transform.

In this way, each particle draws a small rectangle at its position, with the colour and shape determined by the colour of the image at that position, creating a dynamic, image-colour based animation effect.

Reference:

1. [p5.js官方文档]([home | p5.js (p5js.org)](https://p5js.org/zh-Hans/))
2. [参考博客]([p5-vue：使用柏林噪声生成有趣的动态图案 – Sean 的个人博客 (smartline.cc)](https://smartline.cc/index.php/2020/05/24/p5-vue-perlin-noise/))
3. [参考博客](https://blog.csdn.net/weixin_48388330/article/details/122606095)

