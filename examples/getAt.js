import { Storyboard } from "../index.js";
console.clear();
const sb = new Storyboard();
const spr = sb.createSprite("p.png");

console.log("generating");

spr.add('F', [0, 10000], [0, 1], 19);
spr.add('S', [0, 20000], [0, 1]);
spr.add('V', [0, 10000], [20, 30, 35, 40]);

console.log("querying...");

const v = spr.getAt('V', 5000);
console.log(v);

console.log("end!");


