import './App.css';
import Header from "./Header"
import Dragon from "./Dragon"
import MoreDragons from "./MoreDragons"
import Intro from "./Intro"

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
