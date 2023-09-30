import "./App.css";
import { GameButtons } from "./components/Buttons/GameButtons";
import Grid from "./components/Grid/Grid";
import { GridProvider } from "./hooks/useGrid";

function App() {
  return (
    <>
      <GridProvider>
        <Grid />
        <GameButtons />
      </GridProvider>
    </>
  );
}

export default App;
