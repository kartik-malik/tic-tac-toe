import styles from "./grid.module.scss";
import { useGridContext } from "../../hooks/useGrid/useGrid";
import { Cell } from "./Grid.components";

const Grid = () => {
  const { grid } = useGridContext();

  ondrop;

  return (
    <>
      <div className={styles.grid}>
        {grid.map((row, rowIdx) => {
          return row.map((_, colIdx) => {
            return (
              <Cell
                key={`${rowIdx},${colIdx}`}
                rowIdx={rowIdx}
                colIdx={colIdx}
              />
            );
          });
        })}
      </div>
    </>
  );
};

export default Grid;
