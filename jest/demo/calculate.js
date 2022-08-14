export function plus(x, y) {
  return x + y;
}

export function minus(x, y) {
  return x - y;
}

const operationFunctions = {
  '+': plus,
  '-': minus,
};

export default function calculate(operation, x, y) {
  const f = operationFunctions[operation];
  return f(x, y);
}
