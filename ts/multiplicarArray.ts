const multiplicaTodoOArray = (array: number[]): number =>
  array.reduce((a, b) => a * b, 1);

console.log(multiplicaTodoOArray([1, 2, 3, 4, 5]));
