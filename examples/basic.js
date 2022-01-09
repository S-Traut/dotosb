import { newEvent, Storyboard } from "../index.js";

const storyboard = new Storyboard();

for (let i = 0; i < 1000; i++) {
  const sprite = storyboard.createSprite('sb/p.png');
  sprite.add('F', [i, 1000], [0, 1]);
}


storyboard.write('output.osb');

