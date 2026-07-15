import NavBar from "./assets/components/navigation/NavBar";
import "./App.css";
import Home from "./assets/page/home/Home.jsx";
import Footer from "./assets/components/footer/Footer.jsx";

import { Routes, Route } from "react-router-dom";
import Events from "./assets/page/events/Events.jsx";
import Page404 from "./assets/page/404page/Page404.jsx";
import Support from "./assets/page/support/Support.jsx";
import Event from "./assets/page/events/event.jsx";
import Cart from "./assets/page/cart/Cart.jsx";
import Login from "./assets/page/user/Login.jsx";
import SignUp from "./assets/page/user/SignUp.jsx";
import AllMerch from "./assets/page/merch/AllMerch.jsx";
import MerchPage from "./assets/page/merch/MerchPage.jsx";
import Profile from "./assets/page/user/Profile.jsx";
import Checkout from "./assets/page/checkout/Checkout.jsx";
import ThankYou from "./assets/page/checkout/ThankYou.jsx";
import Community from "./assets/page/community/Community.jsx";
import CreateNewEvent from "./assets/page/community/CreateNewEvent.jsx";
import CreateNewMerch from "./assets/page/community/CreateNewMerch.jsx";

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
        <Route path="/merch" element={<AllMerch />} />
        <Route path="/merch/:id" element={<MerchPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/community" element={<Community />} />
        <Route path="/create-event" element={<CreateNewEvent />} />
        <Route path="/sell-merch" element={<CreateNewMerch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
