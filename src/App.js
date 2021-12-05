// React
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

// Custom components
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import SingInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

// Styles
import "./App.css";

const BASE = "crwn-clothing";
const ROUTES = [
  { path: `${BASE}/`, name: "Home" },
  { path: `${BASE}/shop`, name: "Shop" },
  { path: `${BASE}/signin`, name: "Signin" },
];

function App() {
  return (
    <Router>
      <Header base={BASE} routes={ROUTES} />
      <Routes>
        <Route path={BASE} element={<Fragment>{<Outlet />}</Fragment>}>
          <Route path="" element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signin" element={<SingInAndSignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
