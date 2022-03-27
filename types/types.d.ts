declare module "dotosb" {
  class Storyboard {
    private layers: Map<string, Array<Sprite>>;

    createSprite(path: string, options?: Partial<SpriteOptions>): Sprite;
    write(file_path: string, quiet?: boolean): void;
    addSprite(sprite: Sprite): void;
    toString(): string;
  }

  enum Easing {
    Linear,
    Out,
    In,
    Quad,
    QuadOut,
    QuadInOut,
    CubicIn,
    CubicOut,
    CubicInOut,
    QuartIn,
    QuartOut,
    QuartInOut,
    QuintIn,
    QuintOut,
    QuintInOut,
    SineIn,
    SineOut,
    SineInOut,
    ExpoIn,
    ExpoOut,
    ExpoInOut,
    CircIn,
    CircOut,
    CircInOut,
    ElasticIn,
    ElasticOut,
    ElasticHalfOut,
    ElasticQuarterOut,
    ElasticInOut,
    BackIn,
    BackOut,
    BackInOut,
    BounceIn,
    BounceOut,
    BounceInOut,
  }

  enum Event {
    Fade = "F",
    Scale = "S",
    Rotate = "R",
    Move = "M",
    MoveX = "MX",
    MoveY = "MY",
    Color = "C",
    vecScale = "V",
  }

  function fromFile(file_path: string): Storyboard;
  function ease(easing: Easing, value: number): number;

  class Sprite {
    private events: [];
    private path: string;
    private origin: string;
    private layer: string;
    private x: number;
    private y: number;

    constructor(path: string, options?: Partial<SpriteOptions>);

    add(
      type: string,
      times: Array<number> | number,
      values: Array<number> | number,
      easing?: number
    ): void;

    param(start: number, end: number, type: string): void;

    createLoop(
      start: number,
      loop_count: number,
      events: Array<OsbEvent | OsbParameter>
    ): void;

    getAt(type: Event, time: number): number | number[];

    toString(): string;
  }

  type SpriteOptions = {
    layer?: String;
    origin?: String;
    x?: Number;
    y?: Number;
  };

  type OsbEvent = {
    type: string;
    easing: number;
    start: number;
    end: number;
    start_values: Array<number> | number;
    end_values: Array<number> | number;
    stringified: string;
  };

  type OsbParameter = {
    type: string;
    start: number;
    end: number;
    stringified: string;
  };

  function newEvent(
    type: string,
    times: Array<number> | number,
    values: Array<number> | number,
    easing: number
  ): OsbEvent;
  function newParam(start: number, end: number, type: string): OsbParameter;
}
