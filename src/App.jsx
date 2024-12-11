import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Hire from "./components/pages/Hire";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Header from "./components/constant/Header";
import PageTransition from "./components/transition/Transition";
import Projects from "./components/pages/Projects";
import Error from "./components/pages/Error";

function App() {
  return (
    <>
      <Header />
      <PageTransition>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </PageTransition>
    </>
  );
}

export default App;
