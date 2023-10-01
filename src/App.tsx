import "./App.css";
import Grid from "./components/Grid/Grid";
import { GridProvider } from "./hooks/useGrid";

function App() {
  return (
    <>
      <GridProvider>
        <Grid />
      </GridProvider>
    </>
  );
}

export default App;
