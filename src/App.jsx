import Navbar from "./component/Navbar";
import "./App.css";
import HeroTop from "./component/HeroTop";
import HeroButtom from "./component/HeroButtom";
import ButtomBody from "./component/ButtomBody";

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <HeroTop/>
        <HeroButtom/>
        <ButtomBody/>
      </div> 
    </>
  );
}

export default App;