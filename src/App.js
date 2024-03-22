import Main from "./components/Main";
import Menu from "./components/Menu";
import Coins from "../src/assets/images/coins.png";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  function ShowLogin(){
    setLogin(!login);
  }
  
  return (
    <>
      <img src={Coins} className="coins"></img>
      <Menu showLogin={ShowLogin} login={login}/>
      <Main showLogin={ShowLogin}/>
    </>
  );
}

export default App;
