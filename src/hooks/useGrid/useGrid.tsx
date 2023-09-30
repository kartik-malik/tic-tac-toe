import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { GridItem } from "./useGrid.types";
import { hasPlayerWon } from "./useGrid.helpers";

const GRID_ARRAY = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const useGrid = () => {
  const [grid, setGrid] = useState<Array<GridItem>[]>(GRID_ARRAY);

  const [gameEnded, setGameEnded] = useState<{
    winner: GridItem;
    draw: boolean;
  } | null>(null);

  const [currentPlayer, setCurrentPlayer] = useState<GridItem>(null);

  const movesPlayed = useRef<number>(0);

  const updateGridCell = useCallback(
    (rowIdx: number, colIdx: number, data: GridItem) => {
      const updatedGrid = [...grid];
      updatedGrid[rowIdx][colIdx] = data;
      movesPlayed.current = movesPlayed.current + 1;

      const playerWon = hasPlayerWon(data, updatedGrid);

      if (playerWon) {
        setGameEnded({ winner: data, draw: false });
        setGrid(updatedGrid);
        setCurrentPlayer(data);
        return;
      }

      setGrid(updatedGrid);
      setCurrentPlayer(data);

      if (movesPlayed.current === 9) {
        setGameEnded({ winner: null, draw: true });
      }
    },
    [grid]
  );
  return {
    grid,
    updateGridCell,
    currentPlayer,
    gameEnded,
  };
};

const GridContext = createContext<ReturnType<typeof useGrid> | null>(null);

const GridProvider = ({ children }: PropsWithChildren) => {
  const ctxValue = useGrid();

  return (
    <GridContext.Provider value={ctxValue}>{children}</GridContext.Provider>
  );
};

const useGridContext = () => {
  const ctx = useContext(GridContext);
  if (ctx === null) {
    throw new Error("Component should be wrapped in Grid Provider");
  }
  return ctx;
};

export { useGridContext, GridProvider };
