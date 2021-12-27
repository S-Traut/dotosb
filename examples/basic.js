import { newEvent, Storyboard } from "../index.js";

const storyboard = new Storyboard();

const sprite = storyboard.createSprite("sb/p.png");
sprite.add('C', 10, [100, 100, 100]);

sprite.createLoop(0, 10, [
  newEvent('F', [0, 100], [0.5, 0])
]);

storyboard.write('output.osb');

