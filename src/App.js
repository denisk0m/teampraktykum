import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Header />
          <Body imgSrc="./photo_5318989376446916886_y.jpg" name={"Marta Zastrizhna"} position={"UI/UX Designer"} />
          <Body imgSrc = "./max-denysiuk.jpg" name={"Max Denysiuk"} position = {"QA"}/>
    </div>
  );
}

export default App;
