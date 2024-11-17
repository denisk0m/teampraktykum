import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body"

function App() {
  return (
    <div className="App">
      <Header />
          <Body imgSrc="./PXL_20240808_122628861.jpg" name={"Mariana Huchko"} position={"Web Analyst"} />
    </div>
  );
}

export default App;
