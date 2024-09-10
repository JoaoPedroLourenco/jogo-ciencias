import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Outlet />
      {/* <Texto />
      <Form /> */}
    </div>
  );
}

export default App;
