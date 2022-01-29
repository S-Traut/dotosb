import { ease } from "../src/easing.js";
import { Storyboard } from "../src/storyboard.js";
import { EASINGS } from "../src/utils.js";

const sb = new Storyboard();
const spr = sb.createSprite('bg.jpg');

for (let i = 0; i < 100000; i += 1000) {
  spr.add('F', [i, i + 1000], [1, 0]);
}

const event = spr.getEventAt(55600);

console.log(event);