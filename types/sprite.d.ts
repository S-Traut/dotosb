declare class Sprite {
  constructor(path: string, options: SpriteOptions)

  add(type: string, times: Array<number>, values: Array<number>, easing: number): void
  param(start: number, end: number, type: string): void
  createLoop(start: number, loop_count: number, events: Array<OsbEvent|OsbParameter>): void
  toString(): string
}

declare type SpriteOptions = {
  layer: String,
  origin: String,
  x: Number,
  y: Number
}

