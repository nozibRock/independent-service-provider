import "./App.css";
import Header from "./components/Pages/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Pages/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Register from "./components/Pages/Register/Register";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
