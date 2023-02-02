import "./App.css";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Riyadh from "./component/Riyadh";
import Jeddah from "./component/Jeddah";
import Alula from "./component/AlUla";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/AlUla" element={<Alula />}></Route>
        <Route path="/Riyadh" element={<Riyadh />}></Route>
        <Route path="/Jeddah" element={<Jeddah />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
