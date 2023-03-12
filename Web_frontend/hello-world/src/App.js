import "../src/main.css"
import Navbar from "./components/navbar/Navbar";
import Blocks from "./components/blocks/Blocks";
import Stats from "./components/stats/Stats";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Blocks />
        <Stats />
    </div>
  );
}

export default App;
