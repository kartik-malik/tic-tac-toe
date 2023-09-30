import { GridItem } from ".";

const hasPlayerWon = (player: GridItem, grid: Array<"x" | "o" | null>[]) => {

    // when grid is initialized every array item is null. 
  if (player === null) {
    return false;
  }

  let rowCheck = true,
    columnCheck = true;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      rowCheck = rowCheck && grid[i][j] == player;
      columnCheck = columnCheck && grid[j][i] == player;
    }
    if (rowCheck === true || columnCheck === true) {
      return true;
    }
    rowCheck=true,columnCheck=true;
  }

  let diagonal1Check = true,
    diagonal2Check = true;

  for (let i = 0; i < grid.length; i++) {
    diagonal1Check = diagonal1Check && grid[i][i] === player;
  }
  if (diagonal1Check) {
    return true;
  }

  let i = 0,
    j = grid.length - 1;

  while (i < grid.length && j>-1) {
    diagonal2Check = diagonal2Check && grid[i][j] === player;
    i++;
    j--;
  }
  return diagonal2Check;
};

export { hasPlayerWon };
