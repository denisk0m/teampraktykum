import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Header />
          <Body imgSrc="./AndrewPhoto.jpg" name={"Andrew Hudyma"} position={"Technical Consultant   "} />
    </div>
  );
}

export default App;
