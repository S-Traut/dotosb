declare module "dotosb"

declare class Storyboard {

  private layers: Map<string, Array<Sprite>>
  
  createSprite(path: string, options: SpriteOptions): Sprite
  write(file_path: string): void
  toString(): string
}

declare function fromFile(file_path: string): Storyboard
