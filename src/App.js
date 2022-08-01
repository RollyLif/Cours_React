import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import "./styles/index.scss"

const App=()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        {/* path= "*" renvoie quand on entre un chemin non définit*/}
        <Route path="/*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;