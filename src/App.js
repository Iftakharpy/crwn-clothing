// React
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/user/userSlice";

// Custom components
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import SingInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

// auth
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

// Styles
import "./App.css";
import { onSnapshot } from "firebase/firestore";

export const BASE = "crwn-clothing";
const defaultPageTitle = "Crwn Clothing";
const PAGE_ROUTES = [
  {
    path: `${BASE}/`,
    name: "Home",
    ComponentToRender: HomePage,
    props: {},
  },
  {
    path: `${BASE}/shop`,
    name: "Shop",
    ComponentToRender: Shop,
    props: {
      pageTitle: "Shop",
    },
  },
  {
    path: `${BASE}/signin`,
    name: "Signin",
    ComponentToRender: SingInAndSignUp,
    props: {
      pageTitle: "SignIn",
    },
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

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // component did mount
    const unsubscribeFromAuthStateChangeEvent = onAuthStateChanged(
      auth,
      async (user) => {
        if (user !== null) {
          const userRef = await createUserProfileDocument(user);
          onSnapshot(userRef, (snapshot) => {
            const currentUser = { ...snapshot.data(), id: snapshot.id };
            const user = {
              displayName: currentUser.displayName,
              email: currentUser.email,
              id: currentUser.id,
            };
            dispatch(setUser(user));
          });
        } else {
          dispatch(setUser(null));
        }
      }
    );
    return () => {
      // component will unmount
      unsubscribeFromAuthStateChangeEvent();
    };
  });

  return (
    <Router>
      <Header base={BASE} routes={HEADER_ROUTES} />
      <Routes>
        {PAGE_ROUTES.map(({ path, name, ComponentToRender, props }) => {
          return (
            <Route
              key={path}
              path={path}
              element={
                <ComponentToRender
                  defaultPageTitle={defaultPageTitle}
                  {...props}
                ></ComponentToRender>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
