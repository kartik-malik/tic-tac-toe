import styles from "./grid.module.scss";
import { useGridContext } from "../../hooks/useGrid/useGrid";
import { Cell, CellMobile, GameOver } from "./Grid.components";
import { GameButtons } from "../Buttons/GameButtons";
import useWindowSize from "../../hooks/useWindowSize";
import { MOBILE_WIDTH } from "../../constants";

const Grid = () => {
  const { grid } = useGridContext();

  const { width } = useWindowSize();

  const isMobile = width <= MOBILE_WIDTH;

  ondrop;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.grid}>
        {grid.map((row, rowIdx) => {
          return row.map((_, colIdx) => {
            return isMobile ? (
              <CellMobile
                key={`${rowIdx},${colIdx}`}
                rowIdx={rowIdx}
                colIdx={colIdx}
              />
            ) : (
              <Cell
                key={`${rowIdx},${colIdx}`}
                rowIdx={rowIdx}
                colIdx={colIdx}
              />
            );
          });
        })}
      </div>
      {!isMobile && <GameButtons />}
      <GameOver />
    </div>
  );
};

export default Grid;
