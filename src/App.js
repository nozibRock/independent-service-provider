import "./App.css";
import Header from "./components/Pages/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Pages/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Register from "./components/Pages/Register/Register";
import Login from "./components/Pages/Login/Login";
import Services from "./components/Pages/Services/Services";
import RequireAuth from "./Firebase/RequireAuth";
import CheckOut from "./components/Pages/CheckOut/CheckOut";
import NotFound from "./components/Pages/NotFound/NotFound";

import About from "./components/Pages/About/About";
import Blogs from "./components/Pages/Blogs/Blogs";

function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>

        <Route
          path="/checkOut"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
