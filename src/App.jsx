import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
// import Login from "./components/Login";
import store from "./app/store";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
// import Home from "./components/Home";
// import UserSkills from "./components/UserSkills";
import PrivateRoute from "./components/PrivateRoute"; // Import the PrivateRoute component

const Login = lazy(() => import("./components/Login"));
const Home = lazy(() => import("./components/Home"));
const UserSkills = lazy(() => import("./components/UserSkills"));
function App() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <Provider store={store}>
      <Router>
        <Suspense
          fallback={
            <div className="h-screen flex justify-center items-center">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={<Navigate to={userData ? "/home" : "/login"} />}
            />
            <Route
              path="*"
              element={<Navigate to={userData ? "/home" : "/login"} />}
            />
            <Route path="/home" element={<PrivateRoute element={Home} />} />
            <Route
              path="/user-skills"
              element={<PrivateRoute element={UserSkills} />}
            />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
