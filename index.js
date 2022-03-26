const Storyboard = require('./src/storyboard.js');
const Sprite = require('./src/sprite.js');
const Animation = require('./src/animation');
const Events = require('./src/event.js');
const Easings = require('./src/easing.js');
const { EASINGS, EVENTS } = require('./src/utils.js');

exports.Storyboard = Storyboard.Storyboard;
exports.Sprite = Sprite.Sprite;
exports.Animation = Animation.Animation;
exports.createEvent = Events.newEvent;
exports.createParam = Events.newParam;
exports.Easing = EASINGS;
exports.Event = EVENTS;
exports.FromString = Storyboard.fromString;
exports.FromFile = Storyboard.fromFile;
exports.ease = Easings.ease;