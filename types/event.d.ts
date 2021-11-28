type Event = {
  type: string,
  easing: number,
  start: number,
  end: number,
  start_values: Array<number> | number,
  end_values: Array<number> | number,
  stringified: string
}

type Parameter = {
  type: string,
  start: number,
  end: number,
  stringified: string,
}

function newEvent(type: string, times: Array<number>, values: Array<number>, easing: number): Event
function newParam(start: number, end: number, type: string): Parameter