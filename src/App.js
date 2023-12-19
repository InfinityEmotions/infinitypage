import Main from "./components/Main";
import Menu from "./components/Menu";
import Coins from "../src/assets/images/coins.png";

function App() {

  return (
    <>
      <img src={Coins} className="coins"></img>
      <Menu />
      <Main />
    </>
  );
}

export default App;
