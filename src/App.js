import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body"

function App() {
    return (<>
            <Header/>
            <div className="App" style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <Body imgSrc="./Nazar.jpg" name={"Nazar Horoshko"} position={"Team Lead"}/>
            <Body imgSrc="./PXL_20240808_122628861.jpg" name={"Mariana Huchko"} position={"Web Analyst"}/>
            <Body imgSrc="./AndrewPhoto.jpg" name={"Hm, not so nice!"} position={"Technical Consultant   "}/>
            <Body imgSrc="./photo_5318989376446916886_y.jpg" name={"Marta Zastrizhna"} position={"UI/UX Designer"}/>
            <Body imgSrc="./max-denysiuk.jpg" name={"Max Denysiuk"} position={"QA"}/>
            </div>
        </>
    );
}


const photoStyle = {
    marginLeft: "40vw",
    objectFit: "cover",
}
export default App;
