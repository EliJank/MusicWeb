import NavBar from "./assets/components/navigation/NavBar";
import "./App.css";
import Home from "./assets/page/home/Home.jsx";
import Footer from "./assets/components/footer/Footer.jsx";

import { Routes, Route } from "react-router-dom";
import Events from "./assets/page/events/Events.jsx";
import Page404 from "./assets/page/Page404.jsx";
import Support from "./assets/page/Support/Support.jsx";
import Event from "./assets/page/events/event.jsx";
import Cart from "./assets/page/Cart.jsx";
import Login from "./assets/page/user/Login.jsx";
import SignUp from "./assets/page/user/SignUp.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="/support" element={<Support />} />
        <Route path="/events/:id" element={<Event />} />
        <Route path="/cart/" element={<Cart />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
