import React, { useState, useEffect } from "react";
import Page from "./components/Page/Page";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App" id={"scroll"}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
