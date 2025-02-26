
export const multiply = (x: number, y: number, z: number) => {
  return x * y * z;
}

export const calcMidpoint = (x: number, y: number) => {
  return ((x + y) / 2);
}

export const calcDistance = (x1: number, x2: number, y1: number, y2: number) => {
  return (
      Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))
  );
}

