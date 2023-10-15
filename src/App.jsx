import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { PizzaProvider } from "../src/context/MyContext";
import MammaMia from "./components/MammaMia";

function App() {
  return (
    <div className="App">
      <PizzaProvider>
        <MammaMia />
      </PizzaProvider>
    </div>
  );
}

export default App;
