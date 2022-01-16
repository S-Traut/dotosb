// Import the npm library
import { Storyboard } from "../index.js";
import { newEvent } from "../src/event.js";

const storyboard = new Storyboard();
const sprite = storyboard.createSprite('sb/p.png');

sprite.createLoop(12451, 4, [
  newEvent('F', [0, 300], [0, 1]),
  newEvent('F', [700, 1000], [1, 0]),
]);

/* OSB OUTPUT
Sprite,Background,Centre,"sb/p.png",320,240
 L,12451,4
  F,0,0,300,0,1
  F,0,700,1000,1,0
*/

// Render the storyboard
storyboard.write('storyboard.osb');



