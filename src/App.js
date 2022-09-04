import "bootstrap/dist/css/bootstrap.min.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { useState } from "react";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const PrivateRoute = (props) => {
  return props.isAuthenticated ? props.children : <LogIn />
};

const AuthRoute = (props) => {
  return props.isAuthenticated ? <Navigate to={"/"} /> : props.children;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  onAuthStateChanged(auth, user => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  });

  return (
      <BrowserRouter>
        <Header isAuthenticated={isAuthenticated} />
        <Routes>
          <Route
            path={"/signup"}
            element={(
              <AuthRoute isAuthenticated={isAuthenticated}>
                <SignUp />
              </AuthRoute>
            )}
          />
          <Route
            path={"/login"}
            element={(
              <AuthRoute isAuthenticated={isAuthenticated}>
                <LogIn />
              </AuthRoute>
            )}
          />
          <Route
            path={"/reset-password"}
            element={(
              <AuthRoute isAuthenticated={isAuthenticated}>
                <ResetPassword />
              </AuthRoute>
            )}
          />
          <Route
            path={"/"}
            element={(
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Home />
              </PrivateRoute>
            )}
          />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
