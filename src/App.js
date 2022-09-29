import './App.css';
import Header from "./components/Header"
import Dragon from "./components/Dragon"
import MoreDragons from "./components/MoreDragons"
import Intro from "./components/Intro"

function App() {
  return (
    <div className="App">
        <Header />
        <Intro />
        <Dragon />
        <MoreDragons />
    </div>
  );
}

export default App;
