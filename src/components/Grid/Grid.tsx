import styles from "./grid.module.scss";
import { useGridContext } from "../../hooks/useGrid/useGrid";
import { Cell, GameOver } from "./Grid.components";
import { GameButtons } from "../Buttons/GameButtons";

const Grid = () => {
  const { grid } = useGridContext();

  ondrop;

  return (
    <div className={styles.mainContainer}>
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
      <GameButtons />
      <GameOver />
    </div>
  );
};

export default Grid;
