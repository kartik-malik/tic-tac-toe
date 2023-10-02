import cx from "classnames";
import { useGridContext } from "../../hooks/useGrid";
import styles from "./grid.module.scss";
import { DragEvent, PropsWithChildren } from "react";
import { GridItem } from "../../hooks/useGrid";
import Circle from "../../assets/icons/Circle";
import Cross from "../../assets/icons/Cross";
import useWindowSize from "../../hooks/useWindowSize";
import { MOBILE_WIDTH } from "../../constants";

interface CellProps {
  rowIdx: number;
  colIdx: number;
}

/**
 * @description Adds Borders around the cell
 */
const CellUiContainer = ({
  children,
  colIdx,
  rowIdx,
}: PropsWithChildren<{ colIdx: number; rowIdx: number }>) => {
  return (
    <div
      className={cx(styles.box, {
        [styles.noBorderTop]: rowIdx == 0,
        [styles.noBorderLeft]: colIdx == 0,
        [styles.noBorderRight]: colIdx == 2,
        [styles.noBorderBottom]: rowIdx == 2,
      })}
    >
      {children}
    </div>
  );
};

const StaticCell = ({ colIdx, rowIdx }: CellProps) => {
  const { grid } = useGridContext();

  if (grid[rowIdx][colIdx] === "x") {
    return (
      <CellUiContainer colIdx={colIdx} rowIdx={rowIdx}>
        <Cross className={styles.boardMarkerCross} color="white" />
      </CellUiContainer>
    );
  }
  if (grid[rowIdx][colIdx] === "o") {
    return (
      <CellUiContainer colIdx={colIdx} rowIdx={rowIdx}>
        <Circle className={styles.boardMarkerCircle} />
      </CellUiContainer>
    );
  }
};

const Cell = ({ colIdx, rowIdx }: CellProps) => {
  const { grid, updateGridCell } = useGridContext();

  const handleOnDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const draggedItemData = event.dataTransfer.getData("application/json");

    const data = JSON.parse(draggedItemData);
    updateGridCell(rowIdx, colIdx, data.value as GridItem);
  };

  if (grid[rowIdx][colIdx] === null) {
    return (
      <CellUiContainer rowIdx={rowIdx} colIdx={colIdx}>
        <div
          className={styles.droppableBox}
          onDragEnter={() => undefined}
          onDragOver={(ev) => {
            ev.preventDefault();
          }}
          onDrop={handleOnDrop}
        ></div>
      </CellUiContainer>
    );
  }

  return <StaticCell colIdx={colIdx} rowIdx={rowIdx} />;
};

const CellMobile = ({ rowIdx, colIdx }: CellProps) => {
  const { currentPlayer, updateGridCell, grid } = useGridContext();

  const handleClick = () => {
    if (currentPlayer === null) {
      updateGridCell(rowIdx, colIdx, "x");
      return;
    }
    updateGridCell(rowIdx, colIdx, currentPlayer === "x" ? "o" : "x");
  };

  return grid[rowIdx][colIdx] ? (
    <StaticCell colIdx={colIdx} rowIdx={rowIdx} />
  ) : (
    <CellUiContainer rowIdx={rowIdx} colIdx={colIdx}>
      <div className={styles.droppableBox} onClick={handleClick}></div>
    </CellUiContainer>
  );
};

const GameOver = () => {
  const { gameEnded, currentPlayer } = useGridContext();

  const { width } = useWindowSize();

  const isMobile = width <= MOBILE_WIDTH;

  if (gameEnded) {
    return gameEnded.winner ? <h3>Winner: {gameEnded.winner}</h3> : <h3>Draw</h3>;
  }
  return currentPlayer === null && !isMobile ? (
    <h3>Drag and Drop to Start</h3>
  ) : null;
};

export { Cell, GameOver, CellMobile };
