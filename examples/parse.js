import { fromFile } from "../src/storyboard.js";
import { commands } from "../src/utils.js";

const sb = fromFile('storyboard.osb');
sb.write('sb.osb');
