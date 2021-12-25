// React
import React, { useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/features/user/userSlice";

// Custom components
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SingInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout/checkout.component";
import NotFound from "./components/NotFound/NotFound.component";
import Collection from "./pages/collection/collection.component";

// auth
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

// Styles
import "./App.css";
import { onSnapshot } from "firebase/firestore";

const App = () => {
  const BASE = useSelector((state) => state.defaults.base);

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
            dispatch(
              setUser({
                ...currentUser,
                createdAt: currentUser.createdAt.toMillis(),
              })
            );
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
      <Routes>
        <Route
          path={BASE}
          element={
            <Fragment>
              <Header />
              <Outlet />
            </Fragment>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="shop" element={<Outlet />}>
            <Route index element={<ShopPage pageTitle="Shop" />} />
            <Route path=":collectionId" element={<Collection />} />
          </Route>
          <Route path="checkout" element={<Checkout pageTitle="Checkout" />} />
          <Route
            path="signin"
            element={<SingInAndSignUp pageTitle="SignIn" />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
