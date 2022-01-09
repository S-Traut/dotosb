import { fromFile } from "../src/storyboard.js";

const sb = fromFile('storyboard.osb');
sb.write('sb.osb');