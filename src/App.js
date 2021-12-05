// React
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

// Custom components
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

// Styles
import "./App.css";

function App() {
  return (
    <Router>
      <Header base="crwn-clothing" />
      <Routes>
        <Route path="crwn-clothing" element={<Fragment>{<Outlet />}</Fragment>}>
          <Route path="" element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
