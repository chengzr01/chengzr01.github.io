import React, { useState, useEffect } from "react";
import Page from "./components/Page/Page";
import Personal from "./components/Page/Personal";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/home" element={<Page />} exact />
        <Route path="/personal" element={<Personal />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
