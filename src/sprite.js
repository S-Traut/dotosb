import { newEvent, newParam } from "./event.js";

export class Sprite {

  events = [];
  path;
  origin;
  layer;
  x;
  y;

  constructor(path, options) {
    this.layer = options?.layer ?? "Background";
    this.origin = options?.origin ?? "Centre";
    this.path = path;
    this.x = options?.x ?? 320;
    this.y = options?.y ?? 240;
  }

  add(type, times, values, easing = 0) {
    const event = newEvent(type, times, values, easing);
    this.events.push(event);
  }

  param(start, end, type) {
    const param = newParam(start, end , type);
    this.events.push(param);
  }

  createLoop(start, loop_count, events) {

    let stringified = ` L,${start},${loop_count}`;
    for(let i = 0; i < events.length; i++) {
      stringified += `\n ${events[i].stringified}`;
    }
    
    const event = {
      type: 'L',
      start: start,
      loop_count: loop_count,
      events: events,
      stringified: stringified
    };

    this.events.push(event);
  }

  toString() {
    let sprite = `Sprite,${this.layer},${this.origin},"${this.path}",${this.x},${this.y}\n`;
    for(let i = 0; i < this.events.length; i++) {
      sprite += `${this.events[i].stringified}\n`;
    }
    return sprite;
  }
}