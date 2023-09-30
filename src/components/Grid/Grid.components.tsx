import cx from "classnames";
import { useGridContext } from "../../hooks/useGrid";
import styles from "./grid.module.scss";
import { DragEvent, PropsWithChildren } from "react";
import { GridItem } from "../../hooks/useGrid";
import Circle from "../../assets/icons/Circle";

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
            // ev.dataTransfer.dropEffect = "none";

            ev.preventDefault();

            // ev.dataTransfer.setData("application/json",JSON.stringify({a:5}));
          }}
          onDrop={handleOnDrop}
        ></div>
      </CellUiContainer>
    );
  }

  if (grid[rowIdx][colIdx] === "x") {
    return (
      <CellUiContainer colIdx={colIdx} rowIdx={rowIdx}>
        x
      </CellUiContainer>
    );
  }
  if (grid[rowIdx][colIdx] === "o") {
    return (
      <CellUiContainer colIdx={colIdx} rowIdx={rowIdx}>
        <Circle />
      </CellUiContainer>
    );
  }
};

export { Cell };
