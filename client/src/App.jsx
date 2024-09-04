import Menu from "./components/Menu";
import Divider from "./components/Divider";
import { Routes, Route } from "react-router-dom";
import Mainsection from "./components/Mainsection";

function App() {
  return (
    <>
      <div className="w-full">
        <Menu></Menu>
        <Mainsection />
      </div>
    </>
  );
}

export default App;
