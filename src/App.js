import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Header />
          <Body imgSrc="./Nazar.jpg" name={"Nazar Horoshko"} position={"Team Lead"} />
    </div>
  );
}

export default App;
