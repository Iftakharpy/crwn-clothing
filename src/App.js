// React
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Custom components
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import SingInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

// Styles
import "./App.css";

export const BASE = "crwn-clothing";
const defaultPageTitle = "Crwn Clothing";
const PAGE_ROUTES = [
  {
    path: `${BASE}/`,
    name: "Home",
    element: <HomePage defaultPageTitle={defaultPageTitle} />,
  },
  {
    path: `${BASE}/shop`,
    name: "Shop",
    element: <Shop pageTitle="Shop" defaultPageTitle={defaultPageTitle} />,
  },
  {
    path: `${BASE}/signin`,
    name: "Signin",
    element: (
      <SingInAndSignUp pageTitle="Signin" defaultPageTitle={defaultPageTitle} />
    ),
  },
];

const HEADER_ROUTES = [
  {
    path: `${BASE}/`,
    name: "Home",
  },
  {
    path: `${BASE}/shop`,
    name: "Shop",
  },
];

function App() {
  return (
    <Router>
      <Header base={BASE} routes={HEADER_ROUTES} />
      <Routes>
        {PAGE_ROUTES.map(({ path, element, name }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
