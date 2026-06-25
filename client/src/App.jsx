import NavBar from "./assets/components/navigation/NavBar";
import "./App.css";
import Home from "./assets/page/home/Home.jsx";
import Footer from "./assets/components/footer/Footer.jsx";

import { Routes, Route } from 'react-router-dom';
import Events from "./assets/page/events/Events.jsx";
import Page404 from "./assets/page/Page404.jsx";
import Support from "./assets/page/Support/Support.jsx";

function App() {
  return (
    <>
      <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="/support" element={<Support />} />
    </Routes>
      <Footer />
    </>
  );
}

export default App;
