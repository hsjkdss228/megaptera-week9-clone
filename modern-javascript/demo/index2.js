/* eslint-disable no-console */

function carExample() {
  const tank = {
    name: '자동차',

    run() {
      console.log('부릉부릉~~');
      console.log(`나는야 부릉부릉 ${this.name}~~`);
    },
  };

  tank.run();
}

carExample();

function isBlocked({
  size, matrix, row, column,
}) {
  return row < 0 || row >= size || column < 0 || column >= size
  || matrix[row][column] > 0;
}

function step({
  size, matrix, position, direction, number,
}) {
  // 종료 조건
  if (number > size * size) {
    return;
  }

  const { row, column } = position;

  // eslint-disable-next-line no-param-reassign
  matrix[row][column] = number;

  const blocked = isBlocked({
    size, matrix, row: row + direction.row, column: column + direction.column,
  });

  // 필요 시 방향 변경
  const newDirection = !blocked
    ? direction
    : {
      row: direction.column,
      column: -direction.row,
    };

  // 재귀 호출
  step({
    size,
    matrix,
    position: {
      row: row + newDirection.row,
      column: column + newDirection.column,
    },
    direction: newDirection,
    number: number + 1,
  });
}

function spiralMatrix() {
  const size = 8;

  // initialize matrix
  const matrix = [...Array(size)].map(() => (
    Array(size).fill(0)
  ));

  const position = { row: 0, column: 0 };

  const direction = { row: 0, column: 1 };

  step({
    size,
    matrix,
    position,
    direction,
    number: 1,
  });

  matrix.forEach((i) => {
    console.log(i.join('\t'));
  });
}

spiralMatrix();
