import { DragEvent, ReactNode } from "react";
import cx from "classnames";
import Cross from "../../assets/icons/Cross";

import styles from "./gameButtons.module.scss";
import { GridItem, useGridContext } from "../../hooks/useGrid";
import Circle from "../../assets/icons/Circle";

const DraggableButton = ({
  value,
  children,
}: {
  value: GridItem;
  children: ReactNode;
}) => {
  const onDragEventStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("application/json", JSON.stringify({ value }));
    event.dataTransfer.effectAllowed = "move";
  };

  const { currentPlayer } = useGridContext();

  return (
    <div
      {...(currentPlayer !== value && { draggable: "true" })}
      onDragStart={onDragEventStart}
      className={cx(styles.draggableButton, {
        [styles.disabled]: value === currentPlayer,
      })}
    >
      {children}
    </div>
  );
};

const GameButtons = () => {
  const { gameEnded } = useGridContext();
  if (gameEnded) {
    return null;
  }
  return (
    <div className={styles.buttonsContainer}>
      <DraggableButton value="x">
        <Cross color="white" className={styles.cross} />
      </DraggableButton>
      <DraggableButton value="o">
        <Circle />
      </DraggableButton>
    </div>
  );
};

export { GameButtons };
