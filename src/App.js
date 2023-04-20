import React from "react";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feature from "../src/components/Feature";
import Service from "../src/components/Service";
import Meet from "../src/components/Meet";
import Signup from "../src/components/Signup";
import Review from "./components/Review";
import Booking from "./components/Booking";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/feature" element={<Feature />}></Route>
          <Route exact path="/service" element={<Service />}></Route>
          <Route exact path="/review" element={<Review />}></Route>
          <Route exact path="/meet" element={<Meet />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/booking" element={<Booking />}></Route>
        </Routes>
      </div>
    </Router>
  );
}


