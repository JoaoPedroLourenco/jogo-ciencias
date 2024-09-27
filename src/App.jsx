import "./App.css";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Anotacoes from "./components/Anotações/Anotacoes";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="container">
        <Outlet />
      </div>
      <Anotacoes />
    </div>
  );
}

export default App;
